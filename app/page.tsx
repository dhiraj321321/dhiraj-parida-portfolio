"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUpRight, Download } from "lucide-react";
import {
    site,
    skills,
    education,
    internships,
    projects,
    moreProjects,
    type PortfolioProject,
} from "../data/portfolio";

/* ---------- motion variants (typed) ---------- */
const heroVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

// Section wrappers = different slideshow feel
const sectionSlideUp: Variants = {
    hidden: { opacity: 0, y: 70 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const sectionZoomRotate: Variants = {
    hidden: { opacity: 0, scale: 0.88, rotateX: -10 },
    show: {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        transition: { duration: 0.75, ease: "easeOut" },
    },
};

const sectionSlideLeft: Variants = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const sectionSlideRight: Variants = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

// Grids with stagger
const projectsGrid: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const projectCardAnim: Variants = {
    hidden: { opacity: 0, scale: 0.92, y: 26 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45 } },
};

const skillsGrid: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const skillItemAnim: Variants = {
    hidden: { opacity: 0, x: -22 },
    show: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

const timelineList: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const timelineItemAnim: Variants = {
    hidden: { opacity: 0, x: 46, y: 20 },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.55 } },
};

/* ---------- resume modal ---------- */
function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    // Put the file in /public
    // Use relative URL (no leading "/") to behave better with basePath deployments.
    const resumeUrl = "updatedDhirajresume1.pdf";

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[100] grid place-items-center bg-black/70 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#070A0F]"
                        initial={{ opacity: 0, y: 18, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-white/10 p-4">
                            <div className="text-sm font-semibold text-white/85">Resume preview</div>

                            <div className="flex items-center gap-2">
                                <a
                                    href={resumeUrl}
                                    download
                                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                                >
                                    Download
                                </a>

                                <button
                                    onClick={onClose}
                                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                                >
                                    Close
                                </button>
                            </div>
                        </div>

                        <div className="h-[70vh] bg-black">
                            <iframe src={resumeUrl} title="Resume preview" className="h-full w-full" />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ---------- shared UI ---------- */
function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="text-2xl font-semibold"
        >
            {children}
        </motion.h2>
    );
}

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <a href={href} className="navlink group">
      <span className="relative">
        {label}
          <span className="nav-underline" />
      </span>
        </a>
    );
}

