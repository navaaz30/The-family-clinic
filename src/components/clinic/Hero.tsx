import { Button } from "@/components/ui/button";
import { Phone, Star, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { toast } from "sonner";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [date, setDate] = useState("");   

  const handleBooking = async () => {
  if (!name || !phone || !date) {
    toast.error("Please fill all fields ⚠️");
    return;
  }
  if (phone.length !== 10) {
  toast.error("Enter valid phone number");
  return;
}

  const { error } = await supabase.from("appointments").insert([
    {
      name,
      phone,
      date,
    },
  ]);

  if (error) {
    console.error(error);
    toast.error("Booking failed ❌");
  } else {
   toast.success("Booking saved ✅. We will contact you shortly.");

// close form
setShowForm(false);

// clear form
setName("");
setPhone("");
setDate("");
  }
};

  return (
    <>
      <section
        id="top"
        className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-gradient-hero"
      >
        {/* decorative blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-float" aria-hidden />
        <div className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl" aria-hidden />

        <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/70 backdrop-blur text-xs uppercase tracking-[0.2em] text-primary border border-accent/30 shadow-soft">
              <span className="size-1.5 rounded-full bg-accent" /> Bhopal · Indrapuri
            </span>

            <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-primary text-balance">
              Reveal your most
              <span className="block italic text-primary-glow">radiant self.</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              The Family Skin, Hair & Laser Clinic offers painless PRP, advanced laser
              treatments, permanent skin whitening and aesthetic care — guided by experienced
              doctors and a warm, professional team.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* ✅ FIXED BUTTON */}
              <Button onClick={() => setShowForm(true)} variant="hero" size="lg">
                <Phone className="size-4" /> Book a Consultation
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="#services">Explore Treatments</a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-primary">4.9</span>
                <span className="text-muted-foreground">· 52 Google reviews</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4 text-accent" /> Sector B, Indrapuri
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute inset-0 -m-6 bg-gradient-rose opacity-30 blur-2xl rounded-[3rem]" aria-hidden />
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant ring-1 ring-accent/20">
              <img
                src={heroImg}
                alt="Modern interior of The Family Skin Hair & Laser Clinic in Bhopal"
                width={1600}
                height={1100}
                className="w-full h-[460px] lg:h-[580px] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-10 bg-background rounded-2xl shadow-elegant p-5 max-w-[230px] border border-border/60 animate-float">
              <div className="text-4xl font-serif text-primary leading-none">10+</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                years of trusted skin & hair care
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ POPUP FIXED (INSIDE RETURN) */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-80">
            <h2 className="text-xl font-bold mb-4">Book Appointment</h2>

            <input
            placeholder="Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full mb-3 p-2 border rounded"
/>

<input
  placeholder="Phone"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full mb-3 p-2 border rounded"
/>

<input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  className="w-full mb-3 p-2 border rounded"
/>

            {/* ✅ CONNECTED BUTTON */}
            <button
              onClick={handleBooking}
              className="w-full bg-primary text-white p-2 rounded"
            >
              Submit
            </button>

            <button
              className="mt-2 bg-primary text-white p-2 rounded"
              onClick={() => setShowForm(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;