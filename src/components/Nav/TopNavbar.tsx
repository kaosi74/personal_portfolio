"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Satisfy } from "next/font/google";

type NavItem = {
  title: string;
  url: string;
};

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

const navItems: Array<NavItem> = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Event", url: "/events" },
  { title: "Contact", url: "/contact" },
  { title: "Careers", url: "/careers" },
];

export default function TopNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-orange-50 text-foreground sticky top-0 w-full z-1000 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/myLogo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className={`font-bold text-primary ${satisfy.className}`}>
            Nwankwo Kosisochukwu
          </span>
        </Link>

        {/* Hamburger button (mobile) */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Menu Items */}
        <ul
          className={`
            absolute top-full inset-x-0 bg-surface border-t border-foreground/30
            transition-max-h duration-400 ease-in-out overflow-hidden
            ${isOpen ? "max-h-75" : "max-h-0"}
            md:static md:max-h-full md:flex md:space-x-6 md:border-0 md:bg-transparent md:overflow-visible
          `}
        >
          {navItems.map(({ title, url }) => {
            const isActive = url === pathname;
            return (
              <li key={url} className="md:my-0 my-2">
                <Link
                  href={url}
                  className={`
                    block px-4 py-2 rounded-md font-medium transition duration-400 ease-in-out
                    ${
                      isActive
                        ? "bg-secondary text-surface"
                        : "text-primary hover:text-secondary hover:bg-primary/10"
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
