import { createFileRoute } from "@tanstack/react-router";
import { CENTER } from "@/components/site";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: `Free Courses — ${CENTER.name}` },
      { name: "description", content: "Free courses for students, teachers and training professionals — JEE, NEET, boards, teaching certification and skill development in Jaipur." },
      { property: "og:title", content: `Free Courses — ${CENTER.name}` },
      { property: "og:description", content: "Explore free batches and programs at our Tonk Road, Jaipur center." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoursesPage,
});

const courses = [
  { category: "Students", name: "JEE (Main + Advanced)", duration: "1–2 Years", mode: "Offline Batch", price: "Free" },
  { category: "Students", name: "NEET-UG", duration: "1–2 Years", mode: "Offline Batch", price: "Free" },
  { category: "Students", name: "Class 6–10 Foundation", duration: "1 Year", mode: "Offline Batch", price: "Free" },
  { category: "Students", name: "Class 11–12 Boards + CUET", duration: "1 Year", mode: "Offline Batch", price: "Free" },
  { category: "Teachers", name: "Teaching Certification Program", duration: "6 Months", mode: "Hybrid", price: "Free" },
  { category: "Teachers", name: "Classroom Management Workshop", duration: "4 Weeks", mode: "Offline", price: "Free" },
  { category: "Teachers", name: "Pedagogy & Assessment Design", duration: "8 Weeks", mode: "Hybrid", price: "Free" },
  { category: "Training Workers", name: "Communication & Soft Skills", duration: "6 Weeks", mode: "Offline (Evening)", price: "Free" },
  { category: "Training Workers", name: "Digital Tools for Professionals", duration: "8 Weeks", mode: "Hybrid", price: "Free" },
  { category: "Training Workers", name: "Corporate Skill Development", duration: "3 Months", mode: "Offline (Weekend)", price: "Free" },
];

const categories = ["All", "Students", "Teachers", "Training Workers"];

function CoursesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Free Courses & Programs</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Structured offline batches at our Tonk Road, Jaipur center — completely free of cost. Open {CENTER.timing.replace("Open Daily: ", "")} —
        visit for a free demo class or call our 24/7 helpline {CENTER.helpline}.
      </p>

      {categories.slice(1).map((cat) => (
        <section key={cat} className="mt-14">
          <h2 className="border-b border-border pb-3 text-2xl font-bold">{cat}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses
              .filter((c) => c.category === cat)
              .map((c) => (
                <article
                  key={c.name}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-xl"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {c.mode}
                  </span>
                  <h3 className="mt-2 text-lg font-bold leading-snug">{c.name}</h3>
                  <dl className="mt-4 flex gap-6 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Duration</dt>
                      <dd className="font-semibold">{c.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Fee</dt>
                      <dd className="font-semibold text-primary">{c.price}</dd>
                    </div>
                  </dl>
                  <a
                    href={`tel:${CENTER.phoneRaw}`}
                    className="mt-6 rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-bold text-primary-foreground transition-opacity hover:opacity-85"
                  >
                    Enquire Now
                  </a>
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
