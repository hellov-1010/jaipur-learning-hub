import { createFileRoute } from "@tanstack/react-router";
import { CENTER } from "@/components/site";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: `Dashboard — ${CENTER.name}` },
      { name: "description", content: "Student and teacher dashboard — batches, attendance, schedule and performance at VidyaPoint Academy, Jaipur." },
      { property: "og:title", content: `Dashboard — ${CENTER.name}` },
      { property: "og:description", content: "Track batches, attendance and performance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DashboardPage,
});

const kpis = [
  { label: "Active Batches", value: "24" },
  { label: "Attendance This Week", value: "92%" },
  { label: "Tests Completed", value: "18" },
  { label: "Avg. Test Score", value: "78%" },
];

const schedule = [
  { time: "9:00 – 10:30 AM", batch: "JEE Physics — Batch A", room: "Room 101" },
  { time: "10:45 – 12:15 PM", batch: "NEET Biology — Batch B", room: "Room 102" },
  { time: "12:30 – 2:00 PM", batch: "Class 10 Maths Foundation", room: "Room 201" },
  { time: "3:00 – 4:30 PM", batch: "Teaching Certification", room: "Room 105" },
  { time: "5:00 – 6:30 PM", batch: "Soft Skills (Evening)", room: "Room 202" },
  { time: "6:45 – 8:00 PM", batch: "Doubt Clearing Session", room: "Hall 1" },
];

const announcements = [
  { title: "Mock Test — JEE Advanced", date: "Sunday, 10:00 AM", tag: "Exam" },
  { title: "Parent–Teacher Meeting", date: "Saturday, 4:00 PM", tag: "Meeting" },
  { title: "New NEET Batch Admission Open", date: "Enrolling now", tag: "Admission" },
];

function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {CENTER.address} • {CENTER.timing}
          </p>
        </div>
        <a
          href={`tel:${CENTER.helpline.replace(/[^0-9]/g, "")}`}
          className="rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
        >
          24/7 Helpline: {CENTER.helpline}
        </a>
      </div>

      {/* KPI cards */}
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-2xl border border-border bg-card p-6">
            <div className="text-3xl font-black">{k.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{k.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Today's schedule */}
        <section className="rounded-2xl border border-border bg-card lg:col-span-2">
          <header className="border-b border-border px-6 py-4">
            <h2 className="font-bold">Today's Class Schedule</h2>
          </header>
          <ul className="divide-y divide-border">
            {schedule.map((s) => (
              <li key={s.time} className="flex flex-wrap items-center justify-between gap-2 px-6 py-4">
                <div>
                  <div className="text-sm font-semibold">{s.batch}</div>
                  <div className="text-xs text-muted-foreground">{s.room}</div>
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold">
                  {s.time}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Announcements */}
        <section className="rounded-2xl border border-border bg-card">
          <header className="border-b border-border px-6 py-4">
            <h2 className="font-bold">Announcements</h2>
          </header>
          <ul className="divide-y divide-border">
            {announcements.map((a) => (
              <li key={a.title} className="px-6 py-4">
                <span className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-bold text-primary-foreground">
                  {a.tag}
                </span>
                <div className="mt-2 text-sm font-semibold">{a.title}</div>
                <div className="text-xs text-muted-foreground">{a.date}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Performance */}
      <section className="mt-6 rounded-2xl border border-border bg-card">
        <header className="border-b border-border px-6 py-4">
          <h2 className="font-bold">Weekly Performance</h2>
        </header>
        <div className="flex h-56 items-end gap-3 px-6 py-6">
          {[62, 75, 58, 82, 70, 91, 78].map((v, i) => (
            <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <span className="text-xs font-semibold">{v}%</span>
              <div
                className="w-full rounded-t-lg bg-primary transition-all hover:opacity-80"
                style={{ height: `${v}%` }}
              />
              <span className="text-xs text-muted-foreground">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
