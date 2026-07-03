import { useState } from "react";
import oculoThumb from "@/assets/oculo-thumb.jpg";
import lumenThumb from "@/assets/lumen-thumb.png";
import poleFilterThumb from "@/assets/store-thumb-2.jpg";
import skaldThumb from "@/assets/skald-thumb.png";
import voceThumb from "@/assets/voce-thumb.png";
import romplerThumb from "@/assets/rompler-thumb.png";
import lensThumb from "@/assets/lens-thumb.png";
import driftwoodThumb from "@/assets/driftwood-thumb.png";
import ambientgenThumb from "@/assets/ambientgen-thumb.png";
import stemmyThumb from "@/assets/stemmy-thumb.png";
import keymasterThumb from "@/assets/keymaster-thumb.png";
import tracksetThumb from "@/assets/trackset-thumb.png";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "MIDI" | "Effects" | "Instruments" | "Utilities";

type Product = {
  name: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  price: string;
  source: "gumroad" | "github";
  category: Category;
  installCmd?: string;
};

const CATEGORIES: readonly ("All" | Category)[] = [
  "All",
  "MIDI",
  "Effects",
  "Instruments",
  "Utilities",
] as const;

const products: Product[] = [
  {
    name: "Lumen",
    description:
      "A LUFS loudness meter that helps you land your track on a target level. Pick a preset (Spotify, Apple Music, YouTube, EBU R128, CD, vinyl, club), play the track through, and watch the target ring lock green when you hit the mark. Full EBU R128 metering: integrated, momentary and short-term loudness, loudness range, and true peak with latching over-lamps, plus a scrolling loudness history. Bit-identical passthrough, it never touches your audio. VST3/AU/Standalone, built with JUCE.",
    image: lumenThumb,
    tags: ["Meter", "LUFS", "Mastering", "VST3", "AU"],
    url: "https://beowulfaudio.gumroad.com/l/lumen",
    price: "Free",
    source: "gumroad",
    category: "Utilities",
  },
  {
    name: "Oculo",
    description:
      "Professional multi-mode audio analyzer plugin featuring 12+ visualization modes: spectrogram, oscilloscope, vectorscope, phase correlation, spectrum analyzer, stereo balance, dynamic range, loudness histogram & more. VST3/AU/Standalone. Built with JUCE. Essential tool for mixing, mastering and vibing.",
    image: oculoThumb,
    tags: ["Analyzer", "VST3", "AU"],
    url: "https://beowulfaudio.gumroad.com/l/oculo",
    price: "Free",
    source: "gumroad",
    category: "Utilities",
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
    category: "Effects",
  },
  {
    name: "Driftwood",
    description:
      "A lo-fi cassette and VHS modulation effect. A random-staircase-modulated bucket-brigade delay creates a drunken pitch warble, shaped by an envelope-driven low-pass gate that opens as you play harder. Add tape aging — wow & flutter, dropouts, head bump, and hiss — for worn-cassette character. Four built-in visualizers (spectrogram, oscilloscope, vectorscope, scrolling waveform) you can click to cycle. VST3/AU/Standalone, built with JUCE.",
    image: driftwoodThumb,
    tags: ["Modulation", "Lo-fi", "Tape", "VST3", "AU"],
    url: "https://beowulfaudio.gumroad.com/l/driftwood",
    price: "Free",
    source: "gumroad",
    category: "Effects",
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
    category: "MIDI",
  },
  {
    name: "Voce",
    description:
      "A diatonic MIDI chord generator built around the Nashville Number System. Seven scale-degree buttons (I–VII) trigger in-key chords in any of 16 scales and all 12 keys. Features root/1st/2nd inversions, host-synced gate timing from 1/64 to 8 bars, latch mode, and full parameter automation.",
    image: voceThumb,
    tags: ["MIDI", "Generator", "VST3", "AU"],
    url: "https://beowulfaudio.gumroad.com/l/voce",
    price: "Free",
    source: "gumroad",
    category: "MIDI",
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
    category: "Instruments",
  },
  {
    name: "Lens",
    description:
      "A camera-driven polyphonic subtractive synthesizer with hand-gesture control. macOS only. Your webcam becomes a second performer — brightness, motion, color, and where you are in frame shape the cutoff, drive, chorus, and stereo image. Pinch your fingers to narrow the sound; open your palm to bloom it. 25 factory presets across 6 banks, save your own. Powered by Apple's Vision framework.",
    image: lensThumb,
    tags: ["Synth", "Camera", "Gestures", "VST3", "AU", "macOS only"],
    url: "https://beowulfaudio.gumroad.com/l/lens",
    price: "Paid",
    source: "gumroad",
    category: "Instruments",
  },
  {
    name: "Stemmy",
    description:
      "AI audio stem separator standalone app for macOS. Drop any song and get isolated vocals, drums, bass, guitar, piano, and more — powered by Demucs with Metal GPU acceleration. Built-in multitrack mixer with per-channel EQ, pan, solo, mute. 100% offline, no account, no subscription. Universal binary — Apple Silicon and Intel.",
    image: stemmyThumb,
    tags: ["Stem Separator", "AI", "macOS", "Standalone"],
    url: "https://beowulfaudio.gumroad.com/l/stemmy",
    price: "Paid",
    source: "gumroad",
    category: "Utilities",
  },
  {
    name: "Keymaster",
    description:
      "Open-source DJ tool for analyzing audio libraries. Drop a folder of MP3/WAV/FLAC and get BPM, musical key (Camelot), energy 1–10, ReplayGain, and structurally-aware hot cue points placed at drops, breakdowns, and builds. Camelot wheel for harmonic mixing, multi-column filters, and tag/rename writeback to ID3, Vorbis, and MP4. Built on Essentia. macOS + Linux.",
    image: keymasterThumb,
    tags: ["DJ", "BPM", "Key Detection", "macOS", "Linux", "Standalone"],
    url: "https://beowulfaudio.gumroad.com/l/keymaster",
    price: "Free",
    source: "gumroad",
    category: "Utilities",
  },
  {
    name: "Trackset",
    description:
      "Compile a folder of MP3s into a single long-form MP4 with cover art, slideshow or collage modes, blurred backgrounds, and YouTube chapter markers. Built for full-album YouTube uploads. The render pipeline uses still-image encoding tricks so a 60-minute album finishes in ~15 seconds, not an hour. Bundled ffmpeg, no system install. macOS + Linux.",
    image: tracksetThumb,
    tags: ["Video", "YouTube", "FFmpeg", "macOS", "Linux", "Standalone"],
    url: "https://beowulfaudio.gumroad.com/l/trackset",
    price: "Free",
    source: "gumroad",
    category: "Utilities",
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
    category: "Utilities",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-mono tracking-[0.3em] uppercase text-primary mb-3">
            Plugins & Tools
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Tools
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "text-xs font-mono tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-300",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary glow-primary"
                    : "bg-secondary text-secondary-foreground border-border hover:border-primary/40 hover:text-foreground",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
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
