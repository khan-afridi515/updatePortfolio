"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { Sora, DM_Sans } from "next/font/google";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "800"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const FRONTEND = [
  { name: "HTML", level: 95, Icon: SiHtml5 },
  { name: "CSS", level: 95, Icon: SiCss },
  { name: "JavaScript", level: 90, Icon: SiJavascript },
  { name: "React Js", level: 90, Icon: SiReact },
  { name: "Tailwind CSS", level: 94, Icon: SiTailwindcss },
  { name: "Next Js", level: 88, Icon: SiNextdotjs },
];

const BACKEND = [
  { name: "Node Js", level: 90, Icon: SiNodedotjs },
  { name: "Express Js", level: 87, Icon: SiExpress },
  { name: "MongoDB", level: 85, Icon: SiMongodb },
  { name: "PostgreSQL", level: 82, Icon: SiPostgresql },
];

const TOOLS = [
  "VS Code",
  "Git",
  "GitHub",
  "Vercel",
  "Render",
  "Hostinger VPS",
  "Postman",
  "Supabase",
  "REST APIs",
  "JWT Auth",
];

/* ---------- animation variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const chipsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const chip = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

/* ---------- single skill bar ---------- */
function SkillBar({ name, level, Icon }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  // count the percentage up while the bar fills
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, level, {
      duration: 1.4,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, level]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="mb-[22px]"
    >
      <div className="mb-2 flex items-center justify-between text-[.95rem] font-medium">
        <span className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-[11px] border border-[var(--line)] bg-[var(--soft)] text-[1.05rem] text-[var(--a)]">
            <Icon aria-hidden />
          </span>
          {name}
        </span>
        <span className="text-[var(--mute)]">{count}%</span>
      </div>

      <div className="h-[9px] overflow-hidden rounded-full bg-[var(--line)]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-[var(--b)] to-[var(--a)]"
        />
      </div>
    </motion.div>
  );
}

/* ---------- group of skill bars ---------- */
function SkillGroup({ title, skills }) {
  return (
    <motion.div
      variants={listContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h3
        variants={fadeUp}
        className={`${sora.className} mb-5 text-[1.1rem] font-semibold`}
      >
        {title}
      </motion.h3>
      {skills.map((skill) => (
        <SkillBar key={skill.name} {...skill} />
      ))}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className={`${dmSans.className} py-[84px] text-[var(--ink)]`}
    >
      <div className="mx-auto w-full max-w-[1080px] px-5">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="mb-2.5 inline-block text-[.78rem] font-semibold uppercase tracking-[.12em] text-[var(--a)]">
            Skills
          </span>
          <h2
            className={`${sora.className} mb-3.5 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-tight`}
          >
            Technical expertise
          </h2>
          <p className="mb-10 max-w-[560px] text-[var(--mute)]">
            Technologies and tools I use to build modern web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-6 max-[820px]:grid-cols-1">
          {/* Left: frontend */}
          <SkillGroup title="Frontend" skills={FRONTEND} />

          {/* Right: backend */}
          <SkillGroup title="Backend & Database" skills={BACKEND} />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8"
        >
          <h3
            className={`${sora.className} mb-3.5 text-[1.1rem] font-semibold`}
          >
            Tools
          </h3>
          <motion.ul
            variants={chipsContainer}
            className="flex flex-wrap gap-2.5"
          >
            {TOOLS.map((tool) => (
              <motion.li
                key={tool}
                variants={chip}
                whileHover={{ y: -4, scale: 1.05 }}
                className="cursor-default rounded-xl bg-[var(--soft)] px-[18px] py-2 text-[.92rem] font-medium text-[var(--a)]"
              >
                {tool}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}