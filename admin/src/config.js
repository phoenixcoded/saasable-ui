// @next
import { Archivo } from 'next/font/google';

/***************************  THEME CONSTANT  ***************************/

export const APP_DEFAULT_PATH = '/sample-page';

export const DRAWER_WIDTH = 254;
export const MINI_DRAWER_WIDTH = 76 + 1; // 1px - for right-side border

/***************************  THEME ENUM  ***************************/

export let Themes;

(function (Themes) {
  Themes['THEME_CRM'] = 'crm';
  Themes['THEME_AI'] = 'ai';
  Themes['THEME_HOSTING'] = 'hosting';
})(Themes || (Themes = {}));

/***************************  CONFIG  ***************************/

const config = {
  currentTheme: 'hosting',
  miniDrawer: false
};

export default config;

/***************************  THEME - FONT FAMILY  ***************************/

const fontArchivo = Archivo({ subsets: ['latin'], display: 'swap', weight: ['400', '500', '600', '700'] });

export const FONT_ARCHIVO = fontArchivo.style.fontFamily;
