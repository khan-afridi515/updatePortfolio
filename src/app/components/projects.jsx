"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sora, DM_Sans } from "next/font/google";
import { LuArrowUpRight, LuClock } from "react-icons/lu";

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "800"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const PROJECTS = [
  {
    title: "Ideal Bilar",
    desc: "Luxury car showroom for sales, rentals, workshop and more, with an animated, responsive front end.",
    image: "/idealbilar.png",
    tech: ["React Js", "Ant Design", "Node Js", "Express Js", "MongoDB"],
    live: "https://ideal-bilar-site.vercel.app/",
  },
  {
    title: "Lumyana",
    desc: "Cosmetics e-commerce platform with a product catalog, ordering and an admin dashboard.",
    image: "/lumyyana.png",
    tech: ["React Js", "Ant Design", "Node Js", "Express Js", "MongoDB"],
    live: "https://lumyana-website.vercel.app/",
  },
  {
    title: "eBay Inventory System",
    desc: "Seller dashboard with eBay OAuth 2.0, real-time notifications and automated sales reports.",
    image: "/ebay.png",
    tech: ["React Js", "Tailwind CSS", "Node Js", "Express Js", "MongoDB", "eBay API"],
    live: "https://inventory-frontend-tujw.vercel.app/login",
  },
  {
    title: "TrustFe Real Estate",
    desc: "Real estate platform with city search, property listings, favorites, tour requests and inquiries.",
    image: "/real state.png",
    tech: ["React Js", "Ant Design", "Node Js", "Express Js", "MongoDB"],
    live: "https://trustfe.com/",
  },
  {
    title: "Admin Dashboard",
    desc: "Responsive admin dashboard with stats, charts, tables and listing management.",
    image: "/admin dishboard.png",
    tech: ["React Js", "Tailwind CSS"],
    live: "https://gfpg-six.vercel.app/",
  },
  {
    title: "Portfolio Website",
    desc: "This portfolio, built with smooth animations, dark and light themes and a fully responsive layout.",
    image: "/portfolio.png",
    tech: ["Next Js", "Tailwind CSS", "Framer Motion"],
    live: null, // add your link later
  },
];

/* ---------- animation variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ---------- project card ---------- */
function ProjectCard({ title, desc, image, tech, live }) {
  const isLive = Boolean(live);

  const imageBox = (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[var(--soft)]">
      <Image
        src={image}
        alt={`${title} screenshot`}
        fill
        sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 340px"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute right-2.5 top-2.5 flex items-center gap-1.5 rounded-full bg-[var(--solid)]/85 px-2.5 py-1 text-[.7rem] font-medium text-[var(--ink)] backdrop-blur">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isLive ? "bg-[var(--b)]" : "bg-[var(--mute)]"
          }`}
        />
        {isLive ? "Live" : "Soon"}
      </span>
    </div>
  );

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex flex-col rounded-[20px] border border-[var(--line)] bg-[var(--card)] p-3"
    >
      {isLive ? (
        <a href={live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`}>
          {imageBox}
        </a>
      ) : (
        imageBox
      )}

      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <h3 className={`${sora.className} text-[1.02rem] font-semibold`}>{title}</h3>
        <p className="mt-1.5 text-[.88rem] leading-relaxed text-[var(--mute)]">{desc}</p>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-lg bg-[var(--soft)] px-2.5 py-[3px] text-[.75rem] font-medium text-[var(--a)]"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 text-[.88rem] font-medium">
          {isLive ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--a)] transition-all hover:gap-2 hover:text-[var(--b)]"
            >
              Live demo <LuArrowUpRight aria-hidden />
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex items-center gap-1.5 text-[var(--mute)]"
            >
              <LuClock aria-hidden /> Link coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
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
            Projects
          </span>
          <h2
            className={`${sora.className} mb-3.5 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-tight`}
          >
            Featured work
          </h2>
          <p className="mb-10 max-w-[560px] text-[var(--mute)]">
            A selection of live projects I have designed and built from front
            end to back end.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-[620px]:grid-cols-1"
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}