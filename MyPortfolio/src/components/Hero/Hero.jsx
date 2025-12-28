import "./Hero.css";

import ScrollReveal from "../ScrollReveal/ScrollReveal";

export default function Hero() {
  return (
    <section className="d-flex align-items-center justify-content-center vh-100 text-center bg-dark text-white">
      <div>
        <ScrollReveal>
          <h1 className="display-3 fw-bold mb-3">Hey, I'm Sreenath 👋</h1>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="lead mb-4 px-2">
            I am passionate about solving real-world problems through tech
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <a href="#projects" className="btn primary btn-lg">
            View My Work
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