function TechBackdrop() {
    return (
        <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_10%,rgba(99,102,241,0.22),transparent_60%),radial-gradient(50%_40%_at_70%_10%,rgba(6,182,212,0.18),transparent_55%),radial-gradient(40%_30%_at_60%_80%,rgba(16,185,129,0.10),transparent_55%)]" />
            <div className="absolute inset-0 opacity-[0.23] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />
            <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                animate={{ top: ["15%", "85%", "15%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_30%,transparent_35%,rgba(7,10,15,0.95)_85%)]" />
        </motion.div>
    );
}

function TechTicker() {
    const items = [
        "Java",
        "Spring Boot",
        "REST APIs",
        "PostgreSQL",
        "MySQL",
        "ReactJS",
        "JDBC",
        "OpenCV",
        "Tomcat",
        "Problem Solving",
    ];

    return (
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#070A0F] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#070A0F] to-transparent" />
            <motion.div
                className="flex w-max flex-nowrap gap-3 py-3"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
                {[...items, ...items].map((t, i) => (
                    <span
                        key={`${t}-${i}`}
                        className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                    >
            {t}
          </span>
                ))}
            </motion.div>
        </div>
    );
}

function SkillBar({ name, level }: { name: string; level: number }) {
    return (
        <motion.div variants={skillItemAnim} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-white/85">{name}</div>
                <div className="text-xs text-white/60">{level}%</div>
            </div>

            <div
                className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-valuenow={level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${name} proficiency`}
            >
                <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
}

function ProjectCard({ p }: { p: PortfolioProject }) {
    return (
        <motion.div variants={projectCardAnim}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 min-w-0">
                        {p.logo && (
                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#070A0F]">
                                <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain p-2" />
                            </div>
                        )}

                        <div className="min-w-0">
                            <h3 className="text-base font-semibold leading-snug">{p.name}</h3>
                            <p className="mt-1 text-sm text-white/70 line-clamp-2">
                                {(p.bullets ?? []).slice(0, 2).join(" • ")}
                            </p>
                        </div>
                    </div>

                    <Link
                        href={p.repo}
                        target="_blank"
                        className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                    >
                        Repo <ArrowUpRight size={16} />
                    </Link>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                        <span
                            key={`${p.repo}-${s}`}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                        >
              {s}
            </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

function TimelineItem({ title, meta }: { title: string; meta: string }) {
    return (
        <motion.div variants={timelineItemAnim} className="relative pl-10">
            <div className="absolute left-[11px] top-0 h-full w-px bg-gradient-to-b from-white/0 via-white/15 to-white/0" />
            <div className="absolute left-0 top-[2px] h-6 w-6 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 p-[2px]">
                <div className="h-full w-full rounded-full bg-[#070A0F] border border-white/10" />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                <div className="text-sm font-semibold text-white/90">{title}</div>
                <div className="mt-1 text-sm text-white/60">{meta}</div>
            </div>
        </motion.div>
    );
}

export default function Page() {
    const allProjects: PortfolioProject[] = [...projects, ...moreProjects];
    const [resumeOpen, setResumeOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-[#070A0F] text-white">
            {/* coding particles background */}
            <div className="code-rain" aria-hidden>
                {Array.from({ length: 26 }).map((_, i) => {
                    const left = `${(i * 100) / 26}%`;
                    const duration = 10 + (i % 8);
                    const delay = -(i * 0.65);
                    const size = 12 + (i % 6);
                    const symbols = ["</>", "{}", "[]", "()", "=>", ";;", "&&", "||", "#", "$", "/* */", "git", "API"];
                    const text = symbols[i % symbols.length];

                    return (
                        <span
                            key={i}
                            style={{
                                left,
                                animationDuration: `${duration}s`,
                                animationDelay: `${delay}s`,
                                fontSize: `${size}px`,
                            }}
                        >
              {text}
            </span>
                    );
                })}
            </div>

            {/* NAVBAR */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A0F]/55 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-2xl bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 p-[2px]">
                            <div className="grid h-full w-full place-items-center rounded-2xl bg-[#070A0F] text-xs font-semibold text-white/80">
                                DP
                            </div>
                        </div>
                        <div className="text-sm font-semibold tracking-wide">{site.name}</div>
                    </div>

                    <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
                        <NavLink href="#projects" label="Projects" />
                        <NavLink href="#skills" label="Skills" />
                        <NavLink href="#experience" label="Internships" />
                        <NavLink href="#education" label="Education" />
                        <NavLink href="#contact" label="Contact" />
                    </nav>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-4">
                {/* HERO */}
                <section className="relative grid min-w-0 gap-10 py-14 md:grid-cols-[1.15fr_0.85fr]">
                    <TechBackdrop />

                    <motion.div variants={heroVariant} initial="hidden" animate="show" className="min-w-0 space-y-5">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_22px_rgba(16,185,129,0.65)]" />
                            Available for opportunities
                        </div>

                        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              <span className="bg-gradient-to-r from-indigo-300 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">
                {site.name}
              </span>
                        </h1>

                        <p className="text-white/80">{site.headline}</p>
                        <p className="max-w-xl text-white/70">{site.about}</p>

                        <TechTicker />

                        <div className="flex flex-wrap gap-3 pt-2">
                            <a className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10" href="#projects">
                                View projects
                            </a>

                            <a
                                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                                href={`mailto:${site.email}`}
                            >
                                Email
                            </a>

                            <a
                                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                                href={site.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>

                            {/* Resume button -> opens preview modal */}
                            <button
                                onClick={() => setResumeOpen(true)}
                                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                            >
                                <Download size={16} />
                                Download Resume
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-3 text-sm text-white/75">
              <span className="inline-flex items-center gap-2">
                <Mail size={16} />
                  {site.email}
              </span>
                            <span className="inline-flex items-center gap-2">
                <Phone size={16} />
                                {site.phone}
              </span>
                        </div>
                    </motion.div>

                    <motion.div variants={heroVariant} initial="hidden" animate="show" className="relative">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                            <motion.div
                                whileHover={{ y: -6, scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                                className="mx-auto max-w-md"
                            >
                                <div className="rounded-3xl bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 p-[3px] shadow-[0_0_45px_rgba(6,182,212,0.18)]">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-[#070A0F]">
                                        <Image src="/dhirajphotoDP.png" alt="Profile photo" fill className="object-cover" priority />
                                    </div>
                                </div>

                                <div className="mt-4 text-center text-sm text-white/60">Java • Spring Boot • PostgreSQL</div>
                            </motion.div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <a
                                className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
                                href={site.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-white/80">GitHub</span>
                                    <Github size={18} />
                                </div>
                                <div className="mt-1 text-xs text-white/60">Projects & code</div>
                            </a>

                            <a
                                className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
                                href={site.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-white/80">LinkedIn</span>
                                    <Linkedin size={18} />
                                </div>
                                <div className="mt-1 text-xs text-white/60">Profile</div>
                            </a>
                        </div>
                    </motion.div>
                </section>

                {/* FEATURED PROJECTS – zoom/rotate slideshow */}
                <motion.section
                    id="projects"
                    variants={sectionZoomRotate}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="py-10"
                >
                    <div className="mb-5 flex items-end justify-between">
                        <SectionTitle>Featured projects</SectionTitle>
                        <div className="text-sm text-white/60">All projects</div>
                    </div>

                    <motion.div
                        variants={projectsGrid}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {allProjects.map((p) => (
                            <ProjectCard key={p.repo} p={p} />
                        ))}
                    </motion.div>
                </motion.section>

                {/* SKILLS – slide from left */}
                <motion.section
                    id="skills"
                    variants={sectionSlideLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="py-10"
                >
                    <SectionTitle>Skills</SectionTitle>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -45 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl border border-white/10 bg-white/5 p-5"
                        >
                            <div className="mb-3 text-sm font-semibold text-white/80">Proficient</div>
                            <motion.div
                                variants={skillsGrid}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className="grid gap-3"
                            >
                                {skills.proficient.map((s) => (
                                    <SkillBar key={s.name} name={s.name} level={s.level} />
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 45 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl border border-white/10 bg-white/5 p-5"
                        >
                            <div className="mb-3 text-sm font-semibold text-white/80">Familiar</div>
                            <motion.div
                                variants={skillsGrid}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className="grid gap-3"
                            >
                                {skills.familiar.map((s) => (
                                    <SkillBar key={s.name} name={s.name} level={s.level} />
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* INTERNSHIPS – slide from right */}
                <motion.section
                    id="experience"
                    variants={sectionSlideRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="py-10"
                >
                    <div className="flex items-end justify-between">
                        <SectionTitle>Internships</SectionTitle>
                        <div className="text-sm text-white/60">Experience timeline</div>
                    </div>

                    <motion.div
                        variants={timelineList}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-6 grid gap-4"
                    >
                        {internships.map((x) => (
                            <TimelineItem key={x.title} title={x.title} meta={x.meta} />
                        ))}
                    </motion.div>
                </motion.section>

                {/* EDUCATION – slide up */}
                <motion.section
                    id="education"
                    variants={sectionSlideUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="py-10"
                >
                    <div className="flex items-end justify-between">
                        <SectionTitle>Education</SectionTitle>
                        <div className="text-sm text-white/60">Academic timeline</div>
                    </div>

                    <motion.div
                        variants={timelineList}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-6 grid gap-4"
                    >
                        {education.map((e) => (
                            <TimelineItem key={e.title} title={e.title} meta={e.meta} />
                        ))}
                    </motion.div>
                </motion.section>

                {/* CONTACT – slide up */}
                <motion.section
                    id="contact"
                    variants={sectionSlideUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="py-12"
                >
                    <motion.div
                        className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionTitle>Contact</SectionTitle>
                        <p className="mt-2 text-white/70">
                            Open to Java / Spring Boot / backend opportunities and collaborations.
                        </p>

                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                            <a
                                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
                                href={`mailto:${site.email}`}
                            >
                                <span className="text-sm text-white/80">{site.email}</span>
                                <Mail size={18} />
                            </a>

                            <a
                                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
                                href={`tel:${site.phone.replace(/\s/g, "")}`}
                            >
                                <span className="text-sm text-white/80">{site.phone}</span>
                                <Phone size={18} />
                            </a>

                            <a
                                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
                                href={site.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="text-sm text-white/80">LinkedIn</span>
                                <Linkedin size={18} />
                            </a>

                            <a
                                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
                                href={site.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="text-sm text-white/80">GitHub</span>
                                <Github size={18} />
                            </a>
                        </div>

                        <div className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} {site.name}</div>
                    </motion.div>
                </motion.section>
            </main>

            {/* Resume Preview Modal (renders once) */}
            <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
        </div>
    );
}
