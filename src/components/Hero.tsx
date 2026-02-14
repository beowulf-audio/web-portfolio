import ParticleField from "./ParticleField";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 bg-background">
        <ParticleField />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
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
          Powerful audio software for producers and engineers. VST3, AU, and standalone tools built with precision.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-glow">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary/50" />
      </div>
    </section>
  );
};

export default Hero;
