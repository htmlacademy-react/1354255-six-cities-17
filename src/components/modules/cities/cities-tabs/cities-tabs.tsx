import { ValueOf } from '@/types/helpers';
import { City } from '@/utils/consts';

type CitiesTabsProps = Readonly<{
  selectedCity: ValueOf<typeof City>;
}>

function CitiesTabs({ selectedCity }: CitiesTabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(City).map((tab) => {
              const activeClass = tab === selectedCity ? 'tabs__item--active' : '';

              return (
                <li className="locations__item" key={tab}>
                  {/* Клик по кнопке перенаправляет устанавливает фильтр в соответствии с выбранным городом. */}
                  <a className={`locations__item-link tabs__item ${activeClass}`} href="#">
                    <span>{tab}</span>
                  </a>
                </li>
              );
            })
          }
        </ul>
      </section>
    </div>
  );
}

export default CitiesTabs;
