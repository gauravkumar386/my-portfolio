import Head from "next/head";
import dynamic from "next/dynamic";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import styles from "@/styles/Home.module.scss";

const DynamicHeader = dynamic(() => import("../components/header/Header"));
const DynamicHero = dynamic(() => import("../components/hero/Hero"));
const DynamicAbout = dynamic(() => import("../components/about/About"));
const DynamicProjects = dynamic(
  () => import("../components/projects/Projects")
);
const DynamicContact = dynamic(() => import("../components/contact/Contact"));
const DynamicFooter = dynamic(() => import("../components/footer/Footer"));

export default function Home() {
  const scrollToPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Gaurav Kumar</title>
      </Head>
      <DynamicHero />
      <DynamicHeader>
        <DynamicAbout />
        <DynamicProjects />
        <DynamicContact />
      </DynamicHeader>
      <DynamicFooter />
      <div
        id="goToTop"
        className={styles.goToTop}
        onClick={() => {
          scrollToPage();
        }}
      >
        <MdKeyboardDoubleArrowUp />
      </div>
    </div>
  );
}
