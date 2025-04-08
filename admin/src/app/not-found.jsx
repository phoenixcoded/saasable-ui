'use client';

// @project
import Error404Page from '@/components/Error404';

/***************************  ERROR 404 - DATA  ***************************/

const data = {
  primaryBtn: { children: 'Back to Home Page', onClick: () => window.history.back() },
  heading: 'Looks like youve taken a wrong turn. Lets get you back on track!'
};

/***************************  ERROR - NOT FOUND 404  ***************************/

export default function notfound() {
  return <Error404Page {...data} />;
}
