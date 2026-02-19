import oculoThumb from "@/assets/oculo-thumb.jpg";
import poleFilterThumb from "@/assets/store-thumb-2.jpg";
import skaldThumb from "@/assets/skald-thumb.png";
import romplerThumb from "@/assets/rompler-thumb.png";
import ambientgenThumb from "@/assets/ambientgen-thumb.png";
import { ExternalLink, Github } from "lucide-react";

type Product = {
  name: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  price: string;
  source: "gumroad" | "github";
  installCmd?: string;
};

const products: Product[] = [
  {
    name: "Oculo",
    description:
      "Professional multi-mode audio analyzer plugin featuring 12+ visualization modes: spectrogram, oscilloscope, vectorscope, phase correlation, spectrum analyzer, stereo balance, dynamic range, loudness histogram & more. VST3/AU/Standalone. Built with JUCE. Essential tool for mixing, mastering and vibing.",
    image: oculoThumb,
    tags: ["Analyzer", "VST3", "AU"],
    url: "https://beowulfaudio.gumroad.com/l/oculo",
    price: "Free",
    source: "gumroad",
  },
  {
    name: "Pole",
    description:
      "A sequenced filter effect inspired by German producer Pole, who built his signature minimal-dub sound around a broken Waldorf 4-Pole analog filter. A multimode resonant filter driven by a 16-step sequencer, layered with crackle generation, LFO modulation, and dub effects.",
    image: poleFilterThumb,
    tags: ["Filter", "VST3", "AU"],
    url: "https://beowulfaudio.gumroad.com/l/pole",
    price: "Free",
    source: "gumroad",
  },
  {
    name: "Skald",
    description:
      "A generative MIDI sequencer inspired by Quintron's Drum Buddy and Playtonica's Orbita. Place notes on concentric rings, scratch like vinyl, and explore generative patterns with motor control and probability. Features turntable control, scale & key shaping, velocity & gate time, and reverse playback.",
    image: skaldThumb,
    tags: ["MIDI", "Generator", "VST3"],
    url: "https://beowulfaudio.gumroad.com/l/skald",
    price: "Free",
    source: "gumroad",
  },
  {
    name: "ROM Sampler",
    description:
      "A professional rompler inspired by classic 90s hardware like the Roland JV-1080, E-mu Proteus, and Korg M1. Features 189 sample categories, 3 LFOs, modulation matrix, arpeggiator, and comprehensive effects (chorus, reverb, delay, phaser). Real-time spectrum analyzer and tempo-synced modulation.",
    image: romplerThumb,
    tags: ["Sampler", "Rompler", "VST3", "AU"],
    url: "https://beowulfaudio.gumroad.com/l/rompler",
    price: "Free",
    source: "gumroad",
  },
  {
    name: "ambient-gen",
    description:
      "Create lush, generative ambient music with spacey textures in your terminal. Features Japanese pentatonic scales, five layered instruments, audio effects, multiple soundfonts, and export to MIDI & MP3.",
    installCmd: "pip install ambient-gen",
    image: ambientgenThumb,
    tags: ["Python", "TUI", "Open Source", "MIT"],
    url: "https://github.com/beowulf-audio/ambient-gen-tui",
    price: "Open Source",
    source: "github",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-mono tracking-[0.3em] uppercase text-primary mb-3">
            Plugins & Tools
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden bg-gradient-card border border-border hover:border-glow transition-all duration-300 hover:glow-primary"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black/40 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient-primary transition-colors mb-3">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                {product.installCmd && (
                  <code className="block text-xs font-mono bg-black/50 text-primary px-3 py-2 rounded mb-4 border border-primary/20">
                    $ {product.installCmd}
                  </code>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  {product.source === "github" ? (
                    <>View on GitHub <Github className="w-3.5 h-3.5" /></>
                  ) : (
                    <>Download <ExternalLink className="w-3.5 h-3.5" /></>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
