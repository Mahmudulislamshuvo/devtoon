"use client";

import BookFlip from "@/components/bookDesign/BookFlip";
import Profile from "@/components/userName/Profile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MdAutoAwesome, MdErrorOutline, MdHourglassTop } from "react-icons/md";

const DevUsernamePage = () => {
  const pathname = usePathname();
  const repoName = pathname.split("/").pop();

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [finalStory, setFinalStory] = useState(null);

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!repoName || hasFetched.current) return;
    hasFetched.current = true;

    const runPipeLine = async () => {
      try {
        setStatus("fetching_commits");

        const commitRes = await fetch("/api/getting-book", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ repoName }),
        });

        if (!commitRes.ok) {
          const errData = await commitRes.json();
          throw new Error(
            errData.error || "Failed to fetch commits from GitHub",
          );
        }

        const { cleanCommits } = await commitRes.json();

        setStatus("generating_story");

        const storyRes = await fetch("/api/ai-gen-book", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ repoName, cleanCommits }),
        });

        if (!storyRes.ok) {
          const errData = await storyRes.json();
          throw new Error(errData.error || "Failed to generate story with AI");
        }

        const result = await storyRes.json();

        setFinalStory(result.data);
        setStatus("success");
      } catch (error) {
        console.error("Pipeline Execution Error:", error);
        setErrorMessage(error.message || "Something went wrong!");
        setStatus("error");
      }
    };
    runPipeLine();
  }, [repoName]);

  console.log("Current :", finalStory);

  return (
    <main className="pt-xl pb-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto space-y-xl">
      {/* <!-- Profile Header Section --> */}
      <Profile />
      {/* <!-- Main Content: Interactive Storyboard --> */}
      <section className="space-y-lg">
        <div className="flex items-center justify-between">
          <div className="space-y-base">
            <h2 className="font-headline-lg text-headline-lg text-primary flex items-center gap-sm">
              <MdAutoAwesome className="text-3xl" />
              Dev Storyboard
            </h2>
            <p className="font-code-sm text-code-sm text-on-surface-variant">
              Commit snapshots from the latest narrative arcs
            </p>
          </div>
          <div className="flex gap-sm">
            <span className="px-sm py-xs bg-secondary/10 text-secondary border border-secondary/30 rounded font-label-caps text-label-caps">
              AI Narrative
            </span>
          </div>
        </div>

        {status === "fetching_commits" ? (
          <div className="flex items-center justify-center min-h-[60vh] w-full px-4">
            <div className="flex flex-col items-center max-w-lg w-full text-center space-y-xl">
              <div className="relative flex items-center justify-center w-16 h-16">
                <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-75"></div>
                <div className="absolute inset-0 rounded-full border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                <MdHourglassTop className="text-2xl text-primary animate-pulse" />
              </div>

              <div className="space-y-md">
                <span className="px-3 py-1 bg-primary/5 border border-primary/20 rounded-full text-primary font-mono text-xs uppercase tracking-widest">
                  Status: Scanning Repository
                </span>
                <div className="space-y-sm">
                  <h3 className="text-on-surface font-headline-md text-xl md:text-2xl font-bold tracking-wide">
                    Your project's history is being flipped through...
                  </h3>
                  <p className="text-on-surface-variant font-sans text-base md:text-lg leading-relaxed">
                    আপনার প্রজেক্টের ইতিহাসের পাতা উল্টানো হচ্ছে...
                  </p>
                </div>
              </div>

              <div className="inline-block bg-white/[0.02] border border-white/5 py-2 px-4 rounded-lg text-xs font-mono text-on-surface-variant/60">
                Reading commit logs from GitHub / গিটহাব থেকে ডাটা রিড করা হচ্ছে
              </div>
            </div>
          </div>
        ) : status === "generating_story" ? (
          <div className="flex items-center justify-center min-h-[60vh] w-full px-4">
            <div className="flex flex-col items-center max-w-lg w-full text-center space-y-xl">
              <div className="relative flex items-center justify-center w-16 h-16">
                <div className="absolute inset-0 rounded-full bg-tertiary/10 blur-xl animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-tertiary/40 animate-spin [animation-duration:6s]"></div>
                <MdAutoAwesome className="text-3xl text-tertiary animate-bounce shadow-[0_0_20px_rgba(34,211,238,0.4)]" />
              </div>
              <div className="space-y-md">
                <span className="px-3 py-1 bg-tertiary/5 border border-tertiary/20 rounded-full text-tertiary font-mono text-xs uppercase tracking-widest">
                  Status: Crafting Narrative
                </span>
                <div className="space-y-sm">
                  <h3 className="text-on-surface font-headline-md text-xl md:text-2xl font-bold tracking-wide">
                    AI is generating your story...
                  </h3>
                  <p className="text-on-surface-variant font-sans text-base md:text-lg leading-relaxed">
                    এআই আপনার কোডগুলো দিয়ে মহাকাব্য রচনা করছে...
                  </p>
                </div>
              </div>
              =
              <div className="inline-block bg-white/[0.02] border border-white/5 py-2 px-4 rounded-lg text-xs font-mono text-on-surface-variant/60">
                Structuring chapters & translations / চ্যাপ্টারগুলো সাজানো হচ্ছে
              </div>
            </div>
          </div>
        ) : status === "error" ? (
          <div className="flex items-center justify-center min-h-[60vh] w-full px-4">
            <div className="glass-card border border-red-500/20 p-lg md:p-xl rounded-2xl max-w-md w-full text-center space-y-md backdrop-blur-md shadow-[0_0_30px_rgba(239,68,68,0.05)] transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <MdErrorOutline className="text-3xl" />
              </div>

              <div className="space-y-xs">
                <h3 className="text-red-400 font-headline-md tracking-wide text-xl font-bold">
                  Something went wrong!
                </h3>
                <p className="text-on-surface-variant font-code-sm text-sm">
                  বই তৈরি করা সম্ভব হয়নি
                </p>
              </div>

              <div className="bg-red-950/20 border border-red-950/50 rounded-lg p-base text-left max-h-24 overflow-y-auto custom-scrollbar">
                <p className="text-red-300/80 font-code-sm text-xs leading-relaxed break-words">
                  {errorMessage}
                </p>
              </div>

              <button
                onClick={() => window.location.reload()}
                className="w-full py-sm bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 text-red-400 font-label-caps text-label-caps rounded-lg transition-all active:scale-95"
              >
                Try Again / আবার চেষ্টা করুন
              </button>
            </div>
          </div>
        ) : (
          <BookFlip finalStory={finalStory} />
        )}

        {/* <!-- Bento Grid of Flip Cards --> */}
      </section>
      {/* <!-- Recruitment / CTA Section --> */}
      <section className="glass-pane rounded-xl p-lg md:p-xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-transparent to-secondary/10 opacity-50"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-lg">
          <div className="space-y-sm text-center md:text-left">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Like what you see?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              I'm currently open to new opportunities in AI, High-Performance
              Systems, and Frontend Engineering. Let's build the future
              together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-sm w-full md:w-auto">
            <button className="bg-primary text-on-primary font-label-caps text-label-caps py-sm px-lg rounded-lg glow-cyan hover:scale-105 transition-transform whitespace-nowrap">
              Hire @@Mahmudulislamshuvo
            </button>
            <Link
              href="https://github.com/Mahmudulislamshuvo"
              target="_blank"
              className="border border-outline text-on-surface font-label-caps text-label-caps py-sm px-lg rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap"
            >
              View GitHub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DevUsernamePage;
