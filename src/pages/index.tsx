import styles from "@/styles/Home.module.scss";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function Home() {
  const scrollToPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Hero />
      <Header>
        <About />
        <Projects />
        <Footer />
      </Header>
      <div
        id="goToTop"
        className={styles.goToTop}
        onClick={() => {
          scrollToPage();
        }}
      >
        <MdKeyboardDoubleArrowUp />
      </div>
    </>
  );
}
