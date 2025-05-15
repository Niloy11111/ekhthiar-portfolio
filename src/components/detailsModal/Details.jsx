import { X } from "lucide-react";
import { Link } from "react-router-dom";
import "./details.css";
const Details = ({ details, setOpen }) => {
  return (
    <div className="reserve z-30  ">
      <div className="rContainer bg-[#101826]  rounded-lg shadow-2xl w-[85%] md:w-[700px] h-[450px] md:h-[400px] ">
        <X
          className="absolute w-[40px] h-[40px]  bg-yellow top-4 right-4 hover:bg-red cursor-pointer"
          onClick={() => setOpen(false)}
        />
        <div className="flex md:flex-col justify-center md:gap-5 flex-col  gap-5  items-center md:mt-16 mt-24  mb-8 ">
          <h1 className="border-b-2 border-yellow">Technologies</h1>

          <p className="flex md:flex-row  justify-center flex-wrap gap-3 font-semibold  ">
            {details.technologies.map((tech, i) => (
              <span key={i}>
                <span className="text-red">*</span>
                {tech}
              </span>
            ))}
          </p>
        </div>
        <div className="flex justify-between gap-10 items-center my-4">
          <Link
            className="cursor-pointer   w-full px-7 py-3 rounded-xl text-center border border-yellow hover:bg-yellow transition-all duration-150"
            to={details?.frontend}
          >
            {" "}
            <button className="cursor-pointer md:flex gap-2 justify-center w-full mx-auto">
              <span>Frontend</span>{" "}
              <span className="md:block hidden">Code</span>
            </button>
          </Link>
          <Link
            className="cursor-pointer   w-full px-7 py-3 rounded-xl text-center border border-yellow hover:bg-yellow transition-all duration-150"
            to={details?.backend}
          >
            {" "}
            <button className="cursor-pointer md:flex gap-2 justify-center w-full mx-auto">
              <span>Backend</span> <span className="md:block hidden">Code</span>
            </button>
          </Link>
        </div>
        <Link className="cursor-pointer  " to={details?.live}>
          <button className="mt-4 bg-red hover:bg-red/80 w-full cursor-pointer  text-black px-7 py-3 rounded-xl">
            Live Website{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
{
  /* <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        /> */
}
{
  /* <X className="rClose" onClick={() => setOpen(false)} /> */
}
