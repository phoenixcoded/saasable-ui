import { Suspense } from 'react';

// @project
import Loader from './Loader';

/***************************  LOADABLE - LAZY LOADING  ***************************/

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
