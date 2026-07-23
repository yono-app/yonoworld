"use client";

import React, { useState, useMemo } from "react";
import AppCard from "./AppCard";
import { Pagination } from "./ui/Pagination";
import type { Game } from "@/store/slices/gameSlice";

interface RelatedAppsSectionProps {
  games: Game[];
  initialPageSize?: number;
  pageSize?: number;
}

export default function RelatedAppsSection({
  games,
  initialPageSize = 15,
  pageSize: propPageSize,
}: RelatedAppsSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(propPageSize ?? initialPageSize);

  const totalPages = Math.ceil(games.length / pageSize) || 1;

  const paginatedGames = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return games.slice(start, start + pageSize);
  }, [games, currentPage, pageSize]);

  if (games.length === 0) return null;

  return (
    <div id="related-apps-section" className="space-y-4 pt-4">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
          <span>✨</span>
          <span>People Also Downloaded ({games.length})</span>
        </div>
        <span className="text-[10px] font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-full">
          PAGE {currentPage} OF {totalPages}
        </span>
      </div>

      <div className="flex flex-col gap-3.5">
        {paginatedGames.map((relGame, idx) => (
          <AppCard
            key={relGame._id}
            game={relGame}
            index={(currentPage - 1) * pageSize + idx + 1}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
        pageSize={pageSize}
        onPageSizeChange={(newSize) => {
          setPageSize(newSize);
          setCurrentPage(1);
        }}
        pageSizeOptions={[15, 25, 50]}
        scrollTargetId="related-apps-section"
      />
    </div>
  );
}
