import "./Process.css";
function Process() {
  const steps = [
    {
      title: "Applications Open",
      date: "14th March",
      desc: "",
      top: false,
    },

    {
      step: "Step 1",
      title: "Apply Online",
      desc: "Submit the application with your startup details and pitch deck.",
      top: true,
    },

    {
      step: "Step 2",
      title: "Initial Review",
      desc: "Our team will review your pitch deck and notify you of the outcome.",
      top: false,
    },

    {
      step: "Step 3",
      title: "First pitch",
      desc: "Shortlisted startups present their pitch and value proposition.",
      top: true,
    },

    {
      step: "Step 4",
      title: "Decision",
      desc: "Final investment decisions are communicated by 8th May.",
      top: false,
    },

    {
      title: "Last Application Date",
      date: "30th April",
      desc: "",
      top: true,
    },
  ];
  
  const dotOffsets = [5, -5, 5, -5, 5, -5];
  return (
    <section className="process-section bg-[#0b0750] text-white px-16 py-24 overflow-hidden">
      <h1
        className="process-heading text-[36px] font-[500] mb-5"
        style={{ transform: "translate(60px, 60px)" }}
      >
        Application Process
      </h1>

      <p
        className="process-subheading text-[#7c8bd6] text-[23px] font-[400] mb-28"
        style={{ transform: "translate(60px,60px)" }}
      >
        Up to $500K in Funding for Cohort Startups
      </p>

      <div
        className=" relative w-full h-[700px]"
        style={{ transform: "translateY(40px)" }}
      >
        <svg
          className="absolute top-[150px] left-0 w-full h-[400px]"
          viewBox="0 0 1800 400"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="processGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#FA8413" />
              <stop offset="50%" stopColor="#F9BC13" />
              <stop offset="100%" stopColor="#FA8413" />
            </linearGradient>
          </defs>
          <path
            d="
              M 105 300
              L 400 80
              L 650 300
              L 1000 80
              L 1280 300
              L 1690 80
            "
            fill="none"
            stroke="url(#processGradient)"
            strokeWidth="1.5"
          />
        </svg>

        <div className="process-container relative flex justify-between">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`process-step w-[260px] flex flex-col items-center text-center absolute ${
                item.top ? "top-0" : "top-[300px]"
              }`}
              style={{
                left: `${index * 18}%`,
              }}
            >
              <div
                className="process-dot w-5 h-5 rounded-full mb-8 z-10"
                style={{
                  background: "linear-gradient(135deg, #FA8413, #F9BC13)",
                  transform:
                    index === 0
                      ? "translate(-54px, 134px)"
                      : index === 1
                        ? "translate(-75px, 224px)"
                        : index === 2
                          ? "translate(-130px, 134px)"
                          : index === 3
                            ? "translate(-110px, 224px)"
                            : index === 4
                              ? "translate(-140px, 134px)"
                              : "translate(-88px, 224px)",
                }}
              ></div>

              {item.step && (
                <p
                  className="process-step-number text-[#8797dd] text-[16px] mb-2"
                  style={{
                    transform:
                      index === 1
                        ? "translate(-80px, 90px)"
                        : index === 2
                          ? "translate(-120px, 140px)"
                          : index === 3
                            ? "translate(-100px, 90px)"
                            : index === 4
                              ? "translate(-150px, 140px)"
                              :"none",
                               
                  }}
                >
                  {item.step}
                </p>
              )}

              <h2
                className="process-title text-[17px] font-semibold leading-tight mb-4"
                style={{
                  color: item.date ? "#FFFFFF" : "#FA8413",

                  transform:
                    index === 0
                      ? "translate(-50px, 140px)"
                      : index === 1
                        ? "translate(-80px, 90px)"
                        : index === 2
                          ? "translate(-120px, 140px)"
                          : index === 3
                            ? "translate(-100px, 90px)"
                            : index === 4
                              ? "translate(-140px, 140px)"
                              : "translate(-100px, 170px)",
                }}
              >
                {item.title}
              </h2>

              {item.desc && (
                <p
                  className="process-desc text-[14px] leading-[20px] text-[#ffffff]  w-[166px] mx-auto "
                  style={{
                    transform:
                      index === 0
                        ? "translate(20px, 20px)"
                        : index === 1
                          ? "translate(-80px, 90px)"
                          : index === 2
                            ? "translate(-120px, 140px)"
                            : index === 3
                              ? "translate(-100px, 90px)"
                              : index === 4
                                ? "translate(-140px, 140px)"
                                : "translate(80px, 90px)",
                  }}
                >
                  {item.desc}
                </p>
              )}

              {item.date && (
                <p
                  className="process-date text-[#FA8413] text-[17px] font-semibold mt-3"
                  style={{
                    transform:
                      index === 0
                        ? "translate(-50px, 140px)"
                        : "translate(-110px, 120px)",
                  }}
                >
                  {item.date}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
