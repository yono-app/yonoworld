import React from "react";
import { Skeleton } from "./Skeleton";

export function GameCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden bg-[#12131F]/80 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border border-white/10 shadow-xl backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
    >
      {/* Left side: Logo + Title + Offer pills */}
      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 w-full sm:w-auto">
        {/* Rank Skeleton */}
        <Skeleton className="w-6 h-6 rounded-lg shrink-0" />

        {/* Logo Container Skeleton */}
        <Skeleton className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl shrink-0" />

        {/* Info Column Skeleton */}
        <div className="flex-1 min-w-0 space-y-2">
          {/* Title row */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-32 sm:w-44 rounded-md" />
            <Skeleton className="h-4 w-14 rounded-full" />
          </div>

          {/* Rating */}
          <Skeleton className="h-3 w-24 rounded-md" />

          {/* Offer Pills */}
          <div className="flex items-center gap-1.5 pt-1">
            <Skeleton className="h-5 w-24 sm:w-28 rounded-lg" />
            <Skeleton className="h-5 w-20 sm:w-24 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Right side: Download Button Skeleton */}
      <div className="w-full sm:w-auto shrink-0 flex items-center justify-end pt-1 sm:pt-0 border-t sm:border-t-0 border-white/5">
        <Skeleton className="h-10 sm:h-11 w-full sm:w-36 rounded-xl sm:rounded-2xl" />
      </div>
    </div>
  );
}
