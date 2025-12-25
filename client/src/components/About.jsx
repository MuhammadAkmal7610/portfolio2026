import React from "react";

const About = () => {
  return (
    <section className="about-section col-xxl-8 px-4 py-5" id="about">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        {/* IMAGE */}
        <div className="col-10 col-sm-8 col-lg-6 text-center">
          <img
            src="https://camo.githubusercontent.com/88adc7c88c9d3dba7479020846ed35d13410e3707c7f149e1c6140cc6beaef9a/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966"
            className="img-fluid rounded-3 shadow-sm"
            alt="Muhammad Akmal - Web Developer"
            loading="lazy"
          />
        </div>

        {/* CONTENT */}
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-4">About Me</h1>

          <p className="lead mb-3">
            I'm <strong>Muhammad Akmal</strong>, a professional web developer
            based in <strong>Lahore, Pakistan</strong>. I hold a
            <strong> Master of Computer Science (MCS)</strong> from
            <strong> Islamia University, BWP</strong> (2022) and focus on
            delivering polished, maintainable web applications.
          </p>

          <p className="mb-3">
            I build secure, high-performance applications using modern
            technologies including <strong>MERN</strong> (MongoDB, Express,
            React, Node), <strong>Next.js</strong>, <strong>TypeScript</strong>,
            and <strong>Tailwind CSS</strong>. I've contributed to enterprise
            solutions such as ERP systems and interactive dashboards.
          </p>

          <ul className="list-inline mb-3">
            <li className="list-inline-item badge bg-secondary me-2">React</li>
            <li className="list-inline-item badge bg-secondary me-2">Node.js</li>
            <li className="list-inline-item badge bg-secondary me-2">TypeScript</li>
            <li className="list-inline-item badge bg-secondary me-2">MongoDB</li>
            <li className="list-inline-item badge bg-secondary me-2">Next.js</li>
          </ul>

          <p className="mb-0">
            I'm open to collaboration and opportunities. If you'd like to
            discuss a project or role, please reach out via the contact
            section below.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
