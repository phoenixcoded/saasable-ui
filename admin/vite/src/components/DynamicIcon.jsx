import PropTypes from 'prop-types';
// @third-party
import * as TablerIcons from '@tabler/icons-react';

// @types

/***************************  DYNAMIC - TABLER ICONS  ***************************/

export default function DynamicIcon({ name, size = 24, color = 'black', stroke = 2 }) {
  // Dynamically get the icon component based on the `name` prop
  const IconComponent = TablerIcons[name];

  // If the provided `name` does not match any icon in TablerIcons, return null to avoid rendering errors
  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...{ size, color, stroke }} />;
}

DynamicIcon.propTypes = { name: PropTypes.any, size: PropTypes.number, color: PropTypes.string, stroke: PropTypes.number };
