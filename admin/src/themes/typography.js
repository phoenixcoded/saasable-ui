// @project
import { FONT_ARCHIVO } from '@/config';

/***************************  DEFAULT - TYPOGRAPHY  ***************************/

export default function typography(theme) {
  return {
    fontFamily: FONT_ARCHIVO,
    letterSpacing: 0,

    // heading - h1
    h1: {
      fontWeight: 500,
      fontSize: 40,
      lineHeight: '44px'
    },

    // heading - h2
    h2: {
      fontWeight: 500,
      fontSize: 32,
      lineHeight: '36px'
    },

    // heading - h3
    h3: {
      fontWeight: 500,
      fontSize: 28,
      lineHeight: '32px'
    },

    // heading - h4
    h4: {
      fontWeight: 500,
      fontSize: 24,
      lineHeight: '28px'
    },

    // heading - h5
    h5: {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: '24px'
    },

    // heading - h6
    h6: {
      fontWeight: 500,
      fontSize: 18,
      lineHeight: '22px'
    },

    // subtitle - 1
    subtitle1: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '20px'
    },

    // subtitle - 2
    subtitle2: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '18px'
    },

    // paragraph - 1
    body1: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '20px'
    },

    // paragraph - 2
    body2: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '18px'
    },

    // caption - regular
    caption: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: 0
    },

    // caption - medium
    caption1: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: 0
    },

    // button
    button: {
      textTransform: 'capitalize'
    }
  };
}
