import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import githubFooter from "../assets/githubFooter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const SocialMediaIcons = ({ section }) => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/m-ekhthiar-uddin-a5bb79229/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedin} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Niloy11111"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="github-link"
          className="w-[30px] rounded"
          src={section === "footer" ? githubFooter : github}
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/ektiar.niloy"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={facebook} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={instagram} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
