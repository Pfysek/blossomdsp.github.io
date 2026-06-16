import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blossom DSP — Simple Tools. Serious Sound." },
      { name: "description", content: "Focused audio plugins built by a solo engineer. Peach Saturator, Cactus Transient Shaper, and a vocal reverb — coming soon." },
    ],
  }),
  component: Index,
});

/* ----------------------------- Nav ----------------------------- */
function Nav() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) setVisible(true);
      else setVisible(y < lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-border bg-surface text-peach">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3c2 3 5 4 5 8a5 5 0 1 1-10 0c0-4 3-5 5-8Z" />
            </svg>
          </span>
          <span>Blossom DSP</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex">
          <a href="#plugins" className="transition-colors hover:text-foreground">Plugins</a>
          <a href="#demos" className="transition-colors hover:text-foreground">Demos</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a
            href="#waitlist"
            className="rounded-full bg-peach px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join Waitlist
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ----------------------------- Hero ----------------------------- */
function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-6 pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 animate-soft-pulse rounded-full bg-peach" />
          Three plugins. One vision. Launching soon.
        </div>
        <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          <span className="shimmer-text">Simple Tools.</span>
          <br />
          <span className="shimmer-text">Serious Sound.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
          Focused audio plugins from a solo engineer. No 50-knob panels. No bloat.
          Just the controls that matter — and the sound that finishes the track.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#waitlist"
            className="group inline-flex items-center gap-2 rounded-full bg-peach px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-10px_var(--peach)] transition-all hover:shadow-[0_0_60px_-8px_var(--peach)]"
          >
            Join Waitlist
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#demos"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            Watch Demos
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">scroll</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4 animate-bounce-slow" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Plugins ----------------------------- */
type Plugin = {
  name: string;
  tagline: string;
  description: string;
  accent: "peach" | "cactus" | "lavender";
  features: string[];
  status: string;
  offset?: string;
};

const plugins: Plugin[] = [
  {
    name: "Peach",
    tagline: "Saturator",
    description: "Split-band saturation with odd and even harmonics. Fresh adds air. Warm adds glue.",
    accent: "peach",
    status: "Coming Soon",
    features: [
      "Split-band processing (low / mid / high)",
      "Odd + even harmonic blend",
      "Fresh & Warm modes",
      "Oversampling with auto gain",
      "Mix control",
    ],
  },
  {
    name: "Cactus",
    tagline: "Transient Shaper",
    description: "Precision transient control with real-time waveform feedback. Punch or tame in one move.",
    accent: "cactus",
    status: "Coming Soon",
    offset: "md:mt-16",
    features: [
      "Attack & sustain shaping",
      "Real-time waveform readout",
      "Smart envelope detection",
      "Dry / Wet mix",
      "Output trim",
    ],
  },
  {
    name: "Vocal Reverb",
    tagline: "Convolution Space",
    description: "Convolution reverb designed for vocals. Three curated spaces. One character knob.",
    accent: "lavender",
    status: "2026",
    features: [
      "Three curated impulse spaces",
      "Single Character macro",
      "Pre-delay sync to host",
      "Vocal-tuned EQ tilt",
      "Ultra-low CPU mode",
    ],
  },
];

function accentClass(a: Plugin["accent"]) {
  return a === "peach"
    ? { bar: "bg-peach", text: "text-peach", glow: "shadow-[0_0_60px_-20px_var(--peach)]", ring: "ring-peach/30" }
    : a === "cactus"
    ? { bar: "bg-cactus", text: "text-cactus", glow: "shadow-[0_0_60px_-20px_var(--cactus)]", ring: "ring-cactus/30" }
    : { bar: "bg-lavender", text: "text-lavender", glow: "shadow-[0_0_60px_-20px_var(--lavender)]", ring: "ring-lavender/30" };
}

function PluginCard({ plugin, index }: { plugin: Plugin; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const a = accentClass(plugin.accent);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative ${plugin.offset ?? ""} ${shown ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/15 ${a.glow}`}
      >
        {/* Screenshot placeholder */}
        <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl border border-dashed border-border bg-background/40">
          <div className="absolute inset-0 grid place-items-center text-center">
            <div className="text-muted-foreground">
              <svg viewBox="0 0 24 24" className="mx-auto mb-2 h-6 w-6 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 15l5-5 4 4 3-3 6 6" />
              </svg>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Upload Screenshot</p>
            </div>
          </div>
          {/* faint waveform deco */}
          <svg className="absolute inset-x-0 bottom-0 h-12 w-full opacity-25" viewBox="0 0 400 60" preserveAspectRatio="none">
            <path d={`M0 30 ${Array.from({ length: 80 }).map((_, i) => `L${i * 5} ${30 + Math.sin(i * 0.6 + index) * (10 + (i % 7))}`).join(" ")}`}
              fill="none" stroke="currentColor" strokeWidth="1" className={a.text} />
          </svg>
        </div>

        {/* Accent bar */}
        <div className={`mb-3 h-[2px] w-10 rounded-full ${a.bar}`} />

        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold tracking-tight">{plugin.name}</h3>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {plugin.tagline}
            </p>
          </div>
          <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${a.text}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${a.bar} animate-soft-pulse`} />
            {plugin.status}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{plugin.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {["VST3", "AU", "AAX"].map((f) => (
            <span key={f} className="rounded-full border border-border bg-background/40 px-2 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground">
              {f}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-5 flex w-full items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="font-mono uppercase tracking-[0.18em]">Features</span>
          <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div className={`grid transition-all duration-300 ${open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
          <ul className="overflow-hidden space-y-1.5 text-sm text-foreground/85">
            {plugin.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className={`mt-2 h-1 w-1 rounded-full ${a.bar}`} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PluginsSection() {
  return (
    <section id="plugins" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="The Core" title="Three plugins. Built around one idea." />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plugins.map((p, i) => (
            <PluginCard key={p.name} plugin={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Demos ----------------------------- */
const demos = [
  { title: "Peach on Vocals", accent: "peach" as const },
  { title: "Cactus on Drums", accent: "cactus" as const },
  { title: "Peach on Drum Bus", accent: "peach" as const },
  { title: "Full Workflow", accent: "lavender" as const },
];

function DemosSection() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="demos" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="In Session" title="Hear them in real productions." />
      </div>
      <div className="mt-14 overflow-x-auto pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex snap-x snap-mandatory gap-5 px-6 sm:px-12">
          {demos.map((d) => {
            const a = accentClass(d.accent);
            return (
              <button
                key={d.title}
                onClick={() => setOpen(d.title)}
                className="group relative shrink-0 snap-start text-left"
              >
                <div className={`relative aspect-video w-[80vw] max-w-[520px] overflow-hidden rounded-2xl border border-border bg-surface/60 transition-transform duration-300 group-hover:scale-[1.02] ${a.glow}`}>
                  <div className="absolute inset-0 grid place-items-center text-muted-foreground">
                    <div className="text-center">
                      <svg viewBox="0 0 24 24" className="mx-auto mb-2 h-6 w-6 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 15l5-5 4 4 3-3 6 6" />
                      </svg>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Upload Thumbnail</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className={`grid h-16 w-16 place-items-center rounded-full border border-white/20 bg-background/60 backdrop-blur transition-transform duration-300 group-hover:scale-110 ${a.text}`}>
                      <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm font-medium">{d.title}</p>
                <p className={`font-mono text-[10px] uppercase tracking-[0.18em] ${a.text}`}>Demo</p>
              </button>
            );
          })}
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-6 backdrop-blur"
        >
          <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-4xl">
            <button
              onClick={() => setOpen(null)}
              className="absolute -top-10 right-0 text-sm text-muted-foreground hover:text-foreground"
            >
              Close ✕
            </button>
            <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="grid h-full place-items-center text-muted-foreground">
                <div className="text-center">
                  <p className="text-sm">{open}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em]">Embed YouTube ID here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ----------------------------- About ----------------------------- */
function AboutVisual() {
  // animated waveform
  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface/60 p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--peach)_18%,transparent),transparent_60%),radial-gradient(circle_at_70%_70%,color-mix(in_oklab,var(--cactus)_15%,transparent),transparent_60%)]" />
      <div className="relative grid h-full place-items-center">
        <svg viewBox="0 0 200 200" className="h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => {
            const angle = (i / 64) * Math.PI * 2;
            const r1 = 50;
            const r2 = 60 + Math.sin(i * 0.6) * 18 + (i % 5) * 2;
            const x1 = 100 + Math.cos(angle) * r1;
            const y1 = 100 + Math.sin(angle) * r1;
            const x2 = 100 + Math.cos(angle) * r2;
            const y2 = 100 + Math.sin(angle) * r2;
            return (
              <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={i % 3 === 0 ? "var(--peach)" : i % 3 === 1 ? "var(--cactus)" : "var(--lavender)"}
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity={0.7}
              >
                <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2 + (i % 5) * 0.3}s`} repeatCount="indefinite" />
              </line>
            );
          })}
          <circle cx="100" cy="100" r="40" fill="none" stroke="var(--border)" strokeWidth="1" />
          <circle cx="100" cy="100" r="6" fill="var(--peach)" />
        </svg>
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        SIG · 24-BIT / 96kHz
      </div>
      <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.18em] text-peach">
        ● LIVE
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeader eyebrow="The Story" title="Built by one engineer. For producers who finish." align="left" />
          <p className="mt-8 text-lg leading-relaxed text-foreground/85">
            Blossom DSP is built by a single audio engineering student who was tired of plugins with
            50 parameters and no soul. Every plugin is designed around one idea:{" "}
            <span className="text-peach">simple controls, complex sound.</span>
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Built with JUCE. Tested in real sessions. Made for producers who want to finish tracks,
            not read manuals.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 font-mono text-xs">
            <div>
              <div className="text-lg font-semibold text-foreground">3</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Plugins</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-foreground">1</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Engineer</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-foreground">0</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Bloat</div>
            </div>
          </div>
        </div>
        <AboutVisual />
      </div>
    </section>
  );
}

