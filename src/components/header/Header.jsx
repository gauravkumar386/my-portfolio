/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import styles from "@/styles/Header.module.scss";

export default function Header(props) {
  const scrollToView = (elementId) => {
    let elementDiv = document.getElementById(elementId);
    elementDiv &&
      window.scrollTo({
        top: elementDiv.offsetTop,
        behavior: "smooth",
      });
  };
  return (
    <>
      <div className={styles.headerContainer} id="homepage">
        <span onClick={()=>scrollToView('home')}>Home</span>
        <span onClick={()=>scrollToView('about')}>About</span>
        <span onClick={()=>scrollToView('projects')}>Projects</span>
        <span onClick={()=>scrollToView('contact')}>Contact</span>
        <a
          href="../../../public/pdfs/Gaurav_Resume.pdf"
          download="Gaurav_Resume"
          target="_blank"
          rel="noreferrer"
        >
          <button>Resume</button>
        </a>
      </div>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {props.children}
      </div>
    </>
  );
}
