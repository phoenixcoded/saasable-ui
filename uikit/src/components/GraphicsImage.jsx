'use client';
import PropTypes from 'prop-types';

import { isValidElement } from 'react';

// @mui
import CardMedia from '@mui/material/CardMedia';

// @project
import DynamicComponent from './DynamicComponent';
import GetImagePath from '@/utils/GetImagePath';

/***************************  IMAGE - TYPE IDENTIFY ***************************/

function isImageComponentProps(value) {
  return value.light !== undefined && value.dark !== undefined;
}

function isDynamicImageProps(value) {
  return value.component !== undefined && value.type !== undefined;
}

/***************************  DYNAMIC GRAPHICS - IMAGE  ***************************/

/**
 *
 * Create a common image component to optimize code by reducing repeated values.
 *
 * @param image: ImageCommonProps = string | ReactElement | ImageComponentProps | DynamicImageProps
 * string = Pass an external CDN link for rendering the image [CardMedia].
 * ReactElement = Elements returned by React components.
 * ImageComponentProps = The ImageComponentProps type is used to pass a light or dark image according to the theme using the GetImagePath() function [CardMedia].
 * DynamicImageProps = Used for rendering manually modified SVG image components [DynamicComponent]
 *
 * @param children: node = The content of the component.
 * @param sx: Array<func | object | bool> | func | object = The system prop that allows defining system overrides as well as additional CSS styles.
 *
 * @returns = Return a valid image element or dynamically render an image or card media image with..
 */

export default function GraphicsImage({ children, image, sx, cardMediaProps }) {
  if (isValidElement(image)) return image;

  if (isDynamicImageProps(image)) {
    return <DynamicComponent component={image.component} type={image.type} />;
  }

  if (isImageComponentProps(image) || typeof image === 'string') {
    return (
      <CardMedia
        {...(cardMediaProps?.component == 'img'
          ? { src: GetImagePath(image), alt: 'Graphics', loading: 'lazy' }
          : { image: GetImagePath(image), title: 'Graphics', loading: 'lazy' })}
        sx={{ width: 'auto', ...sx }}
        {...cardMediaProps}
      >
        {children}
      </CardMedia>
    );
  }

  return image;
}

GraphicsImage.propTypes = { children: PropTypes.any, image: PropTypes.any, sx: PropTypes.any, cardMediaProps: PropTypes.any };
