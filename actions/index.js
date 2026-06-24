"use server";

import { dbConnect } from "@/lib/dbConnect";
import Story from "@/models/storySchema";
import User from "@/models/userSchema";

const fetchImageFromUnsplash = async (query) => {
  try {
    const accessKey = process.env.UNSPLASH_ACCESS_KEY;

    const uniqueId = Math.random().toString(36).substring(2, 9) + Date.now();

    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&client_id=${accessKey}&sig=${uniqueId}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }

    const data = await response.json();

    return data.urls.regular;
  } catch (error) {
    console.error("Error fetching image from Unsplash:", error);
    return null;
  }
};

export const getStoriesInfo = async (page = 1, limit = 10) => {
  try {
    await dbConnect();

    const skip = (page - 1) * limit;

    let stories = await Story.find({})
      .select("_id userId repoName storyType coverPhoto")
      .populate({
        path: "userId",
        select: "name githubUsername",
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const updatePromises = stories.map(async (story) => {
      if (!story.coverPhoto) {
        const newImageUrl = await fetchImageFromUnsplash(
          story.storyType || "technology",
        );

        if (newImageUrl) {
          await Story.updateOne(
            { _id: story._id },
            { $set: { coverPhoto: newImageUrl } },
          );

          story.coverPhoto = newImageUrl;
        }
      }
      return story;
    });

    stories = await Promise.all(updatePromises);

    return JSON.parse(JSON.stringify(stories));
  } catch (error) {
    console.error("Error fetching stories:", error);
    return [];
  }
};

export const getStoryById = async (storyId) => {
  try {
    await dbConnect();

    const story = await Story.findById(storyId)
      .populate({
        path: "userId",
        select: "name githubUsername",
      })
      .lean();

    if (!story) return null;

    return JSON.parse(JSON.stringify(story));
  } catch (error) {
    console.error("Error fetching story by id:", error);
    return null;
  }
};

export const getUserInfoById = async (userId) => {
  try {
    await dbConnect();

    const user = await User.findById(userId)
      .select("-password -githubAccessToken")
      .lean();

    if (!user) {
      return null;
    }

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.error("Error fetching user info:", error);

    return null;
  }
};
