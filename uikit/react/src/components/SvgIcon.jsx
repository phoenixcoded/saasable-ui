'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

//@project
import { IconType } from '@/enum';

const spritePaths = {
  [IconType.STROKE]: '/assets/svg/tabler-sprite-outline.svg',
  [IconType.FILL]: '/assets/svg/tabler-sprite-fill.svg',
  [IconType.CUSTOM]: '/assets/svg/sprite-custom.svg'
};

export default function SvgIcon({ name, size = 24, type = IconType.STROKE, color, stroke, twoToneColor }) {
  const theme = useTheme();

  const fillColor = type !== IconType.STROKE ? twoToneColor || theme.vars.palette.primary.lighter : undefined;
  const strokeColor =
    type !== IconType.FILL
      ? color || (type === IconType.CUSTOM ? theme.vars.palette.text.primary : theme.vars.palette.primary.main)
      : undefined;

  const defaultStroke = size <= 24 ? 2.5 : size <= 32 ? 2 : 1.5;
  const strokeWidth = stroke !== undefined ? stroke : type === IconType.CUSTOM ? defaultStroke : type !== IconType.FILL ? 1.5 : undefined;

  return (
    <Box
      role="none"
      sx={{
        '& svg': {
          verticalAlign: 'middle',
          display: 'block',
          color: color || (type === IconType.CUSTOM ? 'text.primary' : 'primary.main'),
          '& [data-two-tone="true"]': { color: twoToneColor || theme.vars.palette.primary.lighter }
        }
      }}
    >
      <svg
        className={name}
        width={size}
        height={size}
        {...(fillColor && { fill: fillColor })}
        {...(strokeColor && { stroke: strokeColor })}
        {...(strokeWidth && { strokeWidth })}
      >
        <use xlinkHref={`${spritePaths[type]}#${name}`} />
      </svg>
    </Box>
  );
}

SvgIcon.propTypes = {
  name: PropTypes.any,
  size: PropTypes.number,
  type: PropTypes.any,
  IconType: PropTypes.any,
  STROKE: PropTypes.any,
  color: PropTypes.any,
  stroke: PropTypes.any,
  twoToneColor: PropTypes.any
};
