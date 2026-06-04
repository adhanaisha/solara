import {
  DollarSign,
  GraduationCap,
  Handshake,
  Building2,
  Users,
  Mic,
  Binoculars,
  Tv,
} from "lucide-react";

function Benefits() {
  const benefits = [
    {
      icon: <DollarSign size={40} />,
      title: "Seed Investment",
      desc: "Seed funding, expert mentorship, and strong ecosystem access help founders fast-track transformative deeptech solutions.",
    },

    {
      icon: <GraduationCap size={40} />,
      title: "DeepTech Mentors",
      desc: "Collaborate with experienced founders and experts who offer hands-on guidance in technology, product, and market strategy.",
    },

    {
      icon: <Handshake size={40} />,
      title: "Investor Access",
      desc: "Access a curated network of investors and partners, helping founders build relationships and prepare for future fundraising.",
    },

    {
      icon: <Building2 size={40} />,
      title: "Industry & Research Network",
      desc: "Connect with industry leaders and experts to validate ideas, accelerate development, and drive strategic collaborations.",
    },

    {
      icon: <Users size={40} />,
      title: "Founder Community",
      desc: "Join a driven founder cohort to share insights, collaborate, and learn alongside peers building transformative technologies.",
    },

    {
      icon: <Mic size={40} />,
      title: "Founder Playbooks & Workshops",
      desc: "Curated sessions covering product, IP, fundraising, regulation, and scaling.",
    },

    {
      icon: <Binoculars size={40} />,
      title: "Go-To-Market Support",
      desc: "Hands-on support to refine your go-to-market, find early customers, and build traction.",
    },

    {
      icon: <Tv size={40} />,
      title: "Demo Day",
      desc: "Showcase your startup at Demo Day to a curated audience of investors and partners, gain visibility, and unlock new funding opportunities.",
    },
  ];

  return (
    <section className="bg-[#171443] px-20 min-h-[931px] text-white section-container">
      <h1 className="text-[43px] font-semibold mb-10 translate-y-[33px]" >Program Benefits</h1>

      <p className="text-[#8f8cc9] text-[23px] leading-[50px] w-[950px] translate-y-[24px]">
        Real, tangible benefits designed to accelerate your DeepTech journey.
      </p>

      <div className="grid grid-cols-4 gap-6 translate-y-[76px] ">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-[#2a2592] rounded-[32px] w-[260px] px-12 py-8 min-h-[320px] border border-[#403cb0] transition-all duration-500 hover:-translate-y-4 hover:bg-[#332db0] hover:shadow-[0_0_40px_rgba(255,140,0,0.25)] cursor-pointer"
          >
            <div className="w-[59px] h-[50px] translate-x-[20px] translate-y-[33px] rounded-full bg-orange-500 flex items-center justify-center mb-12">
              {item.icon}
            </div>

            <h2 className="text-orange-500 translate-x-[20px] translate-y-[55px] text-[21px] font-semibold leading-tight mb-8">
              {item.title}
            </h2>

            <p className="text-[#e7e7ff] text-[15px] translate-x-[20px] translate-y-[55px] leading-[28px] w-[240px] mx-auto">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
