// @project
import { Clientele3 } from '@/blocks/clientele';
import { DynamicComponentType } from '@/enum';

/***************************  CLIENTAL 3 - DATA  ***************************/

const data = {
  title: '4,000+ companies already growing',
  clienteleList: [
    { image: { component: 'clientele/Techlify', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Marketly', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Realtor', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Financely', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Realtor', type: DynamicComponentType.IMAGE } }
  ]
};

/***************************  BLOCK - CLIENTAL 3  ***************************/

export default function BlockCliental3() {
  return <Clientele3 {...data} />;
}
