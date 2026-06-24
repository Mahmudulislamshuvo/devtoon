import { getStoryById } from "@/actions";
import BookFlip from "@/components/bookDesign/BookFlip";
import Link from "next/link";
import { MdAutoAwesome, MdArrowBack, MdErrorOutline } from "react-icons/md";

export async function generateMetadata({ params }) {
  const { storyId } = await params;
  const story = await getStoryById(storyId);
  return {
    title: story
      ? `${story.repoName.replace(/-/g, " ")} — DevToon Story`
      : "Story Not Found — DevToon",
    description: story
      ? `Read the AI-generated story for ${story.repoName} on DevToon.`
      : "Story not found.",
  };
}

const StoryPage = async ({ params }) => {
  const { storyId } = await params;
  const story = await getStoryById(storyId);

  if (!story) {
    return (
      <main className="pt-xl pb-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="glass-card border border-red-500/20 p-lg md:p-xl rounded-2xl text-center space-y-md">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-red-500/10 border border-red-500/30 rounded-full text-red-400">
              <MdErrorOutline className="text-3xl" />
            </div>
            <h1 className="text-red-400 font-headline-md text-xl font-bold">
              Story Not Found
            </h1>
            <p className="text-on-surface-variant text-sm">
              এই গল্পটি খুঁজে পাওয়া যায়নি।
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors text-sm"
            >
              <MdArrowBack /> Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const author = story.userId;

  return (
    <main className="pt-xl pb-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm"
      >
        <MdArrowBack /> Back to Story Stream
      </Link>

      {/* Story Header */}
      <section className="">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-on-surface capitalize">
              {story.repoName.replace(/-/g, " ")}
            </h1>
            <p className="text-on-surface-variant text-sm mt-1">
              by{" "}
              <span className="text-primary font-semibold">
                {author?.name || "Unknown"}
              </span>
              {author?.githubUsername && (
                <span className="text-on-surface-variant/60 ml-1">
                  (@{author.githubUsername})
                </span>
              )}
            </p>
          </div>
          <span className="px-2 py-1 bg-secondary/10 text-secondary border border-secondary/30 rounded text-[10px] font-bold uppercase tracking-wider">
            {story.storyType}
          </span>
        </div>
      </section>

      {/* Book Content */}
      <section className="space-y-lg">
        <BookFlip finalStory={story} />
      </section>
    </main>
  );
};

export default StoryPage;
