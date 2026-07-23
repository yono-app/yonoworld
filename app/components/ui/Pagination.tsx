"use client";

import React, { useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  scrollTargetId?: string;
  pageSize?: number;
  onPageSizeChange?: (newSize: number) => void;
  pageSizeOptions?: number[];
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  scrollTargetId = "game-list-section",
  pageSize,
  onPageSizeChange,
  pageSizeOptions = [15, 25, 50],
}: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages || page === currentPage) return;

      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());
      router.push(`${pathname}?${params.toString()}`, { scroll: false });

      if (onPageChange) {
        onPageChange(page);
      }

      if (scrollTargetId) {
        const el = document.getElementById(scrollTargetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    [currentPage, totalPages, router, pathname, searchParams, onPageChange, scrollTargetId]
  );

  const handleSizeChange = (newSize: number) => {
    if (onPageSizeChange) {
      onPageSizeChange(newSize);
    }
    const params = new URLSearchParams(searchParams.toString());
    params.set("limit", newSize.toString());
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Generate page numbers with ellipsis for large page counts
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 1;
    const left = currentPage - delta;
    const right = currentPage + delta + 1;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i < right)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 my-8 px-2">
      {/* Page Size Selector */}
      {pageSize && onPageSizeChange && (
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-2xl">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-400">Apps per page:</span>
          <div className="flex items-center gap-1">
            {pageSizeOptions.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeChange(size)}
                className={`px-2.5 py-1 rounded-xl text-xs font-extrabold transition-all duration-150 cursor-pointer ${
                  pageSize === size
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/30 border border-violet-400/40"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <nav
          role="navigation"
          aria-label="Pagination Navigation"
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 select-none"
        >
          {/* First Page */}
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            aria-label="Go to first page"
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-bold hover:bg-violet-600/30 hover:border-violet-500/40 disabled:opacity-30 disabled:pointer-events-none transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <span aria-hidden="true">«</span>
          </button>

          {/* Previous Page */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Go to previous page"
            className="p-2 sm:px-3.5 sm:py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-bold hover:bg-violet-600/30 hover:border-violet-500/40 disabled:opacity-30 disabled:pointer-events-none transition-all duration-150 cursor-pointer flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <span aria-hidden="true">‹</span>
            <span className="hidden sm:inline">Prev</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {pageNumbers.map((p, idx) => {
              if (p === "...") {
                return (
                  <span key={`ellipsis-${idx}`} className="px-2 py-1 text-slate-500 text-xs font-bold" aria-hidden="true">
                    ...
                  </span>
                );
              }

              const pageNum = Number(p);
              const isActive = pageNum === currentPage;

              return (
                <button
                  key={`page-${pageNum}`}
                  onClick={() => handlePageChange(pageNum)}
                  aria-label={`Page ${pageNum}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs font-black transition-all duration-200 cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                    isActive
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30 border border-violet-400/40 scale-105"
                      : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Next Page */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Go to next page"
            className="p-2 sm:px-3.5 sm:py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-bold hover:bg-violet-600/30 hover:border-violet-500/40 disabled:opacity-30 disabled:pointer-events-none transition-all duration-150 cursor-pointer flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <span className="hidden sm:inline">Next</span>
            <span aria-hidden="true">›</span>
          </button>

          {/* Last Page */}
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            aria-label="Go to last page"
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-bold hover:bg-violet-600/30 hover:border-violet-500/40 disabled:opacity-30 disabled:pointer-events-none transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <span aria-hidden="true">»</span>
          </button>
        </nav>
      )}
    </div>
  );
}
