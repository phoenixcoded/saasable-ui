import { useContext } from 'react';

// @project
import { ConfigContext } from '@/contexts/ConfigContext';

/***************************  HOOKS - CONFIG  ***************************/

export default function useConfig() {
  return useContext(ConfigContext);
}
