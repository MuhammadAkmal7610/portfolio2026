 import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your actual API call if you have backend
      // const response = await axios.post('http://localhost:5000/api/contact', formData);

      // Mock success response
      setTimeout(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
        setTimeout(() => setStatus(""), 4000);
      }, 1000);
    } catch (error) {
      setStatus("An error occurred.");
      setLoading(false);
      setTimeout(() => setStatus(""), 4000);
      console.log(error);
    }
  };

  return (
    <section id="contact" className="px-4 py-5 bg-light">
      <div className="container">
        <div className="row g-lg-5 py-5">
          {/* CONTACT INFO */}
          <div className="col-lg-5 text-center text-lg-start mb-5 mb-lg-0">
            <h1 className="display-5 fw-bold lh-1 mb-3">Contact Me</h1>
            <p className="fs-5 text-body-secondary mb-4">
              I am open to opportunities, freelance projects, or just a friendly chat. 
              Reach out using the form or the contact info below.
            </p>

            <ul className="list-unstyled fs-6">
              <li className="mb-2">
                <strong>Email:</strong> <a href="mailto:muhammadakmalbwn2019@example.com">muhammadakmalbwn2019@example.com</a>
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> <a href="tel:+923039344761">+92 303 9344761</a>
              </li>
              <li className="mb-2">
                <strong>Location:</strong> Lahore, Pakistan
              </li>
              <li className="mb-2">
                <strong>LinkedIn:</strong>{" "}
                <a href="www.linkedin.com/in/muhammad-akmal-kamboh-b2ba72392" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/muhammadakmal
                </a>
              </li>
              <li className="mb-2">
                <strong>GitHub:</strong>{" "}
                <a href="https://github.com/MuhammadAkmal7610" target="_blank" rel="noopener noreferrer">
                  github.com/muhammadakmal
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT FORM */}
          <div className="col-lg-7">
            <form
              onSubmit={handleSubmit}
              className="p-4 p-md-5 border rounded-3 shadow-sm bg-white"
            >
              {status && <p className="text-success">{status}</p>}

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="nameInput">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="emailInput">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="messageInput"
                  name="message"
                  placeholder="Your message"
                  style={{ height: "150px" }}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="messageInput">Message</label>
              </div>

              <button
                disabled={loading}
                className="w-100 btn btn-primary btn-lg"
                type="submit"
              >
                {loading && (
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
