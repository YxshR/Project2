import { MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./Contactform.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import {useState} from 'react';


const Contactform = () => {

  const [name, setName] = useState("yash");
  const [email, setEmail] = useState("@gmail.com");
  const [text, setText] = useState("xyz");



  const onViacallSubmit= () => {
    console.log("I am from call");
  };
  const onSubmit = (event) => {
    event.preventDefault();


    setName (event.target[0].value);
    setEmail (event.target[1].value);
    setText (event.target[2].value);



    console.log("name", event.target[0].value);
    console.log("email", event.target[1].value);
    console.log("text", event.target[2].value);
  };
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button text="VIA SUPPORT TEXT" icon={<MdMessage fontSize="24px" />} />
            <Button onClick={onViacallSubmit} text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
          </div>
          <Button
          isOutline={true}
          text="VIA Email Form" icon={<HiMail fontSize="24px" />} />
          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>

            <label htmlFor="name">
              Name
            </label>
            <input type="text" name="name" />

            </div>
            <div className={styles.form_control}>

              <label htmlFor="email">
                Email
              </label>
              <input type="text" name="email" />

            </div>

            <div className={styles.form_control}>

              <label htmlFor="text">
                Text
              </label>
              <textarea name="text" rows="8" />

            </div>

            <div style={{
              display: "flex",
              justifyContent: "end",
            }}>
              <Button
              text="Submit Button" />
            </div>
            <div>
              {
                name + " " + email + " " + text
              }
            </div>
          </form>


        </div>

        <div className={styles.contact_images}>
        <img src="/images/Pro.svg" alt="contact image" />
        </div>

    </section>
  ) 
}

export default Contactform;