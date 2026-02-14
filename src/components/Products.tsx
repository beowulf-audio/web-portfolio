import oculoThumb from "@/assets/oculo-thumb.jpg";
import poleFilterThumb from "@/assets/polefilter-thumb.jpg";
import skaldThumb from "@/assets/skald-thumb.jpg";
import { ExternalLink } from "lucide-react";

const products = [
  {
    name: "Oculo",
    description:
      "Professional multi-mode audio analyzer with 12+ visualization modes: spectrogram, oscilloscope, vectorscope, phase correlation, spectrum analyzer, stereo balance, dynamic range, loudness histogram & more.",
    image: oculoThumb,
    tags: ["Analyzer", "VST3", "AU", "Standalone"],
    url: "https://beowulfaudio.gumroad.com/l/oculo",
    price: "Free",
  },
  {
    name: "Pole Filter",
    description:
      "Sculpt your sound with precision pole-based filtering. A versatile filter plugin designed for creative sound design and mixing applications.",
    image: poleFilterThumb,
    tags: ["Filter", "VST3", "AU"],
    url: "https://beowulfaudio.gumroad.com/",
    price: "Free",
  },
  {
    name: "Skald Midi Generator",
    description:
      "Generate MIDI patterns and melodies with an intuitive, creative approach. Perfect for sparking new ideas and breaking out of compositional ruts.",
    image: skaldThumb,
    tags: ["MIDI", "Generator", "VST3"],
    url: "https://beowulfaudio.gumroad.com/",
    price: "Free",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-mono tracking-[0.3em] uppercase text-primary mb-3">
            Plugins
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden bg-gradient-card border border-border hover:border-glow transition-all duration-300 hover:glow-primary"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-gradient-primary transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {product.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
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
                  Get on Gumroad <ExternalLink className="w-3.5 h-3.5" />
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
