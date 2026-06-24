import { MdTerminal } from "react-icons/md";
import { RiArrowRightFill } from "react-icons/ri";
import Link from "next/link"; // Next.js এর লিংকের জন্য

const StoryCard = ({ story }) => {
  if (!story) return null;

  return (
    <Link href={`/dev/${story.repoName}`}>
      <article className="bg-surface-container-low border group flex flex-col h-full border-white/20">
        <div className="relative h-60 overflow-hidden shrink-0">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            data-alt={story.repoName}
            // 🟢 Fix: ডাবল কোটেশন বাদ দিয়ে সরাসরি ব্যাকটিক (``) ব্যবহার করা হয়েছে
            style={{
              backgroundImage: `url(${story.coverPhoto})`,
            }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            {/* 🟢 ডাইনামিক Story Type বসানো হয়েছে */}
            <span className="bg-primary text-background font-label-sm text-[10px] px-2 py-0.5 inline-block font-bold uppercase">
              {story.storyType}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          {/* 🟢 ডাইনামিক Title হিসেবে repoName বসানো হয়েছে এবং হাইফেন সড়িয়ে স্পেস দেওয়া হয়েছে */}
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
                {/* যেহেতু আপনার ডেটাতে এখন ইউজারের নাম নেই, তাই আমি হার্ডকোডেড রেখেছি। 
                  পরে User কালেকশন থেকে পপুলেট (populate) করে এখানে বসাতে পারবেন। */}
                <p className="font-body-md text-[14px] text-on-surface font-semibold truncate">
                  Alex Rivera
                </p>
                <p className="font-label-sm text-[11px] text-on-surface-variant truncate">
                  @arivera_dev
                </p>
              </div>
            </div>

            {/* 🟢 ডাইনামিক লিংক তৈরি করা হয়েছে যাতে ক্লিক করলে ঐ নির্দিষ্ট স্টোরিতে যায় */}
            <Link
              className="text-primary hover:text-primary-container transition-colors"
              href={`/story/${story._id}`}
            >
              <span className="flex items-center gap-1">
                See Story <RiArrowRightFill />
              </span>
            </Link>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default StoryCard;
