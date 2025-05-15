const SocialMediaIcons = ({ section }) => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/m-ekhthiar-uddin-a5bb79229/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="/src/assets/linkedin.png" />
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
          src={
            section === "footer"
              ? "/src/assets/githubFooter.png"
              : "/src/assets/github.png"
          }
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/ektiar.niloy"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="/src/assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="/src/assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
