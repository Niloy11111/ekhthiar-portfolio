/* eslint-disable no-unused-vars */
import css from "../assets/css.svg";
import figma from "../assets/figma.png";
import firebase from "../assets/firebase.svg";
import html from "../assets/html.svg";
import JavaScript from "../assets/js.svg";
import mongo from "../assets/mongo.svg";
import next from "../assets/next.webp";
import nodejs from "../assets/node.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import TypeScript from "../assets/ts.svg";

import { motion } from "framer-motion";
import skill2 from "../assets/skills-image.png";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1500px)");
  // const isAboveSmall = useMediaQuery("(min-width: px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16  ">
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" font-bold text-4xl mb-5">
            MY <span className="">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            These are the key technologies and tools I specialize in as a web
            developer.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full  before:z-[-1]"
            >
              <img alt="skills" className="z-10   " src={skill2} />
            </div>
          ) : (
            <img alt="skills" className="z-10 " src={skill2} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      {isAboveLarge && (
        <>
          <div className="flex flex-col md:flex-row md:justify-center mt-24  gap-5">
            {/* EXPERIENCE */}
            <motion.div
              className=" "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto w-[50px] h-[50px]"
                    src={html}
                    alt=""
                  />
                  <p className="text-center font-semibold text-2xl"> HTML</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="lg:lg:mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={css}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">CSS</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=" lg:mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={JavaScript}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">
                    JavaScript
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=" lg:mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={react}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">React</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={tailwind}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">Tailwind</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center mt-5  gap-5">
            <motion.div
              className="lg:mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={firebase}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">Firebase</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={figma}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">Figma</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={TypeScript}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">
                    TypeScript
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className=" skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={next}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">Nextjs</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-1">
                  <img
                    className="mx-auto w-[50px] h-[50px]"
                    src={mongo}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">MongoDB</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center mt-5 md:flex  lg:-mt-3  gap-5 md:mb-20">
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src="https://redux.js.org/img/redux.svg"
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">Redux</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto  rounded-xl w-[50px] h-[50px]"
                    src={nodejs}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">Node.js</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src="https://www.manektech.com/storage/developer/1646733543.webp"
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">Express</p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
      {!isAboveLarge && (
        <>
          <div className="flex sm:flex-row sm:flex-wrap flex-col  justify-center mt-24  gap-5">
            <motion.div
              className=" "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto w-[50px] h-[50px]"
                    src={html}
                    alt=""
                  />
                  <p className="text-center font-semibold text-2xl"> HTML</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={css}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">CSS</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={react}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">React</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={tailwind}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">Tailwind</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={firebase}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">Firebase</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={figma}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">Figma</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=" "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={JavaScript}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">
                    JavaScript
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className=" shadow-xl border-p1 border-b-0 rounded-lg bg-[#fff5ef] border hover:border-b-0  border-t-2    flex justify-center items-center sm:w-[250px] xs:w-full h-[80px] ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={TypeScript}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">
                    TypeScript
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className=" shadow-xl border-p1 border-b-0 rounded-lg bg-[#fff5ef] border hover:border-b-0  border-t-2    flex justify-center items-center sm:w-[250px] xs:w-full h-[80px] ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src={next}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">Nextjs</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-1">
                  <img
                    className="mx-auto w-[50px] h-[50px]"
                    src={mongo}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">MongoDB</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src="https://redux.js.org/img/redux.svg"
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">Redux</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto  rounded-xl w-[50px] h-[50px]"
                    src={nodejs}
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">Node.js</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="skillCard ">
                <div className="flex items-center gap-5">
                  <img
                    className="mx-auto   w-[50px] h-[50px]"
                    src="https://www.manektech.com/storage/developer/1646733543.webp"
                    alt=""
                  />
                  <p className="text-center font-semibold text-3xl">Express</p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
};

export default MySkills;
