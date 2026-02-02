import { Github, Laptop, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-hero)] text-[var(--color-text-primary)] py-10 px-6">

      {/* Bottom - Copyright */}
      <div className="mt-10 max-w-6xl mx-auto flex justify-between flex-wrap gap-3 items-center border-t border-[var(--color-border)] pt-6 text-center text-sm text-[var(--color-text-muted)]">
      <h1 className="flex items-center gap-2 text-[var(--color-accent)] font-bold text-2xl lg:text-3xl cursor-pointer">
          <Laptop className="w-8 h-10" />
          Hammad Arshad
        </h1>
        © {new Date().getFullYear()} Hammad Arshad. All Rights Reserved.
        {/* Right - Social */}
        <div className="flex justify-center md:justify-end space-x-6">
          <a
            href="https://github.com/hammadArshad0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)] transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/hammadarshad48"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)] transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:hammadarshad481@gmail.com"
            className="hover:text-[var(--color-accent)] transition"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
