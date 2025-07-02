import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LineGradient from "../components/LineGradient";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
//   bg-grey z-10 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

const Project = ({ project }) => {
  const overlayStyles = ``;
  const projectTitle = project?.title.split(" ").join("-").toLowerCase();

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <motion.div variants={projectVariant} className="relative ">
      <div className=" upcomingCard">
        <div className="">
          <img
            className="h-[370px] w-full"
            src={`/images/${projectTitle}.png`}
            alt={projectTitle}
          />
        </div>

        <div
          style={{
            backgroundColor: "rgba(11, 11, 11, 0.60)",
          }}
          className=" upcomingCardContent     "
        >
          <div className="bg-p1 child h-[100px] w-[85%] absolute left-1/2 -translate-x-1/2 flex flex-col justify-center items-center rounded-xl">
            <h1 className="text-white mb-3 font-bold">Project RentMode</h1>
            <Link to={`/details/${project?.id}`}>
              <button className="text-white  cursor-pointer bg-black px-6 rounded py-2  ">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// <div className="bg-blend-ov">
//         <p className="text-2xl font-playfair">{details?.title}</p>

//         <div className="flex mt-5 w-full justify-between gap-5">
//           <button
//             onClick={handleClick}
//             className="cursor-pointer rounded w-full  text-white bg-p1 px-7 py-3 "
//           >
//             Details
//           </button>
//         </div>
//       </div>
//       <img
//         className="w-[400px] h-[400px]"
//         src={`/images/${projectTitle}.png`}
//         alt={projectTitle}
//       />

//       {openModal && <Details details={details} setOpen={setOpenModal} />}

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  console.log("here", projects);

  return (
    <section id="projects" className="  pb-16 ">
      {/* HEADINGS */}
      <motion.div
        className=" md:w-2/5 mx-auto text-center"
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
          <p className="font-playfair font-semibold text-4xl">
            <span className="">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here are some of the real-world projects I’ve built during my learning
          journey
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="">
        {projects.length > 0 && (
          <motion.div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-10 "
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <Project project={project} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
