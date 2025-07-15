//@project
import { ProPage } from '@/blocks/pro-page';

/***************************  PRO PAGE - DATA  ***************************/

const data = {
  image: '/assets/images/pro-page/Lock.svg'
};

/***************************  BLOCK - PRO PAGE  ***************************/

export default function BlockProPage() {
  return <ProPage {...data} />;
}
