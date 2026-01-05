"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { facebookReels } from "@/content/reels";

export default function FacebookReels() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-text transition-all -translate-x-1/2 hidden md:flex"
        aria-label="Zurück scrollen"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-text transition-all translate-x-1/2 hidden md:flex"
        aria-label="Weiter scrollen"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Reels Container */}
      <div
        ref={scrollContainerRef}
        className="flex items-start gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {facebookReels.map((reel) => (
          <a
            key={reel.id}
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[240px] h-[400px] rounded overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300 bg-black"
          >
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(reel.url)}&show_text=false&width=240`}
              width="240"
              height="426"
              style={{
                border: "none",
                overflow: "hidden",
                pointerEvents: "none",
                display: "block"
              }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              loading="lazy"
            />
          </a>
        ))}
      </div>

      {/* Scroll indicator for mobile */}
      <div className="flex justify-center gap-1 mt-4 md:hidden">
        <div className="w-8 h-1 bg-brand rounded-full" />
        <div className="w-2 h-1 bg-border rounded-full" />
        <div className="w-2 h-1 bg-border rounded-full" />
      </div>
    </div>
  );
}
