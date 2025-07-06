import { motion } from "framer-motion";
import { Download } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.png";
import useMediaQuery from "../hooks/useMediaQuery";
const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="bsdg-[#fff6eb]   h-[90vh]   lg:flex-none  flex justify-center  items-center py-10">
      <section id="home" className=" flex   justify-center    ">
        {/* basis-2/5 */}
        {/* MAIN TEXT  */}
        <div className="mb-20">
          <div className="mb-3 ">
            <img
              src={profile}
              className="w-[200px] h-[200px] mx-auto rounded-full"
            ></img>
          </div>
          <div className="  z-30 flex flex-col justify-center ">
            {/* HEADINGS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="text-xl  text-center  mt-5">
                Hello, I
                <span style={{ fontFamily: "Arial, sans-serif" }}>'</span>m
                M.Ekhthiar Uddin
              </p>{" "}
              <p className="text-3xl mt-2 text-center font-medium">
                Mern Stack Developer
              </p>
              <p className="mt-2 font-medium text-center">
                <TypeAnimation
                  className="text-4xl capitalize lg:text-4xl 
      bg-gradient-to-r from-blue-400 via-purple-500 to-teal-500
      bg-clip-text text-transparent
      drop-shadow-sm
      transition-all duration-300"
                  sequence={[
                    "Suitable for Backend",
                    1000,
                    "Adaptable to Employee Needs",
                    1000,
                    "Front-End Expert",
                    1000,
                    "Passionate learner",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{
                    display: "inline-block",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                  }}
                  repeat={Infinity}
                />
              </p>
              <p className="w-[60%] mx-auto md:mt-5 text-center mt-4 mb-7 ">
                With over two years of coding experience, I have gained the
                expertise to build visually appealing websites and deliver an
                enjoyable user experience using React and Next.js, and I’m
                always ready to take on new challenges.
              </p>
            </motion.div>

            {/* CALL TO ACTIONS */}
            <motion.div
              className="flex  justify-center gap-4 "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {/* <Link
                className=" flex items-center gap-3 text-white bg-black rounded-full  py-3.5 px-9 font-medium
               transition duration-500"
                onClick={() => setSelectedPage("contact")}
                to="https://drive.google.com/file/d/1MTaWomKhN1dYTh-2kUlUy3HafAkIV5pq/view?usp=sharing"
              >
                Resume <Download />
              </Link> */}

              <Link
                className="group flex items-center gap-3 
    text-white bg-black hover:bg-gray-800
    rounded-full py-3.5 px-9 font-medium
    transition-all duration-500 ease-out
    transform hover:scale-105 hover:-translate-y-0.5
    shadow-lg hover:shadow-2xl
    border border-gray-700 hover:border-gray-600
    backdrop-blur-sm"
                onClick={() => setSelectedPage("contact")}
                to="https://drive.google.com/file/d/1MTaWomKhN1dYTh-2kUlUy3HafAkIV5pq/view?usp=sharing"
              >
                <span className="transition-all duration-300 group-hover:tracking-wider">
                  Resume
                </span>
                <Download
                  className="transition-all duration-300 
    group-hover:translate-y-0.5 group-hover:scale-110"
                />
              </Link>

              {/* <AnchorLink
                className=" py-3.5 hover:text-white
             hover:bg-p1   bg-white
              rounded-full  font-medium  transition duration-500  
              flex items-center justify-center px-9 "
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                Let's talk. <FaArrowRight className="ml-2" />
              </AnchorLink> */}

              <AnchorLink
                className=" group py-3.5 px-9 
    bg-white hover:bg-p1 
    text-gray-800 hover:text-white
    rounded-full font-medium 
    transition-all duration-500 ease-out
    flex items-center justify-center
    transform hover:-translate-y-0.5
    shadow-md hover:shadow-xl
    border border-gray-100 hover:border-p1/20
    backdrop-blur-sm"
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                <span className="transition-all duration-300 group-hover:tracking-wider">
                  Let's talk.
                </span>
                <FaArrowRight
                  className="ml-2 transition-all duration-300 
    group-hover:translate-x-1 group-hover:scale-110"
                />
              </AnchorLink>
            </motion.div>

            {/* <motion.div
              className="flex  justify-center "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <SocialMediaIcons section="landing" />
            </motion.div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
