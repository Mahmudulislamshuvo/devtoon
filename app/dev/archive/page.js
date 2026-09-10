import { getUserAllStories } from "@/actions";
import { authOptions } from "@/lib/auth";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/userSchema";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ArchiveClient from "@/components/dashboard/ArchiveClient";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";

export const metadata = {
  title: "My Archive — DevToon",
};

export default async function ArchivePage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    redirect("/login");
  }

  await dbConnect();
  const dbUser = await User.findById(session.user.id);
  
  if (!dbUser) {
    redirect("/login");
  }

  const myStories = await getUserAllStories(dbUser._id);

  return (
    <div className="flex flex-col min-h-screen dashboard-shell">
      <main className="grow pt-xl pb-block-gap">
        <div className="max-w-container-max-width mx-auto px-4 xs:px-margin-mobile sm:px-md md:px-margin-desktop xl:px-margin-edge">
          <Link
            href="/dev"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm mb-6"
          >
            <MdArrowBack /> Back to Dashboard
          </Link>

          <header className="mb-block-gap border-l-4 border-primary pl-4 md:pl-8 py-3 md:py-4 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-display-lg text-2xl xs:text-3xl md:text-display-lg text-on-surface uppercase tracking-tight">
                My Story Archive
              </h1>
              <p className="text-on-surface-variant mt-2">
                All AI-generated stories crafted from your repositories.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-on-surface font-code-sm">
              Total Stories: <span className="text-primary font-bold">{myStories.length}</span>
            </div>
          </header>

          <ArchiveClient initialStories={myStories} userId={dbUser._id.toString()} />
        </div>
      </main>
    </div>
  );
}
