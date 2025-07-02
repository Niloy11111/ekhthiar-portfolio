import { motion } from "framer-motion";
import education from "../assets/education.png";
import expertise from "../assets/expertise.png";
const AboutMe = () => {
  //   const isAboveLarge = useMediaQuery("(min-width: 1500px)");
  // const isAboveSmall = useMediaQuery("(min-width: px)");
  return (
    <section id="about" className="my-32">
      <motion.div
        className="  text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <span className="text-xl text-gray-800 font-medium ">
            Get To Know More
          </span>
          <p className="mb-20 font-playfair font-bold text-5xl mt-3">
            About Me
          </p>
        </div>

        <div className="flex md:flex-row flex-col items-center gap-16 md:gap-24 ">
          <div className="relative w-[400px] h-[400px] rounded-[10%] overflow-hidden">
            <div className="bg-[url('./assets/about.jpg')] bg-cover w-full h-full"></div>
            <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-all duration-500"></div>
          </div>

          <div className="flex-1">
            <div className="flex mx-auto justify-center gap-5">
              <div className=" flex-1 flex flex-col justify-center  border-gray-400 border-2 rounded-3xl px-4 py-7">
                <img className="w-[40px] mx-auto mb-3" src={expertise} alt="" />
                <h1 className="font-bold">Experience</h1>
                <p>1 years+</p>
                <p>Mern Stack Development</p>
              </div>
              <div className="flex-1 flex flex-col justify-center  border-gray-400 border-2 rounded-3xl px-4 py-7">
                <img className="w-[40px] mx-auto mb-3" src={education} alt="" />
                <h1 className="font-bold">Education</h1>
                <p>
                  Bachelor of Business Adminstration <br /> in Accounting
                </p>
              </div>
            </div>

            <p className="mt-5 text-left">
              I am a MERN Stack developer, I have experience in full-stack web
              development, including frontend and backend. My expertise lies in
              React.js, Tailwind CSS, Node.js, Express, and MongoDB. I have a
              strong foundation in JavaScript, HTML, and CSS, and have worked on
              various projects to hone my skills. My vision is to continue
              learning and growing as a developer, staying updated with the
              latest trends and technologies in the MERN stack.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
