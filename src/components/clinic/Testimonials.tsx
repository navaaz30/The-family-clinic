import { Star, Quote } from "lucide-react";

const reviews = [
  {
    quote: "Service is very good and the staff is very nice and cooperative.",
    name: "Verified Patient",
    source: "Google Review",
  },
  {
    quote: "Best treatment, good results — experienced doctor 👍",
    name: "Verified Patient",
    source: "Google Review",
  },
  {
    quote: "Best clinic, best service and a great environment throughout.",
    name: "Verified Patient",
    source: "Google Review",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">Patient Stories</span>
          <h2 className="mt-4 text-4xl lg:text-5xl text-primary text-balance">
            Loved by 52+ patients across Bhopal.
          </h2>
          <div className="mt-6 inline-flex items-center gap-3">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-current" />)}
            </div>
            <span className="text-2xl font-serif text-primary">4.9</span>
            <span className="text-muted-foreground text-sm">average Google rating</span>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="relative p-8 rounded-2xl bg-gradient-soft border border-border/60 shadow-soft hover:shadow-elegant transition-smooth"
            >
              <Quote className="size-8 text-accent/60" />
              <blockquote className="mt-4 font-serif text-xl leading-snug text-primary text-balance">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/60">
                <div className="text-sm font-semibold text-primary">{r.name}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{r.source}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
