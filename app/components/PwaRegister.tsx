"use client";

import { useEffect, useState } from "react";

export function PwaRegister() {
  const [showUpdateToast, setShowUpdateToast] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }

    const registerSW = async () => {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
        });

        // Listen for new worker installation
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                setWaitingWorker(newWorker);
                setShowUpdateToast(true);
              }
            });
          }
        });

        // Handle existing waiting worker
        if (registration.waiting) {
          setWaitingWorker(registration.waiting);
          setShowUpdateToast(true);
        }
      } catch (err) {
        console.warn("[PWA] Service Worker registration failed:", err);
      }
    };

    registerSW();

    // Reload page when new SW takes control
    let refreshing = false;
    const handleControllerChange = () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    };

    navigator.serviceWorker.addEventListener("controllerchange", handleControllerChange);

    return () => {
      navigator.serviceWorker.removeEventListener("controllerchange", handleControllerChange);
    };
  }, []);

  const handleUpdate = () => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: "SKIP_WAITING" });
    }
    setShowUpdateToast(false);
  };

  if (!showUpdateToast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full p-4 bg-[#16172D] border border-violet-500/40 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center justify-between gap-3 text-white animate-bounce-short">
      <div className="flex items-center gap-3">
        <span className="text-xl">🚀</span>
        <div>
          <p className="text-xs font-black">New Version Available!</p>
          <p className="text-[11px] text-slate-300">Click to update app shell.</p>
        </div>
      </div>

      <button
        onClick={handleUpdate}
        className="px-3.5 py-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-extrabold rounded-xl shadow-md border border-violet-400/30 transition-all active:scale-95 shrink-0"
      >
        Update Now
      </button>
    </div>
  );
}
