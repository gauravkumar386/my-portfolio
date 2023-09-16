import styles from "@/styles/Projects.module.scss";
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";
import Slider from "react-slick";
import { useState } from "react";
import {projectList} from "../../shared/Constants";

const Projects = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        },
      },
    ]
  };
  return (
    <div className={styles.projectsContainer} id="projects">
      <h1>Projects</h1>
      <div className={styles.bodyContainer}>
        <div className={styles.slickArrows}>
          <BsArrowRightCircle
            alt="previous"
            style={{ rotate: "180deg" }}
            onClick={sliderRef?.slickPrev}
          />
          <BsArrowRightCircle alt="next" onClick={sliderRef?.slickNext} />
        </div>
        <Slider ref={setSliderRef} {...settings}>
          {projectList.map((project, index) => {
            return (
              <div className={styles.slickContainer} key={index}>
                <Image
                  src={project.imageUrl}
                  alt={project.projectTitle}
                  height={400}
                />
                <div className={styles.projectDetails}>
                  <p>{project.projectTitle}</p>
                  <p>{project.projectDescription}</p>
                  <Link target="_blank" href={project.projectLink}>
                    <button>View Code</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
