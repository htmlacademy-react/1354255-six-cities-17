import { User } from '@/types/user';
import { clsx } from 'clsx';

type OfferHostProps = Readonly<{
  host: User;
}>

function OfferHost({ host }: OfferHostProps): JSX.Element {
  const { isPro, name, avatarUrl } = host;

  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>

      <div className="offer__host-user user">
        <div className={clsx(
          'offer__avatar-wrapper',
          'user__avatar-wrapper',
          isPro && 'offer__avatar-wrapper--pro'
        )}
        >
          <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="offer__user-name">
          {name}
        </span>
        {
          isPro &&
          <span className="offer__user-status">
            Pro
          </span>
        }
      </div>
    </div>
  );
}

export default OfferHost;