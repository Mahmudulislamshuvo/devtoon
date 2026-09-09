"use client";

import Image from "next/image";
import { useEffect } from "react";
import { MdHistory } from "react-icons/md";

import Link from "next/link";

const timeAgo = (dateInput) => {
  const date = new Date(dateInput);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  
  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) return interval + " year" + (interval === 1 ? "" : "s") + " ago";
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return interval + " month" + (interval === 1 ? "" : "s") + " ago";
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return interval + " day" + (interval === 1 ? "" : "s") + " ago";
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return interval + " hour" + (interval === 1 ? "" : "s") + " ago";
  interval = Math.floor(seconds / 60);
  if (interval >= 1) return interval + " min" + (interval === 1 ? "" : "s") + " ago";
  return "just now";
};

const RightSide = ({ recentStories = [] }) => {
  useEffect(() => {
    const cards = document.querySelectorAll(".dashboard-sidebar .glass-card");
    const handleMouseMove = (event) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (event) => {
      event.currentTarget.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <aside className="dashboard-sidebar lg:col-span-4 space-y-md">
      <div className="flex items-center justify-between mb-sm">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Recent Stories
        </h2>
        <MdHistory className="text-on-surface-variant" />
      </div>
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="p-md space-y-md">
          {recentStories.length === 0 ? (
            <p className="text-on-surface-variant text-center py-4 text-sm font-medium">
              No recent stories found.
            </p>
          ) : (
            recentStories.map((story) => (
              <Link
                href={`/story/${story._id}`}
                key={story._id}
                className="flex gap-sm p-sm rounded bg-white/5 border border-transparent hover:border-tertiary/20 transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 rounded overflow-hidden shrink-0 border border-white/10 relative">
                  {story.coverPhoto ? (
                    <Image
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt={story.repoName}
                      src={story.coverPhoto}
                      fill
                      sizes="64px"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/20" />
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-on-surface font-semibold text-body-md group-hover:text-tertiary transition-colors line-clamp-1 capitalize">
                    {story.repoName.replace(/-/g, " ")}
                  </h4>
                  <p className="text-on-surface-variant font-code-sm text-code-sm mt-1">
                    {timeAgo(story.createdAt)}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
        
        {recentStories.length > 0 && (
          <div className="bg-white/5 p-sm border-t border-white/10 text-center">
            <Link href="/" className="font-label-caps text-label-caps text-primary hover:underline">
              View All Stories
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
};

export default RightSide;
