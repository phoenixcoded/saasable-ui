// @project
import { Cliental3 } from '@/blocks/cliental';
import { DynamicComponentType } from '@/enum';

/***************************  CLIENTAL 3 - DATA  ***************************/

const data = {
  title: '4,000+ companies already growing',
  clientalList: [
    { image: { component: 'cliental/Techlify', type: DynamicComponentType.IMAGE } },
    { image: { component: 'cliental/Marketly', type: DynamicComponentType.IMAGE } },
    { image: { component: 'cliental/Realtor', type: DynamicComponentType.IMAGE } },
    { image: { component: 'cliental/Financely', type: DynamicComponentType.IMAGE } },
    { image: { component: 'cliental/Realtor', type: DynamicComponentType.IMAGE } }
  ]
};

/***************************  BLOCK - CLIENTAL 3  ***************************/

export default function BlockCliental3() {
  return <Cliental3 {...data} />;
}
