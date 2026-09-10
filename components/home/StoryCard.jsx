import { MdTerminal } from "react-icons/md";
import { RiArrowRightFill } from "react-icons/ri";
import Link from "next/link";

const StoryCard = ({ story }) => {
  if (!story) return null;

  return (
    <>
      <Link href={`/story/${story?._id}`} className="group block h-full">
        <article className="bg-surface-container-low border flex flex-col h-full border-white/20 relative hover:border-primary/50 transition-colors">
          <div className="relative h-40 xs:h-48 md:h-60 overflow-hidden shrink-0">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              data-alt={story?.repoName}
              style={{
                backgroundImage: `url(${story?.coverPhoto})`,
              }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-primary text-background font-label-sm text-[10px] px-2 py-0.5 inline-block font-bold uppercase">
                {story?.storyType}
              </span>
            </div>
          </div>

          <div className="p-4 md:p-6 flex flex-col grow">
            <h2 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors line-clamp-2 mb-6 capitalize">
              {story?.repoName?.replace(/-/g, " ")}
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
                    {story?.userId?.name || "Unknown User"}
                  </p>
                  <p className="font-label-sm text-[11px] text-on-surface-variant truncate">
                    {story?.userId?.githubUsername
                      ? `@${story.userId.githubUsername}`
                      : "@unknown_user"}
                  </p>
                </div>
              </div>

              <div className="text-primary group-hover:text-primary-container transition-colors relative z-10 flex items-center gap-1">
                See Story <RiArrowRightFill />
              </div>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};

export default StoryCard;
