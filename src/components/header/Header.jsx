/* eslint-disable react/no-unescaped-entities */
import { useCallback, useEffect, useState } from "react";
import styles from "@/styles/Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [topValue, setTopValue] = useState("");
  const scrollToView = (elementId) => {
    let elementDiv = document.getElementById(elementId);
    elementDiv &&
      window.scrollTo({
        top: elementDiv.offsetTop,
        behavior: "smooth",
      });
  };
  const getStickyHeader = useCallback(() => {
    const header = document.getElementById("homepage");
    const sticky = header.offsetTop;
    if (window.pageYOffset >= sticky && window.pageYOffset > topValue) {
      if (topValue === "") {
        setTopValue(sticky);
      }
      header.style.position = "fixed";
      header.style.top = "0";
    } else {
      header.style.position = "relative";
      header.style.removeProperty("top");
    }
    if(window.pageYOffset===0 && sticky===0){
      setTopValue("");
    }
  }, [topValue]);

  useEffect(() => {
    window.onscroll = function () {
      getStickyHeader();
    };
  }, [getStickyHeader]);
  return (
    <>
      <div className={styles.headerContainer} id="homepage">
        <span onClick={() => scrollToView("home")}>Home</span>
        <span onClick={() => scrollToView("about")}>About</span>
        <span onClick={() => scrollToView("projects")}>Projects</span>
        <span onClick={() => scrollToView("contact")}>Contact</span>
        {!isMenuOpen ? (
          <RxHamburgerMenu
            className={styles.menuIcon}
            onClick={() => setIsMenuOpen(true)}
          />
        ) : (
          <AiOutlineClose
            className={styles.menuIcon}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        <div
          className={styles.dropdownList}
          style={{ display: isMenuOpen ? "" : "none" }}
        >
          <ul>
            <li
              onClick={() => {
                scrollToView("home");
                setIsMenuOpen(false);
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                scrollToView("about");
                setIsMenuOpen(false);
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                scrollToView("projects");
                setIsMenuOpen(false);
              }}
            >
              Projects
            </li>
            <li
              onClick={() => {
                scrollToView("contact");
                setIsMenuOpen(false);
              }}
            >
              Contact
            </li>
          </ul>
        </div>
        <Link
          href={"Gaurav_Resume.pdf"}
          download="Gaurav_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button>Resume</button>
        </Link>
      </div>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {props.children}
      </div>
    </>
  );
}
