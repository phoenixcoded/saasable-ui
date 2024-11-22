// @project
import branding from '@/branding.json';
import { DynamicComponentType } from '@/enum';

export const clientele = {
  title: `${branding.brandName} to transform 12k+ online presence and achieve their business goals.`,
  clienteleList: [
    { image: { component: 'clientele/Dribbble', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Reddit', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Mui', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Devto', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Envato', type: DynamicComponentType.IMAGE } }
  ]
};

export const clientele2 = {
  title: '4,000+ companies already growing',
  clienteleList: [
    { image: { component: 'clientele/Techlify', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Marketly', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Realtor', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Financely', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Realtor', type: DynamicComponentType.IMAGE } }
  ]
};
