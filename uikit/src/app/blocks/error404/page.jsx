// @project
import Error404Page from '@/blocks/maintenance/Error404';

/***************************  ERROR 404 - DATA  ***************************/

const data = {
  primaryBtn: { children: 'Back to Home Page' },
  heading: 'Looks like youve taken a wrong turn. Lets get you back on track!'
};

/***************************  BLOCK - ERROR 404  ***************************/

export default function BlockError404Page() {
  return <Error404Page {...data} />;
}
