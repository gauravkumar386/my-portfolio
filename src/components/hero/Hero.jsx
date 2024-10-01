import styles from "@/styles/Hero.module.scss";
import { FaArrowDown } from "react-icons/fa";
import Typewriter from "typewriter-effect";

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
    <div className={styles.heroContainer}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `Hello, I'm Gaurav. <br/>
              I'm a front web/mobile developer.`
            )
            .start();
        }}
      />
      <button onClick={scrollView}>
        View my work <FaArrowDown />
      </button>
    </div>
  );
};

export default Hero;
