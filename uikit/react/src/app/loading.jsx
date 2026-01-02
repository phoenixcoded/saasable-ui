// @project
import Loader from '@/components/Loader';
import ThemeProviders from '@/components/ThemeProvider';

/***************************  LOADER  ***************************/

export default function Loading() {
  return (
    <ThemeProviders>
      <Loader />
    </ThemeProviders>
  );
}
