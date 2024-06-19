import styles from "./Navi.module.css";

const Navi = () => {
  return (
    <nav className={`${styles.navi} container`}>
        <div className="logo">
            <img src="/images/Frame.png" alt="Logo" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navi;