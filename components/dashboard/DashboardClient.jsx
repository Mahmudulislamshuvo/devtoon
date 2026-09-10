"use client";

import { useState } from "react";
import LeftSide from "@/components/dashboard/LeftSide";
import RightSide from "@/components/dashboard/RightSide";
import StoriesDrawer from "@/components/dashboard/StoriesDrawer";

/**
 * DashboardClient — Drawer state ধরে রাখে এবং
 * mobile/tablet-এ StoriesDrawer, desktop-এ inline RightSide দেখায়
 */
const DashboardClient = ({ recentStories }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Desktop: 12-col grid (lg+)
          Mobile/Tablet: শুধু LeftSide full-width */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left: Repositories */}
        <LeftSide onOpenStoriesDrawer={() => setIsDrawerOpen(true)} />

        {/* Right: Recent Stories — শুধু desktop-এ দেখাবে */}
        <div className="hidden lg:block lg:col-span-4">
          <RightSide recentStories={recentStories} />
        </div>
      </div>

      {/* Mobile/Tablet Left-side Drawer */}
      <StoriesDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <RightSide recentStories={recentStories} showHeader={false} />
      </StoriesDrawer>
    </>
  );
};

export default DashboardClient;
