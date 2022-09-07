import styles from "./Vitalidade.module.scss";

export default function Vitalidade({ name, penalty, checked}) {

  const vazio = "⬜";
  const cheio = "⬛";

  return (
    <div className={styles.status}>
      <div className={styles.name}>{name}</div>
      <div className={styles.dots}>{penalty} {checked ? cheio : vazio}</div>
    </div>
  );
}
