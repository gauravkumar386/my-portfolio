import Image from "next/image";

import styles from "@/styles/Hero.module.scss";
import profile from "../../../public/images/profile.jpg";
import arrow from "../../../public/icons/arrow.png";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroHeader}>
        <span>Gaurav Kumar</span>
        <span>Currently front end developer at Accenture</span>
        <span>Based in Bengaluru, India</span>
        <span>Work, About, Contact</span>
      </div>
      <div className={styles.heroBody}>
        <p>ReactJS Developer</p>
        <Image src={profile} width={550} height={200} alt="Profile Picture" />
      </div>
      <div className={styles.heroFooter}>
        <div className={styles.heroFooterLeft}>
          <Image src={arrow} width={40} height={50} alt="arrow" />
          <p className={styles.description}>
            Front end developer who loves writing code and creating UX
          </p>
        </div>
        <div className={styles.heroFooterRight}>
          <span className={styles.heroName}>Gaurav Kumar</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
