import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { AppRoute } from '@/utils/consts';
import styles from './style.module.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>Ooops</title>
      </Helmet>

      <div className={`container ${styles.pageErrorWrapper}`}>
        <h1>404. Not Found</h1>
        <img src="img/404.jpg" alt="tired man with 404" width="350" height="350" />
        <Link to={AppRoute.Main}>Вернуться на главную</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
