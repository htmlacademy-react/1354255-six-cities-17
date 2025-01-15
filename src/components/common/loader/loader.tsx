import styles from './style.module.css';

function Loader(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
        <path
          className={styles.path}
          fill="none"
          stroke="#4481c3"
          strokeWidth="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          d="M23 127.82h114V74.93L80 32.18 23 74.93z"
        />
      </svg>
    </div>
  );
}

export default Loader;
