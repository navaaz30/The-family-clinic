import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/50">
      <nav className="container flex items-center justify-between h-20" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-semibold text-primary leading-none">
            The Family Clinic<span className="text-accent">.</span>
          </span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] text-muted-foreground border-l border-border pl-2 ml-1">
            Skin · Hair · Laser
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <a href="tel:+916269953725">
              <Phone className="size-4" /> Book Now
            </a>
          </Button>
          <button
            className="md:hidden p-2 -mr-2 text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <ul className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-medium text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <a href="tel:+916269953725"><Phone className="size-4" /> Call 062699 53725</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
