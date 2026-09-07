import { Link, createFileRoute } from "@tanstack/react-router";
import { CENTER } from "@/components/site";
import aiImg from "@/assets/course-ai.jpg";
import webImg from "@/assets/course-web.jpg";
import dataImg from "@/assets/course-data.jpg";
import cloudImg from "@/assets/course-cloud.jpg";
import roboticsImg from "@/assets/course-robotics.jpg";
import designImg from "@/assets/course-design.jpg";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: `Future Tech Courses — ${CENTER.name}` },
      { name: "description", content: "Free ed-tech courses in AI & Machine Learning, Full-Stack Web, Data Science, Cloud & Cybersecurity, Robotics & IoT and UI/UX Design at StudySync, Tonk Road, Jaipur." },
      { property: "og:title", content: `Future Tech Courses — ${CENTER.name}` },
      { property: "og:description", content: "Free future-ready technology programs with expert mentors in Jaipur." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoursesPage,
});

const courses = [
  {
    track: "Artificial Intelligence",
    name: "AI & Machine Learning Bootcamp",
    desc: "Python, neural networks, prompt engineering and building real AI apps end to end.",
    duration: "6 Months",
    mode: "Offline + Live Online",
    level: "Beginner to Advanced",
    img: aiImg,
    mentor: "Dr. Ananya Verma",
  },
  {
    track: "Software Engineering",
    name: "Full-Stack Web Development",
    desc: "HTML, CSS, JavaScript, React, Node and databases — ship production-ready products.",
    duration: "5 Months",
    mode: "Offline Batch",
    level: "Beginner friendly",
    img: webImg,
    mentor: "Sneha Kulkarni",
  },
  {
    track: "Data",
    name: "Data Science & Analytics",
    desc: "SQL, Python, statistics, dashboards and storytelling with real company datasets.",
    duration: "4 Months",
    mode: "Hybrid",
    level: "Intermediate",
    img: dataImg,
    mentor: "Rahul Meena",
  },
  {
    track: "Infrastructure",
    name: "Cloud Computing & Cybersecurity",
    desc: "AWS basics, DevOps pipelines, ethical hacking fundamentals and secure deployments.",
    duration: "4 Months",
    mode: "Offline (Evening)",
    level: "Intermediate",
    img: cloudImg,
    mentor: "Arjun Sharma",
  },
  {
    track: "Hardware",
    name: "Robotics & IoT Engineering",
    desc: "Microcontrollers, sensors, automation and smart-device projects in our hardware lab.",
    duration: "3 Months",
    mode: "Offline Lab",
    level: "Beginner",
    img: roboticsImg,
    mentor: "Arjun Sharma",
  },
  {
    track: "Design",
    name: "UI/UX & Product Design",
    desc: "Design thinking, wireframes, Figma, design systems and portfolio-ready case studies.",
    duration: "3 Months",
    mode: "Hybrid",
    level: "Beginner",
    img: designImg,
    mentor: "Sneha Kulkarni",
  },
];

function CoursesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
        New-age Ed-Tech
      </span>
      <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Future Tech Courses</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Skill tracks built for tomorrow's tech companies — AI, software, data, cloud, robotics and design.
        Every program is 100% free at our Tonk Road, Jaipur center. Open {CENTER.timing.replace("Open Daily: ", "")} —
        or call our 24/7 helpline {CENTER.helpline}.
      </p>

      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <article
            key={c.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl"
          >
            <img
              src={c.img}
              alt={`${c.name} class at ${CENTER.name}`}
              loading="lazy"
              width={1024}
              height={640}
              className="h-44 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {c.track} • {c.mode}
              </span>
              <h2 className="mt-2 text-lg font-bold leading-snug">{c.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Duration</dt>
                  <dd className="font-semibold">{c.duration}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Fee</dt>
                  <dd className="font-semibold text-primary">Free</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Level</dt>
                  <dd className="font-semibold">{c.level}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Mentor</dt>
                  <dd className="font-semibold">{c.mentor}</dd>
                </div>
              </dl>
              <div className="mt-6 flex gap-3">
                <Link
                  to="/login"
                  className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-bold text-primary-foreground transition-opacity hover:opacity-85"
                >
                  Join Free
                </Link>
                <a
                  href={`tel:${CENTER.phoneRaw}`}
                  className="rounded-lg border border-border px-4 py-2.5 text-center text-sm font-bold transition-colors hover:bg-secondary"
                >
                  Call
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-border bg-secondary/60 p-8 text-center">
        <h2 className="text-2xl font-black">Meet the mentors behind these tracks</h2>
        <p className="mt-2 text-muted-foreground">Industry engineers and educators teaching every subject.</p>
        <Link
          to="/teachers"
          className="mt-5 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
        >
          View Our Teachers
        </Link>
      </div>
    </div>
  );
}
