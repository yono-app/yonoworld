import React from "react";
import { Skeleton } from "./Skeleton";

export function SpotlightCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden bg-gradient-to-br from-[#16172D] via-[#1A1C38] to-[#121327] rounded-3xl p-5 sm:p-6 border border-violet-500/30 shadow-2xl space-y-4"
    >
      {/* Top Header Tag Bar */}
      <div className="flex items-center justify-between gap-2">
        <Skeleton className="h-6 w-44 rounded-full bg-amber-500/20" />
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0 w-full sm:w-auto">
          {/* Logo Skeleton */}
          <Skeleton className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shrink-0" />

          {/* Info Column */}
          <div className="flex-1 min-w-0 space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-40 sm:w-56 rounded-md" />
              <Skeleton className="h-4 w-16 rounded-full" />
            </div>
            <Skeleton className="h-3.5 w-full max-w-sm rounded-md" />
            <div className="flex items-center gap-2 pt-1">
              <Skeleton className="h-6 w-28 rounded-xl" />
              <Skeleton className="h-6 w-28 rounded-xl" />
            </div>
          </div>
        </div>

        {/* CTA Button Skeleton */}
        <div className="w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
          <Skeleton className="h-12 w-full sm:w-44 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
