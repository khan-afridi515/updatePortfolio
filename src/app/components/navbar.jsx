"use client";

import { useEffect, useState } from "react";
import { Sora, DM_Sans } from "next/font/google";

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "800"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Theme colors (dark + light) – no extra CSS file needed
const THEME_CSS = `
:root{
  --bg:#0a0907;--card:rgba(26,23,18,.62);--solid:#14120e;--ink:#f5efe3;
  --mute:#a8a090;--line:rgba(245,185,66,.16);--a:#f5b942;--b:#ff7a59;--soft:#2a2214;
  color-scheme:dark;
}
:root[data-theme="light"]{
  --bg:#faf6ec;--card:rgba(255,255,255,.75);--solid:#fff;--ink:#1c1710;
  --mute:#645c4d;--line:rgba(180,120,20,.22);--a:#b45309;--b:#c2410c;--soft:#fdf0d5;
  color-scheme:light;
}
html{scroll-behavior:smooth;scroll-padding-top:90px}
body{background:var(--bg);color:var(--ink)}
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState("dark");

  // apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // highlight the link of the section currently in view
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = "home";
      LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{THEME_CSS}</style>

      <header className="fixed inset-x-0 top-0 z-20 pt-[env(safe-area-inset-top,0px)]">
        <div className="relative mx-auto my-3 flex w-[calc(100%-24px)] max-w-[1040px] items-center justify-between rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,var(--card)_88%,transparent)] py-2 pl-3 pr-3.5 backdrop-blur-md">
          {/* ---------- Logo: monogram badge ---------- */}
          <a
            href="#home"
            aria-label="Aziz Ullah — home"
            className={`${sora.className} group flex items-center gap-3`}
          >
            <span className="grid h-[38px] w-[38px] place-items-center rounded-[12px] border-[1.5px] border-[var(--a)] text-[.95rem] font-extrabold text-[var(--a)] transition duration-300 group-hover:-rotate-6 group-hover:scale-105 group-hover:border-[var(--b)] group-hover:text-[var(--b)]">
              AU
            </span>
            <span className="text-[1.1rem] font-extrabold tracking-[-.03em] text-[var(--ink)]">
              Aziz <span className="text-[var(--a)]">Ullah</span>
            </span>
          </a>

          {/* ---------- Nav links ---------- */}
          <nav
            onClick={() => setOpen(false)}
            className={`${dmSans.className} flex gap-1 max-[820px]:absolute max-[820px]:inset-x-0 max-[820px]:top-16 max-[820px]:flex-col max-[820px]:rounded-[20px] max-[820px]:border max-[820px]:border-[var(--line)] max-[820px]:bg-[var(--solid)] max-[820px]:p-2.5 ${
              open ? "" : "max-[820px]:hidden"
            }`}
          >
            {LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`rounded-full px-3.5 py-[7px] text-[.92rem] transition duration-200 hover:bg-[var(--soft)] hover:text-[var(--a)] ${
                  active === id
                    ? "bg-[var(--soft)] text-[var(--a)]"
                    : "text-[var(--mute)]"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* ---------- Theme toggle + mobile menu ---------- */}
          <div className="flex gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              className="h-[38px] w-[38px] cursor-pointer rounded-full border border-[var(--line)] bg-[var(--card)] text-base text-[var(--ink)]"
            >
              ◐
            </button>
            <button
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="hidden h-[38px] w-[38px] cursor-pointer rounded-full border border-[var(--line)] bg-[var(--card)] text-base text-[var(--ink)] max-[820px]:block"
            >
              ☰
            </button>
          </div>
        </div>
      </header>
    </>
  );
}