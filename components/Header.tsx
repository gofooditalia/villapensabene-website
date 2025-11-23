"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { restaurantData } from "@/lib/restaurant-data";
import { events } from "@/lib/events-data";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Chi Siamo", href: "/about" },
  { name: "Eventi", href: "/events", hasDropdown: true },
  { name: "Galleria", href: "/gallery" },
  { name: "Contatti", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsEventsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isEventsActive = pathname.startsWith("/events");

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 dark:bg-black/80 dark:border-zinc-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/villa-pensabene-logo.svg"
                alt="Villa Pensabene Logo"
                width={200}
                height={100}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.name} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsEventsOpen(!isEventsOpen)}
                      className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                        isEventsActive
                          ? "text-zinc-900 dark:text-zinc-100 border-b-2 border-zinc-900 dark:border-zinc-100 pb-1"
                          : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${isEventsOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isEventsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 py-2">
                        <Link
                          href="/events"
                          className="block px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
                          onClick={() => setIsEventsOpen(false)}
                        >
                          Tutti gli Eventi
                        </Link>
                        {events.map((event) => {
                          const isEventActive = pathname === `/events/${event.id}`;
                          return (
                            <Link
                              key={event.id}
                              href={`/events/${event.id}`}
                              className={`block px-4 py-2 text-sm ${
                                isEventActive
                                  ? "text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-800 font-semibold"
                                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
                              }`}
                              onClick={() => setIsEventsOpen(false)}
                            >
                              {event.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-zinc-900 dark:text-zinc-100 border-b-2 border-zinc-900 dark:border-zinc-100 pb-1"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-zinc-600 dark:text-zinc-400"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

