export const Colors = {
  primaryBackground: '#f1f3fa',
  secondaryBackground: '#3a43c3',
  primaryTextColor: '#0c0a10',
  secondaryTextColor: '#acabb4',
  mischka: '#d5d5de',
  black: '#000000',
};

export const hexToRGB = (hex: string, alpha?: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha !== undefined) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
};
