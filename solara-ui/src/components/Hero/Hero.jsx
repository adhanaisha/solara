import "./Hero.css";
import heroBG from "../../assets/heroBG.png";
function Hero() {
    const handleApplyNow = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeF3QuVIYx1O0z7Dd16M1QtnCCtPMl5gc-DLsFodkmukPucRQ/viewform",
      "_blank"
    );
  };

  return (
    <section className="hero-section min-h-screen w-full bg-no-repeat bg-center bg-cover relative overflow-hidden flex justify-center pt-[220px]" style={{ backgroundImage: `url(${heroBG})` }}>


      <div className="hero-content relative z-10 text-center px-4 translate-y-[160px]">

        <h1 className="hero-title text-[80px] gap- md:text-[100px] font-[550] leading-[120px] tracking-[-2px] bg-gradient-to-r from-[#FFFFFF] to-[#F98613] bg-clip-text font-Montserrat translate-y-[35px]">
          SOLARA{" "}
          <span className="hero-title text-orange-500 font-[550] bg-gradient-to-r from-[#FFFFFF] to-[#F98613] bg-clip-text " >
            FOUNDRY
          </span>
        </h1>

    <div className="hero-text-wrappe flex flex-col items-center gap-10">

  <h2 className="hero-subtitle text-[25px] md:text-[52px] font-light tracking-[8px] text-white leading-tight  translate-y-[35px]">
    A FRONTIER ACCELERATOR
  </h2>

  <p className="hero-description text-[28px] text-gray-200 font-light tracking-[3px] translate-y-[20px]">
    $500k funding for cohort startups
  </p>

  <button  onClick={handleApplyNow} className="hero-btn bg-[#201c63]/80 border border-[#4c4796] w-61 h-16 rounded-full text-white inline-flex items-center gap-6 hover:bg-[#2a2575] transition-all duration-300  translate-y-[20px]">

    <span className="hero-btn-text text-[28px] translate-x-[25px] tracking-[2px] font-light">
      Apply Now
    </span>

    <div className="hero-btn-icon w-11 h-11 text-[23px] rounded-full translate-x-[11px] bg-orange-500 flex items-center justify-center font-700 text-s">
      ↗
    </div>

  </button>

</div>

      </div>

    </section>
  );
}

export default Hero;