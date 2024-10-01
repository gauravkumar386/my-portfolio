import styles from "@/styles/About.module.scss";
import Image from "next/image";
import profile from "../../../public/images/profile.jpg";
import { FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BiLogoHtml5 } from "react-icons/bi";
import { FaSass } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaAngular } from "react-icons/fa";

const About = () => {
  return (
    <div className={styles.aboutContainer} id="about">
      <h1>About me</h1>
      <div className={styles.bodyContainer}>
        <div className={styles.leftContainer}>
          <Image src={profile} alt="profile" height={280} width={300} />
          <p>{`I'm a fullstack developer with 5.3 years of experience 
                    and passion for Javascript, React & all things web development. 
                    The unique combination of creativity, problem solving,
                    UI designing and learning new things drives my excitement and 
                    passion for web development. When I'm not at my PC
                    I like to spend my time reading, playing guitar and watching football.`}</p>
        </div>
        <div className={styles.rightContainer}>
          <ul>
            <li>
              <FaReact style={{ color: "aqua" }} />
              <p>React Web/Native</p>
            </li>
            <li>
              <BiLogoHtml5 style={{ color: "orange" }} />
              <p>HTML</p>
            </li>
            <li>
              <FaAngular style={{ color: "#EE0505" }} />
              <p>Angular</p>
            </li>
          </ul>
          <ul>
            <li>
              <BiLogoJavascript style={{ color: "yellow" }} />
              <p>Javascript</p>
            </li>
            <li>
              <SiNextdotjs style={{ color: "#fff" }} />
              <p>Next.JS</p>
            </li>
            <li>
              <SiTypescript style={{ color: "#4E89F0" }} />
              <p>Typescript</p>
            </li>
            <li>
              <BsGit style={{ color: "#DF4F25" }} />
              <p>Git</p>
            </li>
          </ul>
          <ul>
            <li>
              <FaSass style={{ color: "#E871C9" }} />
              <p>SASS</p>
            </li>
            <li>
              <FaJava style={{ color: "#187DAC" }} />
              <p>Java</p>
            </li>
            <li>
              <SiSpringboot style={{ color: "#089C0D" }} />
              <p>Spring Boot</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
