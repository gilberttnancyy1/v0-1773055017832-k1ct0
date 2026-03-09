"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = ["Услуги", "Работы", "Отзывы", "Контакт"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold gradient-text tracking-tight">
          Luminary
        </span>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <Link
                href={`#${l.toLowerCase()}`}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="#контакт"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-sm font-medium transition-colors"
        >
          Начать проект
        </a>
      </nav>
    </header>
  );
}