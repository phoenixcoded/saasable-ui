'use client';
import PropTypes from 'prop-types';

import { createContext } from 'react';

// @project
import defaultConfig from '@/config';
import useLocalStorage from '@/hooks/useLocalStorage';

// @initial
const initialState = { ...defaultConfig };

/***************************  CONFIG - CONTEXT & PROVIDER  ***************************/

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }) {
  const [config] = useLocalStorage('sass-able-react-mui-admin-next-ts', initialState);

  return <ConfigContext value={{ ...config }}>{children}</ConfigContext>;
}

export { ConfigProvider, ConfigContext };

ConfigProvider.propTypes = { children: PropTypes.any };
