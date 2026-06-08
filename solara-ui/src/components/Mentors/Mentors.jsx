import { motion } from "framer-motion";
import "./Mentors.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.png";
import img11 from "../../assets/img11.png";
function Mentors() {
  const mentors = [
    {
      name: "Addison Appu",
      role: "Managing Partner",
      company: "ThinkUvate",
      image: img1,
    },
    {
      name: "Ajai Garg",
      role: "Sr Advisor",
      company: "Digital Tech",
      image: img2,
    },
    {
      name: "Anjuum Khanna",
      role: "Mentor",
      company: "",
      image: img9,
    },
    {
      name: "Gautam Ghosh",
      role: "Mentor",
      company: "",
      image: img10,
    },
    {
      name: "Jayant Goel",
      role: "Founder",
      company: "Soul Hospitality",
      image: img7,
    },
    {
      name: "Navreet Singh Sehgal",
      role: "Angel Investor",
      company: "Defence",
      image: img6,
    },
    {
      name: "Ojasvi Babber",
      role: "Mentor",
      company: "",
      image: img11,
    },
    {
      name: "Rakesh Verma",
      role: "Founder Director",
      company: "",
      image: img4,
    },
    {
      name: "Sanjeev Gupta",
      role: "Founder",
      company: "Bluwheelz",
      image: img3,
    },
    {
      name: "Shobha Mishra",
      role: "Mentor",
      company: "",
      image: img8,
    },
    {
      name: "Varun Jain",
      role: "Entrepreneur",
      company: "DeepTech Angel Investor",
      image: img5,
    },
  ];

  return (
    <section className="mentors-section bg-[#171443] h-[1880px] max-md:h-auto px-4 md:px-4 lg:px-4 ">
      <h1 className="mentor-heading text-white text-[31px] translate-y-[50px]  font-semibold text-center tracking-[1px] mb-20">
        Mentors
      </h1>

      <div className="mentors-grid grid grid-cols-3 gap-4 gap-y-15 translate-y-[85px]  ">
        {mentors.map((mentor, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="mentor-card bg-[#2b2490] rounded-[20px] px-6 h-[110%] w-[98%] mx-auto"
          >
            <div className="border-[3px] border-[#2b2490] rounded-[24px] p-[5px] translate-x-[25px] translate-y-[21px]   w-[85%] mx-auto mt-3">
              <div className="rounded-[14px]  bg-[#2b2490]">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="mentor-image w-full h-[280px] object-cover scale-x-125  rounded-[14px]"
                />
              </div>
            </div>

            <div className="text-center pt-8">
              <h2 className="mentor-name text-white text-[17px] font-semibold translate-y-[32px] ">
                {mentor.name}
              </h2>

              <p className="mentor-role text-[#9aa0df] text-[15px] mt-2 translate-y-[33px]">
                {mentor.role}
              </p>

              <p className="mentor-company text-[#9aa0df] text-[15px] mt-1 translate-y-[34px]">
                {mentor.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Mentors;
