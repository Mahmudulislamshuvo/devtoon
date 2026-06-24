import { getStoriesInfo } from "@/actions";
import StoriesInfinityScrolling from "@/components/slelitons/StoriesInfinityScrolling";

export default async function Home() {
  const initialStories = await getStoriesInfo(1, 10);
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow pt-24 pb-block-gap">
        <div className="max-w-container-max-width mx-auto px-margin-edge">
          {/* */}
          <header className="mb-block-gap border-l-4 border-primary pl-8 py-4">
            <h1 className="font-display-lg text-display-lg text-on-surface uppercase tracking-tight">
              Story Stream
            </h1>
          </header>

          {/* */}
          <StoriesInfinityScrolling initialStories={initialStories} />
        </div>
      </main>
    </div>
  );
}
