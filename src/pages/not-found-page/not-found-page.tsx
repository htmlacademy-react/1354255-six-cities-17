import styles from './style.module.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <div className={`container ${styles.pageErrorWrapper}`}>
        <h1>404. Not Found</h1>
        <img src="img/404.jpg" alt="tired man with 404" width="350" height="350" />
        <a href="/">Вернуться на главную</a>
      </div>
    </div>
  );
}

export default NotFoundPage;
