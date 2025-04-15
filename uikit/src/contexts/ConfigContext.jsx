'use client';
import PropTypes from 'prop-types';

import { createContext } from 'react';

// @project
import defaultConfig from '@/config';
import useLocalStorage from '@/hooks/useLocalStorage';

// @initial
const initialState = {
  ...defaultConfig,
  onChangeCurrentTheme: () => {}
};

/***************************  CONFIG CONTEXT & PROVIDER  ***************************/

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }) {
  const [config, setConfig] = useLocalStorage('sass-able-react-mui-next-js-free', initialState);

  const onChangeCurrentTheme = (currentTheme) => {
    setConfig({
      ...config,
      currentTheme
    });
  };

  return (
    <ConfigContext
      value={{
        ...config,
        onChangeCurrentTheme
      }}
    >
      {children}
    </ConfigContext>
  );
}

export { ConfigProvider, ConfigContext };

ConfigProvider.propTypes = { children: PropTypes.any };
