import styles from './count.less';
const CountApp = ({count, onClick}) => {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {count.record}</div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.button}>
        <button onClick={onClick}>+</button>
      </div>
    </div>
  );
};

export default CountApp;
