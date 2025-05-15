import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-center md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      {/* <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="/src/assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="/src/assets/profile-image.png"
          />
        )}
      </div> */}
      <div className="z-10 mt-16 md:mt-32 flex justify-center md:order-2 bannerBox absolute  rounded-full gradient-rainblue lg:mx-0 mx-auto h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] ">
        <div className="childBox ">
          <img
            className="hover:filter hover:saturate-200 transition duration-500"
            src="https://i.ibb.co/zxDKmmd/83297742-202685914106971-9138922362656260096-n-1-removebg-preview.png"
          ></img>
        </div>
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
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
          <img alt="" />

          <p className="text-4xl lg:text-6xl  z-10 text-center md:text-start ">
            I'm{" "}
            <span className="inline-block border-b-2 lg:leading-13 border-yellow">
              Ekhthiar {""}
              <span
                className="xs:relative xs:text-redd xs:font-semibold z-20 xs:before:contendt-[url('./assets/brush.png')]
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
              >
                Uddin
              </span>
            </span>
          </p>

          <p className="mt-5 mb-7 text-sm text-center md:text-start">
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
          <AnchorLink
            className="gradient-rainblue text-deep-blue rounded-full py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Download Resume
          </AnchorLink>
          <AnchorLink
            className="rounded-full pr-0.5  "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue rounded-full  hover:text-red transition duration-500 w-full  h-full flex items-center justify-center px-10 ">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
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
    </section>
  );
};

export default Landing;
