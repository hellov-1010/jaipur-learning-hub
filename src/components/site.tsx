import { Link } from "@tanstack/react-router";

export const CENTER = {
  name: "Badddie Education Center",
  tagline: "Learn for Free. Grow Without Limits.",
  address: "Tonk Road, Jaipur, Rajasthan",
  timing: "Open Daily: 9:00 AM – 8:00 PM",
  email: "abcd@gmail.com",
  phone: "87223 456910",
  phoneRaw: "+9187223456910",
  helpline: "1800-123-4567",
};

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-lg font-black text-primary-foreground">
            B
          </span>
          <span className="text-lg font-bold tracking-tight">{CENTER.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground">
            Home
          </Link>
          <Link to="/courses" className="text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground">
            Courses
          </Link>
          <Link to="/dashboard" className="text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground">
            Dashboard
          </Link>
          <Link to="/contact" className="text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground">
            Contact
          </Link>
        </nav>
        <a
          href={`tel:${CENTER.phoneRaw}`}
          className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85 sm:inline-flex"
        >
          Call Now
        </a>
        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <details className="relative md:hidden">
      <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-lg border border-border text-lg">
        ☰
      </summary>
      <nav className="absolute right-0 top-12 flex w-48 flex-col rounded-xl border border-border bg-card p-2 shadow-lg">
        {[
          { to: "/", label: "Home" },
          { to: "/courses", label: "Courses" },
          { to: "/dashboard", label: "Dashboard" },
          { to: "/contact", label: "Contact" },
        ].map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
          >
            {l.label}
          </Link>
        ))}
        <a
          href={`tel:${CENTER.phoneRaw}`}
          className="mt-1 rounded-lg bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
        >
          Call Now
        </a>
      </nav>
    </details>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground text-lg font-black text-primary">
              B
            </span>
            <span className="text-lg font-bold">{CENTER.name}</span>
          </div>
          <p className="mt-4 text-sm opacity-70">
            Free quality education for students, teachers, and training professionals on Tonk Road, Jaipur.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li><Link to="/courses" className="hover:underline">Free Courses</Link></li>
            <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Offline Center</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>{CENTER.address}</li>
            <li>{CENTER.timing}</li>
            <li>
              <a href={`mailto:${CENTER.email}`} className="hover:underline">{CENTER.email}</a>
            </li>
            <li>
              <a href={`tel:${CENTER.phoneRaw}`} className="hover:underline">{CENTER.phone}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">24/7 Student Helpline</h3>
          <p className="mt-4 text-sm opacity-80">
            Doubts &amp; queries anytime — day or night.
          </p>
          <a
            href={`tel:${CENTER.helpline.replace(/[^0-9]/g, "")}`}
            className="mt-3 inline-block rounded-lg bg-primary-foreground px-4 py-2 text-sm font-bold text-primary"
          >
            {CENTER.helpline} (Toll Free)
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} {CENTER.name}. All rights reserved.
      </div>
    </footer>
  );
}
