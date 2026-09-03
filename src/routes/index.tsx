import { Link, createFileRoute } from "@tanstack/react-router";
import { CENTER } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${CENTER.name} — Coaching Institute on Tonk Road, Jaipur` },
      { name: "description", content: "Offline coaching center on Tonk Road, Jaipur for students, teachers & training professionals. Open 9 AM–8 PM. 24/7 student helpline." },
      { property: "og:title", content: `${CENTER.name} — Coaching Institute, Jaipur` },
      { property: "og:description", content: "Quality education for students, teachers & training workers. Tonk Road, Jaipur. Open 9 AM–8 PM daily." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "12,000+", label: "Students Taught" },
  { value: "150+", label: "Expert Faculty" },
  { value: "95%", label: "Success Rate" },
  { value: "24/7", label: "Doubt Helpline" },
];

const audiences = [
  {
    title: "For Students",
    desc: "Class 6–12, JEE, NEET & board prep with structured batches, daily practice and personal mentorship.",
  },
  {
    title: "For Teachers",
    desc: "Teaching certification programs, pedagogy workshops and classroom-management training.",
  },
  {
    title: "For Training Workers",
    desc: "Skill development, communication and professional upskilling programs for working professionals.",
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-70">
            {CENTER.address} • {CENTER.timing}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            {CENTER.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-80">
            Jaipur's trusted offline learning center for students, teachers, and training professionals.
            Structured batches, expert faculty, and a 24/7 doubt helpline.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/courses"
              className="rounded-lg bg-primary-foreground px-6 py-3 text-sm font-bold text-primary transition-transform hover:scale-[1.03]"
            >
              Explore Courses
            </Link>
            <a
              href={`tel:${CENTER.helpline.replace(/[^0-9]/g, "")}`}
              className="rounded-lg border border-primary-foreground/40 px-6 py-3 text-sm font-bold transition-colors hover:bg-primary-foreground/10"
            >
              24/7 Helpline: {CENTER.helpline}
            </a>
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
          Programs designed for every learner — from school students to working professionals.
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

      {/* Helpline banner */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black sm:text-3xl">Stuck on a doubt at 2 AM?</h2>
            <p className="mt-2 text-muted-foreground">
              Our student helpline is available 24/7 for doubts and queries — call anytime.
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
              Walk in for a free counselling session and campus tour.
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
