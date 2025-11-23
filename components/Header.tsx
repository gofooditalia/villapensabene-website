"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { restaurantData } from "@/lib/restaurant-data";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Chi Siamo", href: "/about" },
  { name: "Galleria", href: "/gallery" },
  { name: "Contatti", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

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