/* ----------------------------- Waitlist ----------------------------- */
function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  // Placeholder Formspree endpoint — replace YOUR_FORM_ID
  const FORMSPREE_ID = "YOUR_FORM_ID";

  return (
    <section id="waitlist" className="px-6 py-32">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeader eyebrow="Early Access" title="Be first. Save 30%." />
        <p className="mt-6 text-muted-foreground">
          Drop your email. We'll only message you when something ships.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-border bg-surface/60 p-8">
            <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-full bg-peach/15 text-peach">
              ✓
            </div>
            <p className="text-lg font-medium">You're in.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Early subscribers get 30% off at launch.
            </p>
          </div>
        ) : (
          <form
            action={`https://formspree.io/f/${FORMSPREE_ID}`}
            method="POST"
            onSubmit={(e) => {
              if (FORMSPREE_ID === "YOUR_FORM_ID") {
                e.preventDefault();
              }
              setSubmitted(true);
            }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="you@studio.com"
              className="flex-1 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-peach/50 focus:shadow-[0_0_0_4px_color-mix(in_oklab,var(--peach)_15%,transparent)]"
            />
            <button
              type="submit"
              className="rounded-full bg-peach px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-12px_var(--peach)] transition-opacity hover:opacity-90"
            >
              Join Waitlist
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ----------------------------- Footer ----------------------------- */
function Footer() {
  const Icon = ({ d }: { d: string }) => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm">© 2026 Blossom DSP</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Made in Germany · Coded in Poland
          </p>
        </div>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a href="mailto:hello@blossomdsp.com" className="text-sm transition-colors hover:text-foreground">
            hello@blossomdsp.com
          </a>
          <div className="hairline h-4 w-px" />
          <a href="#" aria-label="YouTube" className="transition-colors hover:text-foreground">
            <Icon d="M3 7c0-1.5 1-2.5 2.5-2.5h13C20 4.5 21 5.5 21 7v10c0 1.5-1 2.5-2.5 2.5h-13C4 19.5 3 18.5 3 17V7zM10 9l5 3-5 3V9z" />
          </a>
          <a href="#" aria-label="TikTok" className="transition-colors hover:text-foreground">
            <Icon d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5M14 4c.5 2 2 3.5 4 4" />
          </a>
          <a href="#" aria-label="Instagram" className="transition-colors hover:text-foreground">
            <Icon d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM17 7v.01" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- Section Header ----------------------------- */
function SectionHeader({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-peach">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

/* ----------------------------- Page ----------------------------- */
function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <div className="mx-auto h-px max-w-6xl hairline" />
      <PluginsSection />
      <DemosSection />
      <AboutSection />
      <Waitlist />
      <Footer />
    </main>
  );
}
