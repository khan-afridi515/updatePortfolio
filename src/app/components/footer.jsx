"use client";

import { motion } from "framer-motion";
import { Sora, DM_Sans } from "next/font/google";
import { LuMail, LuPhone, LuMapPin, LuArrowUp } from "react-icons/lu";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

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

const CONTACT = [
  { value: "uaziz9164@gmail.com", href: "mailto:uaziz9164@gmail.com", Icon: LuMail },
  { value: "+92 315 3121735", href: "tel:+923153121735", Icon: LuPhone },
  { value: "Peshawar, Pakistan", href: null, Icon: LuMapPin },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/khan-afridi515", Icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aziz-ullah-5b2a85345", Icon: FaLinkedinIn },
  { label: "Email", href: "mailto:uaziz9164@gmail.com", Icon: LuMail },
];

/* ---------- animation variants ---------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`${dmSans.className} border-t border-[var(--line)] pb-[calc(24px+env(safe-area-inset-bottom,0px))] pt-14 text-[var(--ink)]`}
    >
      <div className="mx-auto w-full max-w-[1080px] px-5">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-[1.4fr_1fr_1.2fr] gap-10 max-[820px]:grid-cols-2 max-[560px]:grid-cols-1"
        >
          {/* Brand */}
          <motion.div variants={item} className="max-[820px]:col-span-2 max-[560px]:col-span-1">
            <a
              href="#home"
              aria-label="Aziz Ullah — home"
              className={`${sora.className} group inline-flex items-center gap-3`}
            >
              <span className="grid h-[38px] w-[38px] place-items-center rounded-[12px] border-[1.5px] border-[var(--a)] text-[.95rem] font-extrabold text-[var(--a)] transition duration-300 group-hover:-rotate-6 group-hover:scale-105 group-hover:border-[var(--b)] group-hover:text-[var(--b)]">
                AU
              </span>
              <span className="text-[1.1rem] font-extrabold tracking-[-.03em]">
                Aziz <span className="text-[var(--a)]">Ullah</span>
              </span>
            </a>

            <p className="mt-4 max-w-[340px] text-[.92rem] leading-relaxed text-[var(--mute)]">
              Full Stack (Web) Developer building fast, responsive and
              thoughtful web applications with the MERN stack.
            </p>

            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)] bg-[var(--soft)] text-[1rem] text-[var(--a)] transition-colors hover:border-[var(--a)] hover:text-[var(--b)]"
                >
                  <Icon aria-hidden />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.nav variants={item} aria-label="Footer">
            <h3 className={`${sora.className} mb-4 text-[.95rem] font-semibold`}>
              Quick links
            </h3>
            <ul className="grid gap-2.5">
              {LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="inline-block text-[.92rem] text-[var(--mute)] transition-all duration-200 hover:translate-x-1 hover:text-[var(--a)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact */}
          <motion.div variants={item}>
            <h3 className={`${sora.className} mb-4 text-[.95rem] font-semibold`}>
              Get in touch
            </h3>
            <ul className="grid gap-3">
              {CONTACT.map(({ value, href, Icon }) => {
                const content = (
                  <>
                    <span className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-[var(--soft)] text-[.95rem] text-[var(--a)]">
                      <Icon aria-hidden />
                    </span>
                    <span className="break-words">{value}</span>
                  </>
                );
                const cls = "flex items-center gap-3 text-[.9rem] text-[var(--mute)]";
                return (
                  <li key={value}>
                    {href ? (
                      <a href={href} className={`${cls} transition-colors hover:text-[var(--a)]`}>
                        {content}
                      </a>
                    ) : (
                      <span className={cls}>{content}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)] pt-6 text-[.85rem] text-[var(--mute)]"
        >
          <p>
            © {year} <span className="text-[var(--ink)]">Aziz Ullah</span>. All
            rights reserved.
          </p>

          <p className="max-[560px]:order-last max-[560px]:w-full">
            Built with Next.js, Tailwind CSS &amp; Framer Motion
          </p>

          <motion.button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.92 }}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--soft)] text-[1rem] text-[var(--a)] transition-colors hover:border-[var(--a)]"
          >
            <LuArrowUp aria-hidden />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}