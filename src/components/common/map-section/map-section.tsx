import { ValueOf } from '@/types/helpers';
import { MapType } from '@/utils/consts';

type MapSectionProps = Readonly<{
  type: ValueOf<typeof MapType>;
}>

function MapSection({ type }: MapSectionProps): JSX.Element {
  return <section className={`${type}__map map`}></section>;
}

export default MapSection;
