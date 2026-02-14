import ParticleField from "@/components/ParticleField";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 bg-background">
        <ParticleField />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-gradient-primary">About</span>
        </h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p>
            Beowulf Audio is an audio software company started in 2025 by <a href="https://github.com/josephvolmer" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-primary transition-colors">JBV</a>.
          </p>
          <p>
            Building tools for musicians, producers, and sound designers. 
            Everything is crafted with care, from the DSP to the interface, with a 
            focus on usability and creative expression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
