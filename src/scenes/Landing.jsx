import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="bg-[#fff6eb] md:h-full   sm:h-[140vh]  lg:flex-none  flex justify-center  items-center py-10">
      <section
        id="home"
        className=" flex  md:flex-row flex-col  md:justify-between  md:items-center   w-[70%] mx-auto "
      >
        {/* basis-2/5 */}
        {/* MAIN TEXT  */}
        <div className="basis-2/5 flex-1 z-30 mt-12 md:mt-32 ">
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
            <p className="mb-4 md:text-left   text-center md:text-3xl text-4xl sm:block md:inline-block md:pt-0 pt-5">
              Hello, I<span style={{ fontFamily: "Arial, sans-serif" }}>'</span>
              m
            </p>{" "}
            <p className=" md:text-[55px] text-[45px] lg:text-[75px] mb-3  font-semibold leading-[50px] md:leading-[60px] z-10 text-center md:text-start ">
              M.Ekhthiar Uddin
            </p>
            <p className="md:text-left text-center text-3xl md:text-4xl font-medium text-gray-700 block xl:inline-block  ">
              Mern Stack Developer
            </p>
            <p className="w-[90%] md:mt-5 mt-4 mb-7 text-sm  ">
              With over two years of coding experience, I have gained the
              expertise to build visually appealing websites and deliver an
              enjoyable user experience using React and Next.js, and I’m always
              ready to take on new challenges.
            </p>
          </motion.div>

          {/* CALL TO ACTIONS */}
          <motion.div
            className="flex mt-5 justify-center gap-4 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link
              className="bg-[#ff6b00] text-white  hover:bg-black rounded-full  py-3 px-7 font-semibold
               transition duration-500"
              onClick={() => setSelectedPage("contact")}
              to="https://drive.google.com/file/d/1MTaWomKhN1dYTh-2kUlUy3HafAkIV5pq/view?usp=sharing"
            >
              Resume
            </Link>
            <AnchorLink
              className="border-2 hover:text-white
             hover:bg-p1 border-[#ff6b00]   rounded-full  font-semibold  transition duration-500  flex items-center justify-center px-10 "
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Let's talk.
            </AnchorLink>
          </motion.div>

          <motion.div
            className="flex  justify-center md:justify-start"
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
          </motion.div>
        </div>

        <div className="  ">
          <img
            className="lg:w-[500px] md:w-[80%] sm:w-[70%] mx-auto rounded-lg"
            src="https://scontent.fdac24-5.fna.fbcdn.net/v/t1.6435-9/83297742_202685914106971_9138922362656260096_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEXTWuPyHJuyLwtG8FtnCC6LyTbOJpoHjgvJNs4mmgeOPsPuluaPXSBSNkSoUO0qdIoRgxAqtYFdxr0IR4urCan&_nc_ohc=WHrxN2XK4oMQ7kNvwHD8WND&_nc_oc=AdlSll7cth3thVfw_R7YiIPCFmajiEnvl-Z-uDNvym8k8pcnPtKT2K1aYXABCdmRfN4&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=ALiWdw9_EBe8vH0bD5kJVg&oh=00_AfPX6NIIOAXJF8-MttJ2YkQxvdxhrfDBWEG7AIpfi4UrDw&oe=688B828F"
          ></img>
        </div>
      </section>
    </div>
  );
};

export default Landing;
