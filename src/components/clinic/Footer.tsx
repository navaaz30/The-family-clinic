const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-12 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div>
          <div className="font-serif text-xl text-primary">
            The Family Skin, Hair &amp; Laser Clinic
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Indrapuri, Bhopal · MP 462022
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} The Family Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
