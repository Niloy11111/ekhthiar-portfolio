import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav
      className={`${navbarBackground} border-b  bg-white border-gray-300  z-40 w-full fixed top-0 py-6`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair  text-3xl font-bold">
          <span className="text-p1">N</span>iloy
          <span className="text-p1">.</span>
        </h4>

        {/* dextop nav */}
        {isAvobeSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
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
    </nav>
  );
};

export default Navbar;
