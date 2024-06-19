import styles from "./Contact.module.css";

const ContactHeader = () => {
  return (
    <div className={`${styles.contact_section}`}>
        <h1>
            Contect Us
        </h1>
        <p>
            LETS CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
            WEATHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO OUS THROUGH THE CONTACT FROM OF THIS PAGE, OR MY PHONE, EMAIL, OR SOCIAL MEDIA.{" "}
        </p>
    </div>
  )
}

export default ContactHeader; 