import { Sparkles, Sun, Scissors, Zap, Droplet, HeartPulse, Syringe, Smile } from "lucide-react";

const services = [
  {
    icon: Droplet,
    title: "Painless PRP Therapy",
    desc: "Advanced PRP for hair, head & face — natural regrowth with minimal discomfort.",
  },
  {
    icon: Sparkles,
    title: "Permanent Skin Whitening",
    desc: "Tailored brightening protocols for an even, luminous complexion that lasts.",
  },
  {
    icon: Zap,
    title: "Laser Hair Removal",
    desc: "Smooth, hair-free skin with safe, FDA-approved laser systems.",
  },
  {
    icon: Sun,
    title: "Laser Skin Therapy",
    desc: "Pigmentation, scars and texture — corrected with precision lasers.",
  },
  {
    icon: Scissors,
    title: "Hair Transplants",
    desc: "Natural-looking density restoration by experienced surgeons.",
  },
  {
    icon: Syringe,
    title: "Dermal Fillers & HIFU",
    desc: "Subtle volume, lift and contour with fillers and HIFU face lift.",
  },
  {
    icon: HeartPulse,
    title: "Anti-Aging Solutions",
    desc: "Mesotherapy, deep peels and skin tightening for timeless beauty.",
  },
  {
    icon: Smile,
    title: "Aesthetic Procedures",
    desc: "Dimple creation, dermal surgery and personalised aesthetic care.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">Our Treatments</span>
          <h2 className="mt-4 text-4xl lg:text-5xl text-primary text-balance">
            Specialised care for skin, hair &amp; aesthetic wellness.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From painless PRP to advanced laser therapies — every treatment is personalised
            to your skin, your goals, and your comfort.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative p-7 rounded-2xl bg-card border border-border/60 hover:border-accent/50 hover:shadow-elegant transition-smooth overflow-hidden"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-soft opacity-0 group-hover:opacity-100 transition-smooth" aria-hidden />
              <div className="relative">
                <div className="size-12 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-gradient-rose group-hover:text-primary-foreground transition-smooth">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-serif font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground text-center">
          Also offering: CoolSculpting · Microdermabrasion · Facials · Mesotherapy · Dermatologic surgery &amp; more
        </p>
      </div>
    </section>
  );
};

export default Services;
