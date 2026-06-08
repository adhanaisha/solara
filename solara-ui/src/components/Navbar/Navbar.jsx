import "./Navbar.css";
import { useState } from "react";
import logo from "../../assets/SolarLogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleApplyNow = () => {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSeF3QuVIYx1O0z7Dd16M1QtnCCtPMl5gc-DLsFodkmukPucRQ/viewform",
    "_blank"
  );
};
  return (
    <nav className="navbar w-full absolute top-6 left-0 z-50 px-8 py-6 navbar">
      <div className="navbar-container flex items-center justify-between  w-full max-w-[1400px] mx-auto">
        <div className="navbar-logo translate-x-[60px] navbar-logo">
          <img
            src={logo}
            alt="logo"
            className="navbar-logo-img w-[130px] object-contain navbar-logo-img"
          />
        </div>

        <div className="navbar-menu hidden md:flex items-center justify-center gap-10 w-[650px] bg-[#211f5c]/80 border border-[#4a478b] h-[38px] rounded-full backdrop-blur-md">
          <a
            href="#"
            className="text-white text-[16px] font-[500] hover:text-orange-400 transition navbar-link"
          >
            Sectors
          </a>

          <a
            href="#"
            className="text-white text-[16px] font-[500] hover:text-orange-400 transition navbar-link"
          >
            Process
          </a>

          <a
            href="#"
            className="text-white text-[16px] font-[500] hover:text-orange-400 transition navbar-link"
          >
            Benefits
          </a>

          <a
            href="#"
            className="text-white text-[16px] font-[500] hover:text-orange-400 transition navbar-link"
          >
            Mentors & Partners
          </a>

          <a
            href="#contact"
            className="text-white text-[16px] font-[500] hover:text-orange-400 transition navbar-link"
          >
            Contact Us
          </a>
        </div>

        <button onClick={handleApplyNow} className="navbar-btn translate-x-[-70px] bg-[#211f5c]/80 border border-[#4a478b] w-[145px] h-[44px] rounded-full text-white flex items-center gap-3 hover:bg-[#2f2b7a] transition navbar-btn">
          <span className="navbar-btn-text translate-x-[15px] text-[16px] font-[500]  navbar-btn-text ">
            Apply Now
          </span>

          <div className="navbar-btn-icon translate-x-[15px] w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-sm navbar-btn-icon">
            ↗
          </div>
        </button>
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#" className="mobile-link">
            Sectors
          </a>
          <a href="#" className="mobile-link">
            Process
          </a>
          <a href="#" className="mobile-link">
            Benefits
          </a>
          <a href="#" className="mobile-link">
            Mentors & Partners
          </a>
          <a href="#contact" className="mobile-link">
            Contact Us
          </a>

          <button onClick={handleApplyNow} className="mobile-apply-btn">Apply Now</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
