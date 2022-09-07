import styles from "./Status.module.scss";

export default function Status({ name, value = 0, size = 5, square, full }) {
  // ○
  // ●

  let vazio = "⚪";
  let cheio = "⚫";

  if (square) {
    vazio = "⬜";
    cheio = "⬛";
  }

  const points = [];

  for (let index = 0; index < size; index++) {
    if (index < value) points.push(cheio);
    else points.push(vazio);
  }

  if (full) return <div className={styles.dots}>{points}</div>;

  return (
    <div className={styles.status}>
      <div className={styles.name}>{name}</div>
      <div className={styles.dash}>
        ______________________________________________________________________________
      </div>
      <div className={styles.dots}>{points}</div>
    </div>
  );
}
