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
            All software by <span className="text-foreground font-semibold">JBV</span>.
          </p>
          <p>
            Beowulf Audio builds tools for musicians, producers, and sound designers. 
            Everything is crafted with care — from the DSP to the interface — with a 
            focus on usability and creative expression.
          </p>
          <p>
            Built with <span className="text-foreground">JUCE</span>, <span className="text-foreground">C++</span>, and <span className="text-foreground">Python</span>.
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://github.com/beowulf-audio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
          >
            GitHub
          </a>
          <a
            href="https://beowulfaudio.gumroad.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
          >
            Gumroad
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
