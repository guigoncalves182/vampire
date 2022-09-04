import styles from "./Status.module.scss";

export default function Status({ name, value = 0, size = 5 }) {
  // ○
  // ●

  const vazio = "⚪";
  const cheio = "⚫";
//   const vazio = "⬜";
//   const cheio = "⬛";
  
  
  const points = [];

  for (let index = 0; index < size; index++) {
    if (index < value) points.push(cheio);
    else points.push(vazio);
  }

  return (
    <div className={styles.status}>
      <div className={styles.name}>{name}</div>
      <div className={styles.dash}>______________________________________________________________________________</div>
      <div className={styles.dots}>{points}</div>
    </div>
  );
}
