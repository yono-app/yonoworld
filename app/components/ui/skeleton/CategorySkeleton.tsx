import React from "react";
import { Skeleton } from "./Skeleton";

export function CategorySkeleton() {
  return (
    <div aria-hidden="true" className="flex items-center gap-2 overflow-x-auto py-1">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-9 w-24 sm:w-28 rounded-full shrink-0" />
      ))}
    </div>
  );
}
