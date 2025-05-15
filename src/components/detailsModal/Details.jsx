import { X } from "lucide-react";
import { Link } from "react-router-dom";
import "./details.css";
const Details = ({ details, setOpen }) => {
  return (
    <div className="reserve z-30  ">
      <div className="rContainer bg-[#101826]  rounded-lg shadow-2xl w-[700px] h-[400px] ">
        <X
          className="absolute w-[40px] h-[40px]  bg-yellow top-4 right-4 hover:bg-red cursor-pointer"
          onClick={() => setOpen(false)}
        />
        <div className="flex justify-between items-center mt-24  mb-4">
          <h1>Technology Used</h1>

          <p className="flex gap-4 font-semibold  ">
            {details.technologies.map((tech, i) => (
              <span key={i}> *{tech}</span>
            ))}
          </p>
        </div>
        <div className="flex justify-between gap-10 items-center my-4">
          <Link
            className="cursor-pointer   w-full px-7 py-3 rounded-xl text-center border border-yellow hover:bg-yellow transition-all duration-150"
            to={details?.frontend}
          >
            {" "}
            <button className="cursor-pointer">Frontend Code</button>
          </Link>
          <Link
            className="cursor-pointer   w-full px-7 py-3 rounded-xl text-center border border-yellow hover:bg-yellow transition-all duration-150"
            to={details?.backend}
          >
            {" "}
            <button className="cursor-pointer"> Backend Code</button>
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
