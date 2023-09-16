/* eslint-disable react/no-unescaped-entities */
import styles from "@/styles/Footer.module.scss";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.socialIcons}>
          <Link
            href="https://github.com/gauravkumar386"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gaurav-kumar-4a75311ab/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </Link>
          <Link href="mailto:gauravk410@gmail.com" aria-label="email">
            <AiOutlineMail />
          </Link>
        </div>
        <p><AiOutlineCopyrightCircle/> 2023 Gaurav's Portfolio</p>
      </div>
    </>
  );
};

export default Footer;
