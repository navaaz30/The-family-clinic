import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import hairImg from "@/assets/hair-care.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-plum text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-accent/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-primary-glow/30 blur-3xl" aria-hidden />

      <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">Visit Us</span>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-balance">
            Begin your journey to confident, glowing skin.
          </h2>
          <p className="mt-5 text-primary-foreground/80 text-lg max-w-lg">
            Book a consultation today — our team will guide you through a personalised
            treatment plan tailored to your needs.
          </p>

          <div className="mt-10 space-y-6">
            <a href="tel:+916269953725" className="flex items-start gap-4 group">
              <div className="size-12 rounded-xl bg-primary-foreground/10 backdrop-blur flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-smooth">
                <Phone className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Call us</div>
                <div className="font-serif text-2xl mt-1">62699 53725</div>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="size-12 rounded-xl bg-primary-foreground/10 backdrop-blur flex items-center justify-center">
                <MapPin className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Address</div>
                <div className="mt-1 leading-relaxed">
                  Next to Sapna Parlour, Sharma Computer Academy,<br />
                  Ajanta Complex, Sector B, Indrapuri,<br />
                  Bhopal, Madhya Pradesh 462022
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="size-12 rounded-xl bg-primary-foreground/10 backdrop-blur flex items-center justify-center">
                <Clock className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Hours</div>
                <div className="mt-1">Open daily · Closes 8:00 PM</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="lg">
              <a href="tel:+916269953725"><Phone className="size-4" /> Call Now</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://maps.google.com/?q=The+Family+Skin+Hair+Laser+Clinic+Indrapuri+Bhopal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="size-4" /> Get Directions
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -m-4 bg-accent/20 blur-2xl rounded-[3rem]" aria-hidden />
          <img
            src={hairImg}
            alt="Premium hair care serum representing trusted hair treatments"
            width={1200}
            height={1200}
            loading="lazy"
            className="relative rounded-[2rem] shadow-elegant w-full object-cover h-[480px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
