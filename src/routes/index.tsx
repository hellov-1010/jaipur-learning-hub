import { Link, createFileRoute } from "@tanstack/react-router";
import { CENTER } from "@/components/site";
import heroImg from "@/assets/hero-students.jpg";
import stickers from "@/assets/stickers.png";
import mascot from "@/assets/ai-mascot.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${CENTER.name} — Free Education on Tonk Road, Jaipur` },
      { name: "description", content: "Free offline education center on Tonk Road, Jaipur for students, teachers & training professionals. Open 9 AM–8 PM. 24/7 student helpline." },
      { property: "og:title", content: `${CENTER.name} — Free Education, Jaipur` },
      { property: "og:description", content: "Quality free education for students, teachers & training workers. Tonk Road, Jaipur. Open 9 AM–8 PM daily." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "100%", label: "Free Education" },
  { value: "12,000+", label: "Students Taught" },
  { value: "150+", label: "Expert Faculty" },
  { value: "24/7", label: "Doubt Helpline" },
];

const audiences = [
  {
    title: "For Students",
    desc: "Free classes for Class 6–12, JEE, NEET & board prep with structured batches, daily practice and personal mentorship.",
  },
  {
    title: "For Teachers",
    desc: "Free teaching certification programs, pedagogy workshops and classroom-management training.",
  },
  {
    title: "For Training Workers",
    desc: "Free skill development, communication and professional upskilling programs for working professionals.",
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
        <img
          src={stickers}
          alt=""
          aria-hidden
          loading="lazy"
          width={1024}
          height={1024}
          className="pointer-events-none absolute -left-16 bottom-0 w-60 opacity-20"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-70">
            {CENTER.address} • {CENTER.timing}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            {CENTER.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-80">
            Jaipur's trusted free education center for students, teachers, and training professionals.
            Structured batches, expert faculty, and a 24/7 doubt helpline — at no cost.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/courses"
              className="rounded-lg bg-primary-foreground px-6 py-3 text-sm font-bold text-primary transition-transform hover:scale-[1.03]"
            >
              Explore Free Courses
            </Link>
            <Link
              to="/doubt-solver"
              className="rounded-lg border border-primary-foreground/40 px-6 py-3 text-sm font-bold transition-colors hover:bg-primary-foreground/10"
            >
              🤖 Try Free AI Doubt Solver
            </Link>
            <a
              href={`tel:${CENTER.helpline.replace(/[^0-9]/g, "")}`}
              className="rounded-lg border border-primary-foreground/40 px-6 py-3 text-sm font-bold transition-colors hover:bg-primary-foreground/10"
            >
              24/7 Helpline: {CENTER.helpline}
            </a>
          </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Students learning together at Badddie Education Center in Jaipur"
              width={1280}
              height={960}
              className="w-full rounded-3xl border-4 border-primary-foreground/30 object-cover shadow-2xl"
            />
            <img
              src={mascot}
              alt=""
              aria-hidden
              loading="lazy"
              width={768}
              height={768}
              className="absolute -bottom-6 -right-4 h-24 w-24 drop-shadow-xl sm:h-32 sm:w-32"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-10 text-center">
              <div className="text-3xl font-black sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Audiences */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Who We Teach</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Free programs designed for every learner — from school students to working professionals.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-xl font-black text-primary-foreground">
                {a.title.replace("For ", "")[0]}
              </div>
              <h3 className="mt-5 text-xl font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Doubt Solver */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={mascot}
              alt="Friendly AI tutor mascot"
              loading="lazy"
              width={768}
              height={768}
              className="h-56 w-56 drop-shadow-xl sm:h-72 sm:w-72"
            />
          </div>
          <div>
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
              New ✨
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Free AI Doubt Solver
            </h2>
            <p className="mt-3 text-muted-foreground">
              Snap a question in your mind and get an instant step-by-step answer — Maths, Science,
              JEE, NEET, boards and teaching skills. No fees, no waiting.
            </p>
            <ul className="mt-6 grid gap-3 text-sm font-medium sm:grid-cols-2">
              <li className="rounded-xl border border-border bg-card px-4 py-3">📚 Step-by-step solutions</li>
              <li className="rounded-xl border border-border bg-card px-4 py-3">⚡ Instant answers, 24/7</li>
              <li className="rounded-xl border border-border bg-card px-4 py-3">🗣️ English & Hinglish</li>
              <li className="rounded-xl border border-border bg-card px-4 py-3">💖 Always 100% free</li>
            </ul>
            <Link
              to="/doubt-solver"
              className="mt-7 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Ask Your Doubt Now
            </Link>
          </div>
        </div>
      </section>

      {/* Helpline banner */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black sm:text-3xl">Stuck on a doubt at 2 AM?</h2>
            <p className="mt-2 text-muted-foreground">
              Our student helpline is available 24/7 for doubts and queries — call anytime, completely free.
            </p>
          </div>
          <a
            href={`tel:${CENTER.helpline.replace(/[^0-9]/g, "")}`}
            className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Call {CENTER.helpline}
          </a>
        </div>
      </section>

      {/* Visit us */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Visit Our Offline Center</h2>
            <p className="mt-3 text-muted-foreground">
              Walk in for a free counselling session and campus tour. No fees, no hidden charges.
            </p>
            <dl className="mt-8 space-y-5">
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 text-sm font-semibold text-muted-foreground">Address</dt>
                <dd className="text-sm font-medium">{CENTER.address}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 text-sm font-semibold text-muted-foreground">Timing</dt>
                <dd className="text-sm font-medium">{CENTER.timing}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 text-sm font-semibold text-muted-foreground">Phone</dt>
                <dd className="text-sm font-medium">
                  <a href={`tel:${CENTER.phoneRaw}`} className="underline">{CENTER.phone}</a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 text-sm font-semibold text-muted-foreground">Email</dt>
                <dd className="text-sm font-medium">
                  <a href={`mailto:${CENTER.email}`} className="underline">{CENTER.email}</a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 text-sm font-semibold text-muted-foreground">Helpline</dt>
                <dd className="text-sm font-medium">{CENTER.helpline} — 24/7 toll free</dd>
              </div>
            </dl>
          </div>
          <div className="flex items-center justify-center rounded-2xl border border-border bg-primary p-10 text-center text-primary-foreground">
            <div>
              <div className="text-5xl font-black">9 AM – 8 PM</div>
              <p className="mt-3 text-lg opacity-80">Open every day at Tonk Road, Jaipur</p>
              <Link
                to="/contact"
                className="mt-6 inline-block rounded-lg bg-primary-foreground px-6 py-3 text-sm font-bold text-primary"
              >
                Get Directions & Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
