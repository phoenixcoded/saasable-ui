import { RouterProvider } from 'react-router-dom';

// @project
import Notistack from '@/components/third-party/Notistack';
import { ConfigProvider } from '@/contexts/ConfigContext';

import router from '@/routes';
import ThemeCustomization from '@/themes';

function App() {
  return (
    <>
      <ConfigProvider>
        <ThemeCustomization>
          <Notistack>
            <RouterProvider router={router} />
          </Notistack>
        </ThemeCustomization>
      </ConfigProvider>
    </>
  );
}

export default App;
