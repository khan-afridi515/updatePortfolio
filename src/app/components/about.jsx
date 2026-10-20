"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { Sora, DM_Sans } from "next/font/google";

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "800"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const JOURNEY = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
];

/* ---------- animation variants ---------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const chipsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const chip = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

/* ---------- count-up number ---------- */
function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/* ---------- reusable card ---------- */
function Card({ className = "", highlight = false, children }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`rounded-[22px] border p-6 ${
        highlight
          ? "border-transparent bg-gradient-to-br from-[var(--a)] to-[var(--b)] text-[#1a1100]"
          : "border-[var(--line)] bg-[var(--card)]"
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className={`${dmSans.className} pb-[84px] pt-[48px] text-[var(--ink)]`}
    >
      <div className="mx-auto w-full max-w-[1080px] px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-2.5 inline-block text-[16px] font-semibold uppercase tracking-[.12em] text-[var(--a)]">
            About me
          </span>
          <h2
            className={`${sora.className} mb-3.5 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-tight`}
          >
            A developer who cares about details
          </h2>
          <p className="mb-10 max-w-[560px] text-[var(--mute)]">
            Full Stack developer from Peshawar, building real-world web
            applications that are fast, scalable and clean.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-4 gap-4 max-[820px]:grid-cols-2"
        >
          {/* Who am I */}
          <Card className="col-span-2 row-span-2 flex flex-col justify-center max-[820px]:row-span-1">
            <h3 className={`${sora.className} mb-3 text-[1.1rem] font-semibold`}>
              Who am I?
            </h3>
            <p className="mb-3 text-[.95rem] leading-relaxed text-[var(--mute)]">
              Hi, I’m <b className="text-[var(--ink)]">Aziz Ullah</b>, a Full
              Stack Web Developer with around 3 years of experience in building
              real-world web applications. I graduated with a BS in Computer
              Science from the University of Agriculture Peshawar in 2024 with a
              good GPA.
            </p>
            <p className="text-[.95rem] leading-relaxed text-[var(--mute)]">
              I’ve worked with Encoder Bytes, CodexDev, and currently
              AptechMedia, where I contribute to multiple production-level
              projects. My core skills include JavaScript, React.js, Tailwind
              CSS, Node.js, Express.js, MongoDB, and REST APIs.
            </p>
          </Card>

          {/* Projects (highlight) */}
          <Card highlight>
            <div className={`${sora.className} text-[2.4rem] font-extrabold`}>
              <CountUp to={5} suffix="+" />
            </div>
            <p className="text-[.95rem]">Projects built</p>
          </Card>

          {/* Experience */}
          <Card>
            <div
              className={`${sora.className} text-[2.4rem] font-extrabold text-[var(--b)]`}
            >
              <CountUp to={3} suffix="+" />
            </div>
            <p className="text-[.95rem] text-[var(--mute)]">Years experience</p>
          </Card>

          {/* Clean Code */}
          <Card>
            <h3 className={`${sora.className} mb-2 text-[1.1rem] font-semibold`}>
              Clean Code
            </h3>
            <p className="text-[.95rem] text-[var(--mute)]">
              Readable, reusable and easy to maintain.
            </p>
          </Card>

          {/* Modern UI */}
          <Card>
            <h3 className={`${sora.className} mb-2 text-[1.1rem] font-semibold`}>
              Modern UI
            </h3>
            <p className="text-[.95rem] text-[var(--mute)]">
              Smooth, premium interactions.
            </p>
          </Card>

          {/* Journey */}
          <Card className="col-span-4 max-[820px]:col-span-2">
            <h3 className={`${sora.className} mb-4 text-[1.1rem] font-semibold`}>
              My journey
            </h3>

            <motion.ul
              variants={chipsContainer}
              className="flex flex-wrap items-center gap-x-2 gap-y-3"
            >
              {JOURNEY.map((tech, i) => {
                const last = i === JOURNEY.length - 1;
                return (
                  <motion.li
                    key={tech}
                    variants={chip}
                    className="flex items-center gap-2"
                  >
                    <span
                      className={`rounded-xl px-[18px] py-2 text-[.92rem] font-medium ${
                        last
                          ? "bg-gradient-to-r from-[var(--a)] to-[var(--b)] text-[#1a1100]"
                          : "bg-[var(--soft)] text-[var(--a)]"
                      }`}
                    >
                      {tech}
                    </span>
                    {!last && (
                      <span aria-hidden className="text-[var(--mute)]">
                        →
                      </span>
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}