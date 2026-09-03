import { createFileRoute } from "@tanstack/react-router";
import { CENTER } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Us — ${CENTER.name}, Tonk Road Jaipur` },
      { name: "description", content: "Visit our free education center on Tonk Road, Jaipur. Open 9 AM–8 PM daily. Call 87223 456910 or the 24/7 helpline 1800-123-4567." },
      { property: "og:title", content: `Contact — ${CENTER.name}` },
      { property: "og:description", content: "Tonk Road, Jaipur. Open 9 AM–8 PM. 24/7 student helpline." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Contact Us</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Reach out for free admissions, doubts, or a free campus tour. We're happy to help.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Offline Center
            </h2>
            <p className="mt-3 text-lg font-bold">{CENTER.address}</p>
            <p className="mt-1 text-sm text-muted-foreground">{CENTER.timing}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`tel:${CENTER.phoneRaw}`}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Phone</h2>
              <p className="mt-3 text-lg font-bold">{CENTER.phone}</p>
              <p className="mt-1 text-xs text-muted-foreground">During center hours</p>
            </a>
            <a
              href={`mailto:${CENTER.email}`}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Email</h2>
              <p className="mt-3 break-all text-lg font-bold">{CENTER.email}</p>
              <p className="mt-1 text-xs text-muted-foreground">We reply within 24 hours</p>
            </a>
          </div>

          <a
            href={`tel:${CENTER.helpline.replace(/[^0-9]/g, "")}`}
            className="block rounded-2xl bg-primary p-6 text-primary-foreground transition-transform hover:scale-[1.01]"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider opacity-70">
              24/7 Student Helpline
            </h2>
            <p className="mt-3 text-2xl font-black">{CENTER.helpline} (Toll Free)</p>
            <p className="mt-1 text-sm opacity-80">
              For doubts &amp; queries — available round the clock, every day.
            </p>
          </a>
        </div>

        {/* Enquiry form */}
        <form
          className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-xl font-bold">Send an Enquiry</h2>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-semibold">Full Name</label>
              <input
                id="name"
                required
                placeholder="Your name"
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-semibold">Phone Number</label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="Your phone number"
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="interest" className="text-sm font-semibold">I am a</label>
              <select
                id="interest"
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              >
                <option>Student</option>
                <option>Teacher</option>
                <option>Training Professional</option>
                <option>Parent</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can we help?"
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-85"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
