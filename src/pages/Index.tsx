import { useEffect } from "react";
import Navbar from "@/components/clinic/Navbar";
import Hero from "@/components/clinic/Hero";
import Services from "@/components/clinic/Services";
import About from "@/components/clinic/About";
import Testimonials from "@/components/clinic/Testimonials";
import Contact from "@/components/clinic/Contact";
import Footer from "@/components/clinic/Footer";
import { supabase } from "@/lib/supabase";

const Index = () => {
  useEffect(() => {
    document.title = "The Family Skin, Hair & Laser Clinic | Bhopal";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Painless PRP, laser hair removal, permanent skin whitening & advanced aesthetic treatments in Bhopal. Rated 4.9★ by 52+ patients."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");

    // JSON-LD MedicalBusiness
    const ldId = "ld-clinic";
    let ld = document.getElementById(ldId);
    if (!ld) {
      ld = document.createElement("script");
      ld.id = ldId;
      (ld as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "The Family Skin, Hair & Laser Clinic",
      image: window.location.origin + "/favicon.ico",
      telephone: "+91-6269953725",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Next to Sapna Parlour, Sharma Computer Academy, Ajanta Complex, Sector B, Indrapuri",
        addressLocality: "Bhopal",
        addressRegion: "MP",
        postalCode: "462022",
        addressCountry: "IN",
      },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "52" },
      openingHours: "Mo-Su 10:00-20:00",
    });
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
