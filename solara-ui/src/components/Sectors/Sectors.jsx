import "./Sectors.css";
import { useEffect, useState } from "react";
import { FaShieldAlt, FaHeartbeat, FaCloud, FaSun } from "react-icons/fa";
import { Sun } from "lucide-react";

function Sectors() {
  const [active, setActive] = useState(0);

  const sections = [
    {
      icon: <FaShieldAlt size={34} />,
      title: "Defence",
      leftTitle: "Autonomous & Unmanned Systems",
      rightTitle: "AI Enabled Defence Infrastructure",
      leftItems: [
        "Drone Swarms",
        "Loitering Munitions",
        "AI Battlefield Surveillance",
        "Anti-Drone Systems",
      ],
      rightItems: [
        "Radar & Sensor Fusion",
        "Signal Intelligence",
        "Edge Computing for Battlefield",
      ],
      bottomTitle: "Space & Secure Communication",

      bottomItems: [
        "Small Payload Tech",
        "Space Situational Awareness",
        "Secure Communication Systems",
      ],
    },

    {
      icon: <FaHeartbeat size={34} />,
      title: "Health",
      leftTitle: "Digital Health & Diagnostics",
      rightTitle: "Medical Devices & Biotech",
      leftItems: [
        "AI-Powered Diagnostics",
        "Remote Patient Monitoring",
        "Genomics & Precision Medicine",
      ],
      rightItems: [
        "Wearable Health Sensors",
        "Drug Discovery Platforms",
        "Surgical Robotics",
      ],
    },

    {
      icon: <FaCloud size={34} />,
      title: "Climate",
      leftTitle: "Clean Energy & Storage",
      rightTitle: "Carbon & Sustainability",
      leftItems: [
        "Next-Gen Solar Tech",
        "Grid-Scale Energy Storage",
        "Green Hydrogen Production",
      ],
      rightItems: [
        "Carbon Capture Systems",
        "Sustainable Materials",
        "Climate Intelligence Platforms",
      ],
    },
  ];

  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling) return;

      isScrolling = true;

      setTimeout(() => {
        isScrolling = false;
      }, 800);

      if (e.deltaY > 0) {
        setActive((prev) => (prev < sections.length - 1 ? prev + 1 : prev));
      } else {
        setActive((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="sectors-section min-h-screen bg-[#161C57] text-white px-20 py-24 pt-36 pb-24 section-container">
      <h1
        style={{ paddingTop: "50px" }}
        className="sectors-heading text-[34px] font-semibold mb-24"
      >
        Sectors in Focus
      </h1>

      <div className="sectors-wrapper flex min-h-screen">
        <div
          style={{ marginTop: "45px" }}
          className="sectors-sidebar w-[20%] border-r border-[#3a3785] pr-16"
        >
          {sections.map((item, index) => (
            <div
              key={index}
              style={{ marginBottom: "58px" }}
              className={`sector-tab flex items-center gap-8 mb-36 transition-all duration-700 ${
                active === index
                  ? "text-orange-500 opacity-100 scale-105"
                  : "text-[#6664a7] opacity-40 scale-100"
              }`}
            >
              <div className="sector-tab-icon">
  {item.icon}
</div>

              <h2 className="sector-tab-title text-[25px]  font-light">{item.title}</h2>
            </div>
          ))}
        </div>

        <div
          style={{ marginLeft: "70px" }}
          className="sectors-content w-[60%] pl-20 overflow-hidden h-[700px] relative"
        >
          <div
            className="sectors-slider absolute w-full transition-transform duration-700"
            style={{
              transform: `translateY(-${active * 700}px)`,
            }}
          >
            {sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="sector-slide grid grid-cols-2 gap-20 h-[700px] relative"
                style={{ columnGap: "150px" }}
              >
                <div className="sector-left-column">
                  <h3
                    style={{ marginTop: "85px", marginBottom: "22px" }}
                    className="sector-category-title text-[#9BACD8] text-[24px] font-[500] mb-10 leading-tight"
                  >
                    {section.leftTitle}
                  </h3>

                  <div className="space-y-0">
                    {section.leftItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-5"
                        style={{ marginBottom: "22px" }}
                      >
                        <Sun
                          size={22}
                          className="text-orange-500 flex-shrink-0 "
                        />

                        <p
                          style={{ margin: 0 }}
                          className="text-[18px] leading-none whitespace-nowrap"
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sector-left-column">
                  <h3
                    style={{ marginTop: "85px", marginBottom: "22px" }}
                    className="sector-category-title text-[#9BACD8] text-[24px] font-[500] mb-10 leading-tight"
                  >
                    {section.rightTitle}
                  </h3>

                  <div className="sector-items-list space-y-0">
                    {section.rightItems.map((item, index) => (
                      <div
                        key={index}
                        className="sector-item flex items-center gap-5"
                        style={{ marginBottom: "22px" }}
                      >
                        <Sun
                          size={22}
                          className="sector-item-icon text-orange-500  flex-shrink-0"
                        />

                        <p
                          style={{ margin: 0 }}
                          className="sector-item-text text-[18px] leading-none whitespace-nowrap"
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectors;
