import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Audio waveform visualization"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm font-mono tracking-[0.3em] uppercase text-muted-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Audio Development Studio
        </p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="text-gradient-primary">Beowulf</span>
          <br />
          <span className="text-foreground">Audio</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Free, powerful audio plugins for producers and engineers. VST3, AU, and standalone tools built with precision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#products"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all glow-primary"
          >
            Explore Plugins
          </a>
          <a
            href="https://beowulfaudio.gumroad.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-glow text-foreground font-semibold hover:bg-secondary transition-all"
          >
            Visit Gumroad →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-glow">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary/50" />
      </div>
    </section>
  );
};

export default Hero;
