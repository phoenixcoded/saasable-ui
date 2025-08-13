/***************************  THEME CONSTANT  ***************************/

export const APP_DEFAULT_PATH = '/dashboard';

export const DRAWER_WIDTH = 254;
export const MINI_DRAWER_WIDTH = 76 + 1; // 1px - for right-side border

/***************************  THEME ENUM  ***************************/

export let Themes;

(function (Themes) {
  Themes['THEME_HOSTING'] = 'hosting';
})(Themes || (Themes = {}));

export let ThemeMode;

(function (ThemeMode) {
  ThemeMode['LIGHT'] = 'light';
})(ThemeMode || (ThemeMode = {}));

export let ThemeDirection;

(function (ThemeDirection) {
  ThemeDirection['LTR'] = 'ltr';
})(ThemeDirection || (ThemeDirection = {}));

export let ThemeI18n;

(function (ThemeI18n) {
  ThemeI18n['EN'] = 'en';
  ThemeI18n['FR'] = 'fr';
  ThemeI18n['RO'] = 'ro';
  ThemeI18n['ZH'] = 'zh';
})(ThemeI18n || (ThemeI18n = {}));

export let ThemeFonts;

(function (ThemeFonts) {
  ThemeFonts['FONT_ARCHIVO'] = "'Archivo', sans-serif";
})(ThemeFonts || (ThemeFonts = {}));

/***************************  CONFIG  ***************************/

const config = {
  currentTheme: Themes.THEME_HOSTING,
  mode: ThemeMode.LIGHT,
  themeDirection: ThemeDirection.LTR,
  miniDrawer: false,
  i18n: ThemeI18n.EN
};

export default config;
