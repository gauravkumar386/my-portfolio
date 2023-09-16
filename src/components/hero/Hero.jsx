import styles from "@/styles/Hero.module.scss";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const scrollView = () => {
    const element = document.getElementById("homepage");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div className={styles.heroContainer} id="home">
      <p>
        {`Hello, I'm `}<span>{`Gaurav`}</span>.
      </p>
      <p>{`I'm a full stack web developer.`}</p>
      <button onClick={scrollView}>
        View my work <FaArrowDown />
      </button>
    </div>
  );
};

export default Hero;
