import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-lg font-bold text-foreground">Beowulf Audio</p>
          <p className="text-sm text-muted-foreground">Free audio plugins, built with precision.</p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/beowulf-audio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
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
    </footer>
  );
};

export default Footer;
