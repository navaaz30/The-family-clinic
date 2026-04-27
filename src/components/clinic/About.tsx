import { Award, ShieldCheck, Users } from "lucide-react";
import skinImg from "@/assets/glow-skin.jpg";
import laserImg from "@/assets/laser-treatment.jpg";

const features = [
  { icon: Award, label: "Experienced doctors", desc: "Years of clinical expertise across dermatology & aesthetics." },
  { icon: ShieldCheck, label: "Painless protocols", desc: "Advanced techniques designed around your comfort." },
  { icon: Users, label: "Caring, trained staff", desc: "Warm, professional team rated 4.9 by our patients." },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={skinImg}
              alt="Skincare serums and rose petals representing premium dermatology care"
              width={1200}
              height={1200}
              loading="lazy"
              className="rounded-2xl shadow-soft object-cover h-72 w-full"
            />
            <img
              src={laserImg}
              alt="Dermatologist holding a laser skincare device"
              width={1200}
              height={1200}
              loading="lazy"
              className="rounded-2xl shadow-soft object-cover h-72 w-full mt-10"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 bg-primary text-primary-foreground rounded-2xl p-6 shadow-elegant max-w-[220px]">
            <div className="font-serif text-3xl">52+</div>
            <div className="text-xs uppercase tracking-widest mt-1 opacity-80">5-star Google reviews</div>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">About the Clinic</span>
          <h2 className="mt-4 text-4xl lg:text-5xl text-primary text-balance">
            Trusted skin, hair &amp; laser experts in Bhopal.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            At The Family Skin, Hair &amp; Laser Clinic, we combine medical precision with
            a warm, family-style care experience. Whether you're addressing hair loss,
            pigmentation, or simply seeking a refreshed glow — we craft treatments around
            your unique needs.
          </p>

          <ul className="mt-10 space-y-6">
            {features.map((f) => (
              <li key={f.label} className="flex gap-4">
                <div className="shrink-0 size-12 rounded-xl bg-background border border-accent/30 flex items-center justify-center text-accent shadow-soft">
                  <f.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary">{f.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
