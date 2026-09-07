import { Link, createFileRoute } from "@tanstack/react-router";
import { CENTER } from "@/components/site";
import t1 from "@/assets/teacher-1.jpg";
import t2 from "@/assets/teacher-2.jpg";
import t3 from "@/assets/teacher-3.jpg";
import t4 from "@/assets/teacher-4.jpg";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: `Our Teachers & Mentors — ${CENTER.name}` },
      { name: "description", content: "Meet the StudySync faculty — AI, full-stack development, data science, cloud, robotics and design mentors teaching free classes in Jaipur." },
      { property: "og:title", content: `Our Teachers & Mentors — ${CENTER.name}` },
      { property: "og:description", content: "Industry mentors teaching AI, coding, data, cloud and design — free at StudySync, Jaipur." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeachersPage,
});

const faculty = [
  {
    name: "Dr. Ananya Verma",
    subject: "AI & Machine Learning",
    exp: "12 years",
    bio: "Former research scientist; teaches Python, neural networks and applied AI projects.",
    img: t1,
  },
  {
    name: "Arjun Sharma",
    subject: "Cloud, Cybersecurity & Robotics",
    exp: "10 years",
    bio: "Cloud architect turned mentor; runs the DevOps, security and IoT hardware labs.",
    img: t2,
  },
  {
    name: "Sneha Kulkarni",
    subject: "Full-Stack Development & UI/UX",
    exp: "8 years",
    bio: "Product engineer guiding students from first line of code to shipped portfolio apps.",
    img: t3,
  },
  {
    name: "Rahul Meena",
    subject: "Data Science & Analytics",
    exp: "9 years",
    bio: "Analytics lead teaching SQL, statistics, dashboards and real-world data storytelling.",
    img: t4,
  },
];

function TeachersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Our Teachers</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Every subject at {CENTER.name} is led by a mentor who has built real products in the industry —
        and they teach for free, on Tonk Road, Jaipur.
      </p>

      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {faculty.map((f) => (
          <article
            key={f.name}
            className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl"
          >
            <img
              src={f.img}
              alt={`${f.name}, ${f.subject} teacher at ${CENTER.name}`}
              loading="lazy"
              width={768}
              height={768}
              className="aspect-square w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-bold">{f.name}</h2>
              <p className="mt-1 text-sm font-semibold text-primary">{f.subject}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{f.exp} experience</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.bio}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-start gap-4 rounded-2xl border border-border bg-primary p-8 text-primary-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-black">Want to learn from them?</h2>
          <p className="mt-1 opacity-80">Create your free student account and join a batch today.</p>
        </div>
        <Link to="/login" className="rounded-lg bg-primary-foreground px-6 py-3 text-sm font-bold text-primary">
          Student Login
        </Link>
      </div>
    </div>
  );
}
