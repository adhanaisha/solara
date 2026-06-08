import { useState } from "react";
import "./Footer.css";
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitted(true);
  };
  return (
    <section
      id="contact"
      className="footer-section bg-[#0b0750] px-24 py-16 text-white"
      style={{
        paddingLeft: "120px",
        paddingRight: "120px",
      }}
    >
      <h1
        style={{ marginBottom: "15px" }}
        className="footer-heading text-[45px] font-[600] text-center mb-16"
      >
        Let's start a Conversation
      </h1>

      <form className="footer-form max-w-[1500px] mx-auto" onSubmit={handleSubmit}>
        <div
          style={{ marginTop: "25px" }}
          className="footer-grid grid grid-cols-2 gap-x-16 gap-y-10 mb-10"
        >
          <div>
            <label className="footer-label text-[17px] font-[600] block mb-3">
              First Name
            </label>
            <input
              type="text"
              required
              pattern="[A-Za-z ]+"
              title="First Name should contain only alphabets"
              className="footer-input w-full bg-transparent border-b border-[#b8c2ff] outline-none text-[17px] pb-2"
            />
          </div>

          <div>
            <label className="footer-label text-[17px] font-[600]  block mb-3">
              Last Name
            </label>
            <input
              type="text"
              required
              pattern="[A-Za-z ]+"
              title="Last Name should contain only alphabets"
              className="footer-input w-full bg-transparent border-b border-[#b8c2ff] outline-none text-[17px] pb-2"
            />
          </div>

          <div>
            <label className="footer-label text-[17px] font-semibold block mb-3">
              Contact Number
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit phone number"
              className="footer-input w-full bg-transparent border-b border-[#b8c2ff] outline-none text-[17px] pb-2"
            />
          </div>

          <div>
            <label className="footer-label text-[17px] font-[600] block mb-3">Email</label>
            <input
              type="email"
              required
              className="footer-input w-full bg-transparent border-b border-[#b8c2ff] outline-none text-[17px] pb-2"
            />
          </div>
        </div>

        <div style={{ marginTop: "30px" }} className="purpose-container mb-10">
          <label className="footer-label purpose-label text-[17px] font-[600]  block mb-3">
            Purpose of contact
          </label>
          <div className="relative">
            <select
              required
              defaultValue=""
              className="footer-select w-full bg-[#0b0750] border-b border-[#b8c2ff] outline-none text-[17px] pb-2 text-white appearance-none cursor-pointer"
            >
              <option value="" disabled hidden></option>
              <option className="text-white">Investor</option>
              <option className="text-white">Mentor</option>
              <option className="text-white">Startup</option>
            </select>
            <span className="dropdown-icon absolute right-3 top-1 text-white text-[14px] pointer-events-none">
              ˅
            </span>
          </div>
        </div>

        <div style={{ marginTop: "30px" }} className="mb-10">
          <label className="text-[17px] font-semibold block mb-3">
            Subject
          </label>
          <input
            type="text"
            required
            minLength="5"
            className="footer-input w-full bg-transparent border-b border-[#b8c2ff] outline-none text-[17px] pb-2"
          />
        </div>

        <div style={{ marginTop: "30px" }} className="mb-12">
          <label className="text-[17px] font-semibold block mb-3">
            Message
          </label>
          <textarea
            required
            minLength="10"
            rows="4"
            className="footer-textarea w-full h-[50px] bg-transparent border-b border-[#b8c2ff] outline-none text-[17px] resize-none"
          ></textarea>
        </div>

        <div
          style={{ marginTop: "70px", paddingBottom: "12px" }}
          className="flex justify-center footer-btn-container"
        >
          <button
            type="submit"
            className="footer-btn bg-[#F98613] hover:hover:-translate-y-1 transition-all duration-300 text-white text-[25px] font-[600] w-[190px] h-[42px] rounded-[64px]"
          >
             {submitted ? "Submitted" : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
