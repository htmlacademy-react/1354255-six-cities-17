import { Link } from 'react-router-dom';

import { AppRoute } from '@/utils/consts';

type LogoProps = Readonly<{
  width: number;
  height: number;
  className: string;
}>

function Logo({
  width,
  height,
  className
}: LogoProps): JSX.Element {
  return (
    <Link className={`${className}__logo-link`} to={AppRoute.Main}>
      <img
        className={`${className}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </Link>
  );
}

export default Logo;
