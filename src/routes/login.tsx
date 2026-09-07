import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { CENTER } from "@/components/site";
import heroImg from "@/assets/hero-students.jpg";
import mascot from "@/assets/ai-mascot.png";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: `Student Login — ${CENTER.name}` },
      { name: "description", content: "Log in or create a free StudySync student account to join future tech batches, track classes and use the AI doubt solver." },
      { property: "og:title", content: `Student Login — ${CENTER.name}` },
      { property: "og:description", content: "Free student accounts at StudySync, Tonk Road, Jaipur." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
      <div className="relative order-2 hidden lg:block">
        <img
          src={heroImg}
          alt="Students learning future tech at StudySync in Jaipur"
          width={1280}
          height={960}
          className="w-full rounded-3xl border-4 border-primary/20 object-cover shadow-2xl"
        />
        <img
          src={mascot}
          alt=""
          aria-hidden
          loading="lazy"
          width={768}
          height={768}
          className="absolute -bottom-6 -right-4 h-28 w-28 drop-shadow-xl"
        />
      </div>

      <div className="order-1 mx-auto w-full max-w-md">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          {mode === "login" ? "Student Login" : "Create Student Account"}
        </h1>
        <p className="mt-2 text-muted-foreground">
          Access your free batches, class schedule and the AI doubt solver.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-1 rounded-xl border border-border bg-secondary p-1">
          {(["login", "signup"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => {
                setMode(m);
                setSubmitted(false);
              }}
              className={`rounded-lg px-4 py-2 text-sm font-bold transition-colors ${
                mode === m ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {m === "login" ? "Log In" : "Sign Up"}
            </button>
          ))}
        </div>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          {mode === "signup" && (
            <Field label="Full name" type="text" placeholder="Your name" autoComplete="name" />
          )}
          <Field label="Email" type="email" placeholder="you@example.com" autoComplete="email" />
          {mode === "signup" && (
            <Field label="Phone number" type="tel" placeholder="98XXXXXXXX" autoComplete="tel" />
          )}
          <Field
            label="Password"
            type="password"
            placeholder="••••••••"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            {mode === "login" ? "Log In" : "Create Free Account"}
          </button>
        </form>

        {submitted && (
          <p className="mt-4 rounded-xl border border-border bg-secondary p-4 text-sm">
            Thanks! Student accounts go live soon — for now call{" "}
            <a href={`tel:${CENTER.phoneRaw}`} className="font-bold underline">
              {CENTER.phone}
            </a>{" "}
            or visit the center on Tonk Road to enroll for free.
          </p>
        )}

        <p className="mt-6 text-sm text-muted-foreground">
          New to {CENTER.name}?{" "}
          <Link to="/courses" className="font-semibold text-primary underline">
            Browse free future tech courses
          </Link>
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <input
        required
        {...props}
        className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </label>
  );
}
