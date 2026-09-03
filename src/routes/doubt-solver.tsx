import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

import { CENTER } from "@/components/site";
import { askDoubt } from "@/lib/doubt.functions";
import mascot from "@/assets/ai-mascot.png";
import stickers from "@/assets/stickers.png";

export const Route = createFileRoute("/doubt-solver")({
  head: () => ({
    meta: [
      { title: `AI Doubt Solver — ${CENTER.name}, Jaipur` },
      {
        name: "description",
        content:
          "Ask any study doubt and get an instant step-by-step AI answer, free. Maths, Science, JEE, NEET and board prep help from Badddie Education Center, Jaipur.",
      },
      { property: "og:title", content: `Free AI Doubt Solver — ${CENTER.name}` },
      {
        property: "og:description",
        content: "Instant step-by-step AI answers for students, teachers and trainees. Free, 24/7.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DoubtSolver,
});

type Msg = { role: "user" | "assistant"; content: string };

const SAMPLES = [
  "Explain Newton's second law with an example",
  "Solve: 2x² − 7x + 3 = 0",
  "What is photosynthesis in simple words?",
  "Tips to revise for board exams in 30 days",
];

function DoubtSolver() {
  const ask = useServerFn(askDoubt);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  async function send(text: string) {
    const question = text.trim();
    if (!question || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: question }];
    setMessages(next);
    setInput("");
    setError(null);
    setLoading(true);
    try {
      const res = await ask({ data: { messages: next.slice(-12) } });
      setMessages([...next, { role: "assistant", content: res.answer }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      requestAnimationFrame(() => endRef.current?.scrollIntoView({ behavior: "smooth" }));
    }
  }

  return (
    <div className="relative overflow-hidden">
      <img
        src={stickers}
        alt=""
        aria-hidden
        loading="lazy"
        width={1024}
        height={1024}
        className="pointer-events-none absolute -right-16 -top-10 w-64 opacity-20 sm:w-80"
      />

      <section className="mx-auto max-w-4xl px-4 pb-16 pt-12 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <img
            src={mascot}
            alt="Badddie AI tutor mascot"
            width={768}
            height={768}
            className="h-28 w-28 drop-shadow-md sm:h-36 sm:w-36"
          />
          <span className="rounded-full bg-secondary px-4 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
            ✨ 100% Free • Powered by AI
          </span>
          <h1 className="text-3xl font-black tracking-tight sm:text-5xl">AI Doubt Solver</h1>
          <p className="max-w-xl text-muted-foreground">
            Ask any doubt — Maths, Science, JEE, NEET, boards or teaching skills — and get an
            instant step-by-step explanation. Available anytime, at zero cost.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card p-4 shadow-xl sm:p-6">
          <div className="max-h-[52vh] min-h-56 space-y-4 overflow-y-auto pr-1">
            {messages.length === 0 && (
              <div className="rounded-2xl bg-secondary/60 p-5 text-sm text-muted-foreground">
                👋 Hi! I'm your free AI tutor. Type your doubt below or pick a sample question to
                start.
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "flex justify-end" : "flex items-start gap-3"}
              >
                {m.role === "assistant" && (
                  <img
                    src={mascot}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    width={768}
                    height={768}
                    className="mt-1 h-8 w-8 shrink-0"
                  />
                )}
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
                      : "max-w-[85%] rounded-2xl rounded-bl-sm border border-border bg-background px-4 py-3 text-sm"
                  }
                >
                  {m.role === "assistant" ? (
                    <div className="prose prose-sm max-w-none prose-headings:font-bold prose-strong:text-foreground">
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                  ) : (
                    m.content
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:120ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:240ms]" />
                Thinking about your doubt…
              </div>
            )}
            <div ref={endRef} />
          </div>

          {error && (
            <p className="mt-3 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </p>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void send(input);
            }}
            className="mt-5 flex flex-col gap-3 sm:flex-row"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your doubt here…"
              className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-50"
            >
              {loading ? "Solving…" : "Ask AI 🚀"}
            </button>
          </form>

          <div className="mt-4 flex flex-wrap gap-2">
            {SAMPLES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => void send(s)}
                disabled={loading}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary disabled:opacity-50"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Still stuck? Call our 24/7 student helpline{" "}
          <a
            href={`tel:${CENTER.helpline.replace(/[^0-9]/g, "")}`}
            className="font-bold text-foreground underline"
          >
            {CENTER.helpline}
          </a>{" "}
          or visit us at {CENTER.address}.
        </p>
      </section>
    </div>
  );
}
