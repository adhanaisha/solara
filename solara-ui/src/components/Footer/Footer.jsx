function Contact() {
  return (
    <section className="bg-[#0b0750] px-24 py-16 text-white"
             style={{
              paddingLeft: "120px",
              paddingRight: "120px",
             }}>
      <h1 style={{ marginBottom: "15px" }} className="text-[45px] font-[600] text-center mb-16">
        Let's start a Conversation
      </h1>

      <form className="max-w-[1500px] mx-auto">
        <div style={{ marginTop: "25px" }} className="grid grid-cols-2 gap-x-16 gap-y-10 mb-10">
          <div>
            <label className="text-[17px] font-[600] block mb-3">
              First Name
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-[#b8c2ff] outline-none text-[22px] pb-2"
            />
          </div>

          <div>
            <label className="text-[17px] font-[600]  block mb-3">
              Last Name
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-[#b8c2ff] outline-none text-[22px] pb-2"
            />
          </div>

          <div>
            <label className="text-[17px] font-semibold block mb-3">
              Contact Number
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-[#b8c2ff] outline-none text-[22px] pb-2"
            />
          </div>

          <div>
            <label className="text-[17px] font-[600] block mb-3">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-[#b8c2ff] outline-none text-[22px] pb-2"
            />
          </div>
        </div>

        <div style={{ marginTop: "30px" }} className="mb-10">
          <label className="text-[17px] font-[600]  block mb-3">
            Purpose of contact
          </label>
          <div className="relative">
            <select
              defaultValue=""
              className="w-full bg-[#0b0750] border-b border-[#b8c2ff] outline-none text-[22px] pb-2 text-white appearance-none cursor-pointer"
            >
              <option value="" disabled hidden></option>
              <option className="text-white">Investor</option>
              <option className="text-white">Mentor</option>
              <option className="text-white">Startup</option>
            </select>
            <span className="absolute right-3 top-1 text-white text-[22px] pointer-events-none">
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
            className="w-full bg-transparent border-b border-[#b8c2ff] outline-none text-[22px] pb-2"
          />
        </div>

        <div style={{ marginTop: "30px" }} className="mb-12">
          <label className="text-[17px] font-semibold block mb-3">
            Message
          </label>
          <textarea 
            rows="4"
            className="w-full h-[50px] bg-transparent border-b border-[#b8c2ff] outline-none text-[22px] resize-none"
          ></textarea>
        </div>

        <div style={{ marginTop: "70px" , marginBotoom: "10px"}} className="flex justify-center">
          <button
            type="submit"
            className="bg-[#F98613] hover:hover:-translate-y-1 transition-all duration-300 text-white text-[25px] font-[600] w-[190px] h-[42px] rounded-[64px]"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;