// @project
import Error500Page from '@/blocks/maintenance/Error500';

/***************************  ERROR 500 - DATA  ***************************/

const data = {
  primaryBtn: { children: 'Back to Home Page' },
  heading: 'Please try again later or feel free to contact us if the problem persists.'
};

/***************************  BLOCK - ERROR 500  ***************************/

export default function BlockError500Page() {
  return <Error500Page {...data} />;
}
