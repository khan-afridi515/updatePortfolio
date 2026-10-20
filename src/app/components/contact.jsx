"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sora, DM_Sans } from "next/font/google";
import { LuMail, LuPhone, LuMapPin, LuSend, LuCircleCheck, LuCircleAlert } from "react-icons/lu";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "800"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const INFO = [
  { label: "Email", value: "uaziz9164@gmail.com", href: "mailto:uaziz9164@gmail.com", Icon: LuMail },
  { label: "Phone", value: "+92 315 3121735", href: "tel:+923153121735", Icon: LuPhone },
  { label: "Location", value: "Peshawar, Pakistan", href: null, Icon: LuMapPin },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/khan-afridi515", Icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aziz-ullah-5b2a85345", Icon: FaLinkedinIn },
];

/* ---------- animation variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fromLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const fromRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const inputClass =
  "w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-[.92rem] text-[var(--ink)] outline-none transition placeholder:text-[var(--mute)] focus:border-[var(--a)] focus:ring-2 focus:ring-[var(--a)]/20";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "", company: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
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
            Contact
          </span>
          <h2
            className={`${sora.className} mb-3.5 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-tight`}
          >
            Let’s work together
          </h2>
          <p className="mb-10 max-w-[560px] text-[var(--mute)]">
            Have a project in mind or want to join forces? Send me a message and
            I will get back to you soon. I’m open to full-time, on-site and
            remote roles.
          </p>
        </motion.div>

        <div className="grid grid-cols-[1fr_1.15fr] items-start gap-6 max-[820px]:grid-cols-1">
          {/* ---------- Left: info ---------- */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-3"
          >
            {INFO.map(({ label, value, href, Icon }) => {
              const content = (
                <>
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-[var(--a)] bg-[var(--soft)] text-[1.15rem] text-[var(--a)]">
                    <Icon aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className={`${sora.className} block text-[.92rem] font-semibold`}>
                      {label}
                    </span>
                    <span className="block break-words text-[.88rem] text-[var(--mute)]">
                      {value}
                    </span>
                  </span>
                </>
              );

              const cls =
                "flex items-center gap-4 rounded-[18px] border border-[var(--line)] bg-[var(--card)] p-4";

              return (
                <motion.div key={label} variants={fromLeft} whileHover={{ x: 6 }}>
                  {href ? (
                    <a href={href} className={`${cls} transition-colors hover:border-[var(--a)]`}>
                      {content}
                    </a>
                  ) : (
                    <div className={cls}>{content}</div>
                  )}
                </motion.div>
              );
            })}

            {/* Socials */}
            <motion.div variants={fromLeft} className="mt-2 flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--line)] bg-[var(--soft)] text-[1.1rem] text-[var(--a)] transition-colors hover:border-[var(--a)] hover:text-[var(--b)]"
                >
                  <Icon aria-hidden />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ---------- Right: form ---------- */}
          <motion.form
            variants={fromRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            onSubmit={onSubmit}
            className="grid gap-3.5 rounded-[22px] border border-[var(--line)] bg-[var(--card)] p-6"
          >
            <label className="sr-only" htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              minLength={2}
              placeholder="Your name"
              value={form.name}
              onChange={onChange}
              className={inputClass}
            />

            <label className="sr-only" htmlFor="email">Your email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Your email"
              value={form.email}
              onChange={onChange}
              className={inputClass}
            />

            <label className="sr-only" htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              rows={5}
              placeholder="Tell me about your project…"
              value={form.message}
              onChange={onChange}
              className={`${inputClass} resize-none`}
            />

            {/* honeypot: hidden from people, bots fill it */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={onChange}
              className="hidden"
              aria-hidden="true"
            />

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--a)] to-[var(--b)] px-6 py-3 font-semibold text-[#1a1100] shadow-[0_10px_28px_-12px_var(--a)] transition-opacity disabled:cursor-not-allowed disabled:opacity-60 [:root[data-theme='light']_&]:text-white"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <LuSend aria-hidden />
            </motion.button>

            {/* status message */}
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.p
                  key="ok"
                  role="status"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 rounded-xl bg-[var(--soft)] px-4 py-3 text-[.88rem] text-[var(--a)]"
                >
                  <LuCircleCheck aria-hidden /> Thanks! Your message has been sent.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  key="err"
                  role="alert"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 rounded-xl bg-[var(--soft)] px-4 py-3 text-[.88rem] text-[var(--b)]"
                >
                  <LuCircleAlert aria-hidden /> Something went wrong. Please try again or email me directly.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}