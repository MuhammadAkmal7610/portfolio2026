import React from "react";

const Hero = () => {
  return (
    <section className="px-4 py-5 my-5 text-center" id="home">
      {/* PROFILE IMAGE */}
      <img
        className="d-block mx-auto mb-4 shadow-sm border"
        src="/profile.PNG"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/profile.PNG";
        }}
        alt="Muhammad Akmal - Full Stack Developer"
        width={130}
        style={{ borderRadius: "50%" }}
        loading="lazy"
      />

      {/* HEADLINE */}
      <h1 className="display-5 fw-bold text-body-emphasis mb-3">
        Hi, I’m <span className="text-primary">Muhammad Akmal</span>
      </h1>

      {/* SUBTITLE */}
      <p className="lead text-body-secondary mb-4">
        Full Stack Web Developer specializing in MERN Stack, Next.js, TypeScript,
        and Tailwind CSS
      </p>

      {/* CTA */}
      <div className="col-lg-7 mx-auto">
        <p className="fs-5 mb-4 text-body-secondary">
          I build scalable, high-performance web applications and enterprise-level
          solutions, including ERP systems and modern dashboards.
        </p>

        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg px-4"
          >
            View Resume
          </a>

          <a
            href="#contact"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
