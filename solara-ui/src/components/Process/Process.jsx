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

  return (
    <section className="bg-[#0b0750] text-white px-16 py-24 overflow-hidden">

      <h1 className="text-[72px] font-semibold mb-5">
        Application Process
      </h1>

      <p className="text-[#7c8bd6] text-[32px] mb-28">
        Up to $500K in Funding for Cohort Startups
      </p>

      <div className="relative w-full h-[700px]">

        <svg
          className="absolute top-[150px] left-0 w-full h-[400px]"
          viewBox="0 0 1800 400"
          preserveAspectRatio="none"
        >

          <path
            d="
              M 40 300
              L 420 80
              L 700 300
              L 1000 80
              L 1280 300
              L 1760 80
            "
            fill="none"
            stroke="#ff8c00"
            strokeWidth="3"
          />

        </svg>

        <div className="relative flex justify-between">

          {steps.map((item, index) => (

            <div
              key={index}
              className={`w-[260px] flex flex-col items-center text-center absolute ${
                item.top
                  ? "top-0"
                  : "top-[300px]"
              }`}
              style={{
                left: `${index * 19}%`,
              }}
            >

              <div className="w-9 h-9 bg-orange-500 rounded-full mb-8 z-10"></div>

              {item.step && (
                <p className="text-[#8797dd] text-[20px] mb-2">
                  {item.step}
                </p>
              )}

              <h2 className="text-orange-500 text-[26px] font-semibold leading-tight mb-4">
                {item.title}
              </h2>

              {item.desc && (
                <p className="text-[20px] leading-[38px] text-[#f2f2ff]">
                  {item.desc}
                </p>
              )}

              {item.date && (
                <p className="text-orange-500 text-[22px] font-semibold mt-3">
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