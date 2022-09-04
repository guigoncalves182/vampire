import styles from "./Secret.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../services/Auth";

function Secret() {
  const {logout, user} = useContext(AuthContext);

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>{user.nome}</h1>
      <img className={styles.avatar} src={user.avatar} alt="Avatar do usuário" />
      <hr />
      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Secret;
