import { Link, useLoaderData, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const allProjects = useLoaderData();

  const params = useParams();

  const idParse = parseFloat(params.id);
  const clickedProject = allProjects.find(
    (each) => parseFloat(each.id) === idParse
  );

  const {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    desc1,
    desc2,
    title,
    name,
    live,
    frontend,
    backend,
    technologies,
  } = clickedProject;
  // w-[70%] mx-auto my-24
  return (
    <>
      <div className="">
        <div className="h-[90px] flex items-center justify-center">
          <Link to="/">
            <button className="cursor-pointer bg-black px-12 h-[50px] text-white ">
              Go Home
            </button>
          </Link>
        </div>
        <div className="bg-p1 h-[40vh] w-full flex justify-center items-center">
          <div>
            <h1 className=" text-center text-5xl font-semibold">
              {clickedProject?.name} Details
            </h1>
            <p className="font-semibold text-center"> {desc1} </p>
          </div>
        </div>

        <section className=" w-[70%] mx-auto my-24 flex gap-10 justify-between">
          <div className="w-full">
            <p className="text-gray-900 mb-10"> {desc2}</p>{" "}
            <div className="">
              <img
                className="rounded-bl-none rounded-3xl rounded-br-none"
                src={img2}
                alt=""
              />
              <a href={live} target="_blank" rel="noopener noreferrer">
                <button className="rounded-tl-none rounded-tr-none rounded-3xl hover:bg-black text-white cursor-pointer w-full bg-p1 py-4">
                  Live Website
                </button>
              </a>
            </div>{" "}
            <div className="mt-5">
              <img
                className="rounded-bl-none rounded-3xl rounded-br-none"
                src={img3}
                alt=""
              />
              <a href={frontend} target="_blank" rel="noopener noreferrer">
                <button className="rounded-tl-none rounded-tr-none rounded-3xl hover:bg-black text-white cursor-pointer w-full bg-p1 py-4">
                  Frontend Code
                </button>
              </a>
            </div>
            <div className="mt-5">
              <img
                className="rounded-bl-none rounded-3xl rounded-br-none"
                src={img4}
                alt=""
              />
              <a href={backend} target="_blank" rel="noopener noreferrer">
                <button className="rounded-tl-none rounded-tr-none rounded-3xl hover:bg-black text-white cursor-pointer w-full bg-p1 py-4">
                  Backend Code
                </button>
              </a>
            </div>{" "}
            {/* Technologies */}
            <section className="mt-8 mb-20">
              <div className="flex flex-wrap gap-2">
                {technologies?.map((item) => (
                  <div className="max-w-max hover:shadow-none transition-all duration-200 rounded-lg bg-amber-50 px-4 py-2 shadow-xl border border-gray-500">
                    <span> {item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="w-full lg:mb-24">
            <div>
              {" "}
              <img className="w-full rounded-2xl" src={img1} alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectDetail;
