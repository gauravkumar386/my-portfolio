/* eslint-disable react/no-unescaped-entities */
import styles from '@/styles/Footer.module.scss'
const Footer=()=>{
  return (
    <>
      {/* <hr /> */}
      <div className={styles.footerContainer}>
        <p>© {new Date().getFullYear()} Gaurav's Portfolio</p>
        <div className={styles.socialIcons}>
          <a
            href="https://www.hackerrank.com/gauravk410?hr_r=1"
            aria-label="Hackerrank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-code"></i>
          </a>
          <a
            href="https://github.com/olawanlejoel"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-kumar-4a75311ab/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer