import { City } from '@/utils/consts';

function CitiesTabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(City).map((tab) => (
              <li className="locations__item" key={tab}>
                <a className="locations__item-link tabs__item" href="#">
                  <span>{tab}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default CitiesTabs;
