import LeftSide from "@/components/dashboard/LeftSide";
import RightSide from "@/components/dashboard/RightSide";
import { dbConnect } from "@/lib/dbConnect";
import { authOptions } from "@/lib/auth";
import User from "@/models/userSchema";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const authenticatedUser = await getServerSession(authOptions);
  await dbConnect();
  const userName = authenticatedUser?.user?.id
    ? await User.findById(authenticatedUser.user.id)
    : null;

  return (
    <div className="dashboard-shell">
      <main className="pt-xl pb-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto min-h-screen">
        {/* Welcome Header */}
        <div className="mb-lg mt-md">
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-base">
            Welcome back,{" "}
            <span className="text-primary">@{userName?.githubUsername}</span>
          </h1>
          <p className="text-on-surface-variant font-code-sm text-code-sm">
            SYSTEM STATUS: SYNCED WITH GITHUB CLOUD // 04 NEW COMMITS DETECTED
          </p>
        </div>
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Side: Repositories (Main Content) */}
          <LeftSide />
          {/* Right Side: Recent Stories (Sidebar) */}
          <RightSide />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
