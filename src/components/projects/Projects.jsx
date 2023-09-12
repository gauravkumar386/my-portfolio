import styles from "@/styles/Projects.module.scss";
import Image from "next/image";
import bookreader1 from "../../../public/images/bookreader-1.png";
import Link from "next/link";

const Projects = () => {
  return (
    <div className={styles.projectsContainer} id="projects">
      <h1>Projects</h1>
      <div className={styles.bodyContainer}>
        <Image src={bookreader1} alt="bookreader-1" height={400} width={720} />
        <div className={styles.projectDetails}>
          <p>Book Reader App</p>
          <p>
            Frontend book order application built with React, NextJs, HTML/SCSS
          </p>
          <Link href="https://github.com/gauravkumar386/book-reader">
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
