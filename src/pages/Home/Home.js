import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Gerador</h1>

      <p className={styles.text}>
        <Link to="/generator">
          <button className={styles.button}>Vampiro</button>
        </Link>
      </p>
    </div>
  );
}

export default Home;
