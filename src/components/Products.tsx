import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
// Product data is machine-managed: the beowulf-audio/release pipeline upserts
// entries (and thumbnails under public/products/) on every tagged release.
// Hand-edits are fine too — the pipeline only touches its own product's entry.
import productsData from "@/data/products.json";

type Category = "MIDI" | "Effects" | "Instruments" | "Utilities";

type Product = {
  key: string;
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

const products = productsData as Product[];


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
