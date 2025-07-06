import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MdOutlineArrowOutward } from "react-icons/md";
import closeIcon from "../assets/close-icon.svg";
import menuIcon from "../assets/menu-icon.svg";
import useMediaQuery from "../hooks/useMediaQuery";
const Link = ({ page, isTopOfPage, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-p1"
          : "sm:text-[#192a32] text-white"
      } hover:text-p1 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAvobeSmallScreens = useMediaQuery("(min-width:780px)");
  const navbarBackground = isTopOfPage
    ? ""
    : " fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-gray-200";

  return (
    // z-40 w-full fixed top-0 ${navbarBackground} border-b
    //  bg-white border-gray-300   py-6
    <nav className={`${isTopOfPage ? "" : "bg-white"}   ${navbarBackground}`}>
      <div className="flex items-center py-4 justify-between customWidth">
        <h4 className="font-playfair  text-3xl font-bold">
          <span className="text-p1">N</span>iloy
          <span className="text-p1">.</span>
        </h4>

        <div>
          {/* dextop nav */}
          {isAvobeSmallScreens ? (
            <div className="bg-white ml-16  px-10 p-4 rounded-full flex justify-between gap-12 font-opensans text-sm font-semibold">
              <Link
                page="Home"
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About"
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              {/* <Link
              page="Testimonials"
              isTopOfPage={isTopOfPage}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
              <Link
                page="Contact"
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          ) : (
            <button
              className="rounded-full cursor-pointer bg-p1 p-2 transition-all duration-500 "
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt="menu-icon" src={menuIcon} />
            </button>
          )}

          {/* mobile menu popup */}
          {!isAvobeSmallScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0  transition-all duration-500  h-full bg-black w-[300px]">
              {/* close icon */}
              <div className="flex justify-end p-12">
                <button
                  className=" cursor-pointer bg-p1 hover:bg-p1/80 "
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <img
                    src="close-icon"
                    className="w-[35px] "
                    src={closeIcon}
                    alt=""
                  />
                </button>
              </div>

              {/* menu items */}
              <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                {/* <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> */}
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
          )}
        </div>

        {/* <AnchorLink href="#contact" onClick={() => setSelectedPage("contact")}>
          <div
            className="py-3 cursor-pointer justify-center gap-4 border 
      hover:bg-b1 border-[#A7A7A7] rounded-full font-semibold transition duration-500
      w-[155px] flex items-center"
          >
            Contact
            <MdOutlineArrowOutward />
          </div>
        </AnchorLink> */}

        <AnchorLink
          className="hidden md:block"
          href="#contact"
          onClick={() => setSelectedPage("contact")}
        >
          <div
            className="group py-3 px-4 cursor-pointer justify-center gap-3 
    border border-gray-300 hover:border-p1/50
    bg-white/80 hover:bg-p1 
    text-gray-700 hover:text-white
    rounded-full font-semibold 
    transition-all duration-500 ease-out
    w-[155px] flex items-center
    transform hover:scale-105 hover:-translate-y-0.5
    shadow-md hover:shadow-lg
    backdrop-blur-sm"
          >
            <span className="transition-all duration-300 group-hover:tracking-wider">
              Contact
            </span>
            <MdOutlineArrowOutward
              className="transition-all duration-300 
      group-hover:rotate-45 group-hover:scale-110"
            />
          </div>
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
