"use client";

import { motion } from "framer-motion";
import { Sora, DM_Sans } from "next/font/google";
import {
  LuGraduationCap,
  LuBriefcase,
  LuAward,
  LuLayers,
  LuCode,
  LuMonitor,
} from "react-icons/lu";

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "800"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const EDUCATION = {
  degree: "BS Computer Science",
  school: "University of Agriculture, Peshawar",
  year: "Graduated 2024",
  desc: "Graduated with a good GPA, building a strong base in programming, databases and web technologies.",
};

const CERTIFICATIONS = [
  { title: "MERN Stack Course", issuer: "NAVTTC (PMYSDP Batch-II) · Encoder Bytes", Icon: LuLayers },
  { title: "IT Specialist (JavaScript)", issuer: "Curtiport", Icon: LuCode },
  { title: "Computer Operator", issuer: "Govt. Technical Teachers Training Center", Icon: LuMonitor },
];

const EXPERIENCE = [
  {
    role: "MERN Stack Developer",
    company: "Aptech Media Pvt Ltd",
    date: "Nov 2025 – Present",
    current: true,
    desc: "Building full-stack web applications with clean, scalable architecture and REST APIs, and delivering features with cross-functional teams.",
    skills: ["React Js", "Tailwind CSS", "Next Js", "Node Js", "Express Js", "MongoDB", "PostgreSQL"],
  },
  {
    role: "MERN Stack Developer",
    company: "Codexdev Pvt Ltd",
    date: "May 2025 – Nov 2025",
    desc: "Built and maintained client web apps, optimized database queries and API response times by 25%, and created responsive UI components.",
    skills: ["React Js", "Tailwind CSS", "Node Js"],
  },
  {
    role: "Frontend Developer",
    company: "Encoder Bytes Pvt Ltd",
    date: "Oct 2023 – Mar 2024",
    desc: "Built a professional medical company website for a client in Afghanistan, improving its design, functionality and SEO.",
    skills: ["React Js", "Tailwind CSS"],
  },
];

/* ---------- animation variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fromLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fromRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const chip = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

/* ---------- small pieces ---------- */
function GroupTitle({ Icon, children }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-[11px] border border-[var(--a)] bg-[var(--soft)] text-[1.05rem] text-[var(--a)]">
        <Icon aria-hidden />
      </span>
      <h3 className={`${sora.className} text-[1.1rem] font-semibold`}>{children}</h3>
    </div>
  );
}

function Chip({ children }) {
  return (
    <motion.li
      variants={chip}
      className="rounded-lg bg-[var(--soft)] px-2.5 py-[3px] text-[.78rem] font-medium text-[var(--a)]"
    >
      {children}
    </motion.li>
  );
}

const cardBase =
  "rounded-[18px] border border-[var(--line)] bg-[var(--card)] p-5";

export default function Experience() {
  return (
    <section
      id="education"
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
            My journey
          </span>
          <h2
            className={`${sora.className} mb-3.5 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-tight`}
          >
            Experience &amp; Education
          </h2>
          <p className="mb-12 max-w-[560px] text-[var(--mute)]">
            My academic background, certifications and professional experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-12 max-[820px]:grid-cols-1">
          {/* ---------- Left: education + certifications ---------- */}
          <div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <GroupTitle Icon={LuGraduationCap}>Education</GroupTitle>
              <motion.div
                variants={fromLeft}
                whileHover={{ y: -4 }}
                className={`${cardBase} mb-10`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className={`${sora.className} text-[.98rem] font-semibold`}>
                      {EDUCATION.degree}
                    </h4>
                    <p className="mt-0.5 text-[.88rem] text-[var(--mute)]">
                      {EDUCATION.school}
                    </p>
                  </div>
                  <span className="rounded-full bg-[var(--soft)] px-3 py-1 text-[.78rem] font-medium text-[var(--b)]">
                    {EDUCATION.year}
                  </span>
                </div>
                <p className="mt-3 text-[.9rem] leading-relaxed text-[var(--mute)]">
                  {EDUCATION.desc}
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <GroupTitle Icon={LuAward}>Certifications</GroupTitle>
              <div className="grid gap-3">
                {CERTIFICATIONS.map(({ title, issuer, Icon }) => (
                  <motion.div
                    key={title}
                    variants={fromLeft}
                    whileHover={{ x: 6 }}
                    className={`${cardBase} flex items-center gap-4 !p-4`}
                  >
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-[var(--line)] bg-[var(--soft)] text-[1.2rem] text-[var(--a)]">
                      <Icon aria-hidden />
                    </span>
                    <div>
                      <h4 className={`${sora.className} text-[.92rem] font-semibold`}>
                        {title}
                      </h4>
                      <p className="text-[.82rem] text-[var(--mute)]">{issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ---------- Right: work experience timeline ---------- */}
          <div>
            <GroupTitle Icon={LuBriefcase}>Work Experience</GroupTitle>

            <div className="relative ml-[5px]">
              {/* growing vertical line */}
              <motion.span
                aria-hidden
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute left-0 top-2 h-[calc(100%-16px)] w-[2px] origin-top bg-[var(--line)]"
              />

              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="grid gap-5"
              >
                {EXPERIENCE.map((job) => (
                  <motion.li
                    key={job.company}
                    variants={fromRight}
                    className="relative pl-7"
                  >
                    {/* dot */}
                    <motion.span
                      aria-hidden
                      variants={{
                        hidden: { scale: 0 },
                        show: { scale: 1, transition: { type: "spring", stiffness: 400, damping: 15 } },
                      }}
                      className="absolute left-[-4px] top-6 h-[10px] w-[10px] rounded-full bg-[var(--a)] ring-4 ring-[var(--bg)]"
                    />

                    <motion.div whileHover={{ y: -4 }} className={cardBase}>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h4 className={`${sora.className} text-[.98rem] font-semibold`}>
                            {job.role}
                          </h4>
                          <p className="mt-0.5 text-[.9rem] font-medium text-[var(--a)]">
                            {job.company}
                          </p>
                        </div>
                        <span className="flex items-center gap-2 text-[.8rem] text-[var(--mute)]">
                          {job.current && (
                            <span className="rounded-full bg-[var(--soft)] px-2.5 py-0.5 text-[.72rem] font-medium text-[var(--b)]">
                              Current
                            </span>
                          )}
                          {job.date}
                        </span>
                      </div>

                      <p className="mt-3 text-[.9rem] leading-relaxed text-[var(--mute)]">
                        {job.desc}
                      </p>

                      <motion.ul variants={stagger} className="mt-3 flex flex-wrap gap-2">
                        {job.skills.map((s) => (
                          <Chip key={s}>{s}</Chip>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}