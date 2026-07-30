// @next
import { Archivo, Figtree, Roboto, Urbanist, Plus_Jakarta_Sans } from 'next/font/google';

export let Themes;

(function (Themes) {
  Themes['THEME_DEFAULT'] = 'default';
  Themes['THEME_CRM'] = 'crm';
  Themes['THEME_AI'] = 'ai';
  Themes['THEME_CRYPTO'] = 'crypto';
  Themes['THEME_HOSTING'] = 'hosting';
  Themes['THEME_PMS'] = 'pms';
  Themes['THEME_HRM'] = 'hrm';
  Themes['THEME_PLUGIN'] = 'plugin';
  Themes['THEME_LMS'] = 'lms';
})(Themes || (Themes = {}));

export const CSS_VAR_PREFIX = '';
export const AUTH_USER_KEY = 'saasable-user';

/***************************  CONFIG  ***************************/

const config = {
  currentTheme: Themes.THEME_DEFAULT
};

export default config;

/***************************  THEME - FONT FAMILY  ***************************/

const fontRobot = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });
const fontArchivo = Archivo({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const fontFigtree = Figtree({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const fontUrbanist = Urbanist({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const fontPlusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const FONT_ROBOTO = fontRobot.style.fontFamily;
export const FONT_ARCHIVO = fontArchivo.style.fontFamily;
export const FONT_FIGTREE = fontFigtree.style.fontFamily;
export const FONT_URBANIST = fontUrbanist.style.fontFamily;
export const FONT_PLUS_JAKARTA = fontPlusJakarta.style.fontFamily;
