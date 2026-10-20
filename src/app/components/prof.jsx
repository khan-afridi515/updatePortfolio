"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sora, DM_Sans } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "800"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const ROLES = ["Full Stack (Web) Developer", "MERN Stack Developer"];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/khan-afridi515",
    icon: (
      <path
        fill="currentColor"
        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.63.76.53A11.1 11.1 0 0 0 12 .9Z"
      />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aziz-ullah-5b2a85345",
    icon: (
      <path
        fill="currentColor"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 17.5v-7H5.67v7h2.67ZM7 9.55a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1ZM18.34 17.5v-3.84c0-2.06-1.1-3.02-2.57-3.02-1.18 0-1.71.65-2.01 1.1v-.94h-2.67v7h2.67v-3.47c0-.91.17-1.79 1.3-1.79s1.13 1.04 1.13 1.85v3.41h2.15Z"
      />
    ),
  },
  {
    label: "Email",
    href: "mailto:uaziz9164@gmail.com",
    icon: (
      <path
        fill="currentColor"
        d="M3 5a2 2 0 0 0-2 2v.4l11 6.88 11-6.88V7a2 2 0 0 0-2-2H3Zm20 4.76-10.47 6.54a1 1 0 0 1-1.06 0L1 9.76V17a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9.76Z"
      />
    ),
  },
];

// Animations that Tailwind doesn't ship by default
const HOME_CSS = `
@keyframes hm-float{to{transform:translate(70px,50px) scale(1.18)}}
@keyframes hm-morph{50%{border-radius:60% 40% 40% 60%/55% 60% 40% 45%;transform:rotate(6deg)}}
@keyframes hm-blink{50%{opacity:0}}
@keyframes hm-name-shimmer{to{background-position:200% center}}

.hm-blob{animation:hm-float 16s ease-in-out infinite alternate}
.hm-name-highlight{
  background-size:200% auto;
  animation:hm-name-shimmer 4s ease-in-out infinite alternate;
}
.hm-social:hover{background:var(--soft)}
.hm-dots{
  background-image:radial-gradient(var(--line) 1.2px,transparent 1.4px);
  background-size:30px 30px;
  -webkit-mask-image:linear-gradient(#000,transparent 90%);
  mask-image:linear-gradient(#000,transparent 90%);
}
.hm-photo::before{
  content:"";position:absolute;inset:0;
  background:linear-gradient(135deg,var(--a),var(--b));
  border-radius:38% 62% 55% 45%/45% 40% 60% 55%;
  animation:hm-morph 9s ease-in-out infinite;
}
.hm-role::after{content:"|";animation:hm-blink 1s infinite}
:root[data-theme="light"] .hm-btn{color:#fff}
@media(prefers-reduced-motion:reduce){
  .hm-blob,.hm-name-highlight,.hm-photo::before,.hm-role::after{animation:none}
  .hm-social{transition:none}
}
`;

export default function Prof() {
  const shouldReduceMotion = useReducedMotion();

  // typing effect
  const [t, setT] = useState({ ri: 0, ci: 0, del: false });

  useEffect(() => {
    const word = ROLES[t.ri];
    let delay = t.del ? 40 : 90;
    if (!t.del && t.ci === word.length) delay = 1400;
    else if (t.del && t.ci === 0) delay = 300;

    const id = setTimeout(() => {
      setT((p) => {
        const w = ROLES[p.ri];
        if (!p.del && p.ci === w.length) return { ...p, del: true };
        if (p.del && p.ci === 0) return { ri: (p.ri + 1) % ROLES.length, ci: 0, del: false };
        return { ...p, ci: p.ci + (p.del ? -1 : 1) };
      });
    }, delay);

    return () => clearTimeout(id);
  }, [t]);

  const role = ROLES[t.ri].slice(0, t.ci);

  return (
    <>
      <style>{HOME_CSS}</style>

      {/* Animated background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <i className="hm-blob absolute -left-[140px] -top-[140px] h-[520px] w-[520px] rounded-full bg-[var(--a)] opacity-[.34] blur-[90px]" />
        <i
          className="hm-blob absolute -right-[150px] top-[38%] h-[460px] w-[460px] rounded-full bg-[var(--b)] opacity-[.34] blur-[90px]"
          style={{ animationDelay: "-5s" }}
        />
        <i
          className="hm-blob absolute -bottom-[140px] left-[22%] h-[440px] w-[440px] rounded-full bg-[var(--a)] opacity-[.34] blur-[90px]"
          style={{ animationDelay: "-9s" }}
        />
        <div className="hm-dots absolute inset-0" />
      </div>

      <section
        id="home"
        className={`${dmSans.className} flex min-h-[85svh] items-center pb-20 pt-[110px]`}
      >
        <div className="mx-auto grid w-full max-w-[1080px] grid-cols-[1.2fr_.8fr] items-center gap-10 px-5 max-[820px]:grid-cols-1">
          {/* Text */}
          <div>
            <span className="mb-[18px] inline-block rounded-full bg-[var(--soft)] px-4 py-1.5 text-[.9rem] font-semibold text-[var(--a)]">
              👋 Hello, I’m
            </span>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className={`${sora.className} mb-3 text-[clamp(2.4rem,6.5vw,4.4rem)] font-extrabold leading-[1.15] text-[var(--ink)]`}
            >
              Aziz{" "}
              <em className="hm-name-highlight bg-gradient-to-r from-[var(--a)] via-[var(--b)] to-[var(--a)] bg-clip-text not-italic text-transparent">
                Ullah
              </em>
            </motion.h1>

            <div
              className={`${sora.className} hm-role mb-3.5 min-h-8 text-[1.3rem] font-semibold text-[var(--b)]`}
            >
              {role}
            </div>

            <p className="max-w-[500px] leading-[1.65] text-[var(--mute)]">
              I build fast, responsive and thoughtful websites, turning ideas into clean
              interfaces people enjoy using.
            </p>

            {/* Buttons */}
            <div className="my-[26px] flex flex-wrap gap-3">
              <motion.a
                href="#contact"
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="hm-btn inline-flex items-center gap-2 rounded-[14px] border-2 border-transparent bg-gradient-to-r from-[var(--a)] to-[var(--b)] px-[26px] py-[13px] font-semibold text-[#1a1100] shadow-[0_10px_28px_-12px_var(--a)]"
              >
                Let’s Talk
              </motion.a>
              <motion.a
                href="/Aziz Resumy.pdf"
                download
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-[14px] border-2 border-[var(--line)] bg-transparent px-[26px] py-[13px] font-semibold text-[var(--ink)]"
              >
                Download CV
              </motion.a>
            </div>

            {/* Socials */}
            <div className="flex gap-2.5">
              {SOCIALS.map(({ label, href, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                  className="hm-social inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--mute)] transition duration-200 hover:border-[var(--a)] hover:text-[var(--a)]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px]"
                  >
                    {icon}
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Photo */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            className="hm-photo relative m-auto aspect-square w-full max-w-[340px] max-[820px]:order-first max-[820px]:max-w-[230px]"
          >
            <div className="absolute inset-3.5 overflow-hidden rounded-[36%_64%_52%_48%/46%_42%_58%_54%] bg-[var(--solid)]">
              <Image
                src="/_DSC7118.JPG"
                alt="Aziz Ullah"
                fill
                priority
                sizes="(max-width: 820px) 230px, 340px"
                className="object-cover object-[60%_20%]"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}