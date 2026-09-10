"use client";

import { useState } from "react";
import Link from "next/link";
import { MdTerminal, MdDelete } from "react-icons/md";
import { RiArrowRightFill } from "react-icons/ri";
import Modal from "@/components/Modal";
import { deleteStory } from "@/actions";
import { useRouter } from "next/navigation";

const ArchiveClient = ({ initialStories, userId }) => {
  const router = useRouter();
  const [stories, setStories] = useState(initialStories);
  const [storyToDelete, setStoryToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteConfirm = async () => {
    if (!storyToDelete) return;
    setIsDeleting(true);

    try {
      const res = await deleteStory(storyToDelete._id, userId);
      if (res.success) {
        setStories(stories.filter((s) => s._id !== storyToDelete._id));
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to delete story.");
    } finally {
      setIsDeleting(false);
      setStoryToDelete(null);
      router.refresh();
    }
  };

  if (stories.length === 0) {
    return (
      <div className="text-center mt-10 text-on-surface-variant font-medium pb-8 border border-outline-variant/30 rounded-xl p-12 bg-surface-container/20">
        You haven&apos;t generated any stories yet.
      </div>
    );
  }

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 md:gap-8">
        {stories.map((story) => (
          <article
            key={story._id}
            className="bg-surface-container-low border group flex flex-col h-full border-white/20 relative"
          >
            <Link
              href={`/story/${story._id}`}
              className="absolute inset-0 z-0 opacity-0"
              aria-label={`View ${story.repoName}`}
            />

            {/* Delete Button overlay */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setStoryToDelete(story);
              }}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 hover:bg-red-500/90 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
              aria-label="Delete Story"
            >
              <MdDelete className="text-xl" />
            </button>

            <div className="relative h-40 xs:h-48 md:h-60 overflow-hidden shrink-0">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${story.coverPhoto})` }}
              ></div>
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary text-background font-label-sm text-[10px] px-2 py-0.5 inline-block font-bold uppercase">
                  {story.storyType}
                </span>
              </div>
            </div>

            <div className="p-4 md:p-6 flex flex-col grow">
              <h2 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors line-clamp-2 mb-6 capitalize">
                {story.repoName?.replace(/-/g, " ")}
              </h2>

              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-surface-container-highest border border-outline-variant flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      <MdTerminal />
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-body-md text-[14px] text-on-surface font-semibold truncate">
                      Your Repository
                    </p>
                  </div>
                </div>

                <Link
                  className="text-primary hover:text-primary-container transition-colors relative z-10"
                  href={`/story/${story._id}`}
                >
                  <span className="flex items-center gap-1">
                    See Story <RiArrowRightFill />
                  </span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <Modal
        isOpen={!!storyToDelete}
        onClose={() => !isDeleting && setStoryToDelete(null)}
        title="Delete Story"
        message={`Are you sure you want to delete the story for "${storyToDelete?.repoName?.replace(/-/g, " ")}"? This action cannot be undone.`}
        onConfirm={handleDeleteConfirm}
        confirmText={isDeleting ? "Deleting..." : "Delete"}
        isDestructive={true}
      />
    </>
  );
};

export default ArchiveClient;
