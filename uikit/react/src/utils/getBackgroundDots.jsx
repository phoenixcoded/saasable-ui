export function getBackgroundDots(fill = 'gray', dotSize = 2, spacing = 30) {
  return {
    backgroundImage: `radial-gradient(circle ${dotSize}px, ${fill} ${dotSize}px, transparent 0)`,
    backgroundSize: `${spacing}px ${spacing}px`,
    backgroundRepeat: 'repeat'
  };
}
