"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import StoryCard from "../home/StoryCard";
import StoryCardSkeliton from "./StoryCardSkeliton";

const StoriesInfinityScrolling = ({ initialStories }) => {
  const [stories, setStories] = useState(initialStories);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialStories.length >= 10);

  // Observer
  const observer = useRef(null);

  const lastStoryElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  useEffect(() => {
    if (page === 1) return;

    const loadMoreStories = async () => {
      setLoading(true);
      try {
        const newStories = await getStoriesInfo(page, 10);

        if (newStories.length === 0) {
          setHasMore(false);
        } else {
          setStories((prev) => [...prev, ...newStories]);
          if (newStories.length < 10) setHasMore(false);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadMoreStories();
  }, [page]);

  return (
    <>
      <section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        id="story-stream"
      >
        {stories.map((story, index) => {
          if (stories.length === index + 1) {
            return (
              <div ref={lastStoryElementRef} key={story._id}>
                {story?.story?.map((s) => (
                  <StoryCard key={s._id} story={s} />
                ))}
              </div>
            );
          } else {
            return <StoryCard key={story._id} story={story} />;
          }
        })}

        {loading && (
          <>
            <StoryCardSkeliton />
            <StoryCardSkeliton />
            <StoryCardSkeliton />
          </>
        )}
      </section>

      {!hasMore && (
        <div className="text-center mt-10 text-gray-500 font-medium pb-8">
          No more stories to load.
        </div>
      )}
    </>
  );
};

export default StoriesInfinityScrolling;
