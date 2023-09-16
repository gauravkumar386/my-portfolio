import emailjs from "@emailjs/browser";
import styles from "@/styles/Contact.module.scss";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "portfolio_contact",
        "portfolio_form",
        form.current,
        "8qbBUqXJ8hcLzceWg"
      )
      .then(
        (result) => {
          console.log('result',result);
          successToast();
        },
        (error) => {
          console.log(error.text);
          errorToast();
        }
      );
  };

  const successToast = () => {
    toast.success("Message Sent!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };
  const errorToast = () => {
    toast.error('Some error occurred!', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className={styles.contactContainer} id="contact">
      <h1>Contact</h1>
      <p>
        {`Have a question for me? Please write back here and I'll get back to you`}
      </p>
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" />
        <input type="email" name="user_email" placeholder="Email" />
        <textarea type="text" name="message" placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Contact;
