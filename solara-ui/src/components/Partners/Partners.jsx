import "./Partners.css";
import logo1 from "../../assets/logo1.png";
import logo_2 from "../../assets/logo_2.png";
import logo_3 from "../../assets/logo_3.png";
import logo_4 from "../../assets/logo_4.png";
import logo_5 from "../../assets/logo_5.png";
import logo_6 from "../../assets/logo_6.png";
import logo_7 from "../../assets/logo_7.png";
import logo_8 from "../../assets/logo_8.png";
import logo_9 from "../../assets/logo_9.png";
import logo_10 from "../../assets/logo_10.png";
import logo_11 from "../../assets/logo_11.png";
import logo_12 from "../../assets/logo_12.png";
import logo_13 from "../../assets/logo_13.png";
import logo_14 from "../../assets/logo_14.png";

function Partners() {

  const investmentPartners = [
    logo1,
    logo_2,
    logo_3,
    logo_4,
    logo_5,
    logo_6,
    logo_7,
    logo_8
  ];

  const otherPartners = [
    {
      title: "Accelerator Partner",
      image: logo_9,
    },

    {
      title: "Banking Partner",
      image: logo_10,
    },

    {
      title: "Cloud Partner",
      image: logo_14,
    },

    {
      title: "Compliance Partner",
      image: logo_13,
    },

    {
      title: "Outreach Partner",
      image: logo_11,
    },

    {
      title: "Talent Partner",
      image: logo_12,
    },
  ];

  return (
    <section className=" partners-section bg-[#0b0750] px-20 py-20 min-h-[800px] section-container">

      <h1 style={{ paddingTop: "40px" }} className="partners-heading text-white  text-[23px] font-[500] mb-14">
        Investment Partners
      </h1>

      <div style={{ marginTop: "15px" }} className="investment-grid grid grid-cols-4 gap-6  mt-[200px] mb-[200px]">

        {investmentPartners.map((logo, index) => (
          <div
            key={index}
            className="investment-card bg-white rounded-[14px] w-[102%] h-[80px] flex items-center justify-center hover:scale-[1.03] transition-all duration-300"
          >
            <img
              src={logo}
              alt="partner"
              className="investment-logo max-w-[60%] max-h-[50px] object-contain"
            />
          </div>
        ))}

      </div>

      <div style={{ marginTop: "80px" }} className="other-partners-grid  grid grid-cols-4 gap-x-8 gap-y-4 " >

        {otherPartners.map((partner, index) => (
          <div key={index} className="mt-10">

            <h2  className="partner-title text-white  text-[23px] font-[500] mb-2  leading-tight ">
              {partner.title}
            </h2>

            <div style={{ marginTop: "15px" }} className="partner-card bg-white w-[102%] h-[80px]  rounded-[14px] flex items-center justify-center hover:scale-[1.03] transition-all duration-300">

              <img
                src={partner.image}
                alt={partner.title}
                className="max-w-[75%] max-h-[50px] object-contain"
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Partners;