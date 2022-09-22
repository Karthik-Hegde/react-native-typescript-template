import {Dimensions, PixelRatio} from 'react-native';
export const {width, height} = Dimensions.get('window');

/* Guideline sizes are based on the designs for iPhone X screen mobile device
iPhone X Resolution: 375 x 812 dp. */

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) =>
  PixelRatio.roundToNearestPixel((width / guidelineBaseWidth) * size);
const verticalScale = (size: number) =>
  PixelRatio.roundToNearestPixel((height / guidelineBaseHeight) * size);
const moderateScale = (size: number, factor = 0.5) =>
  PixelRatio.roundToNearestPixel(
    size + (horizontalScale(size) - size) * factor,
  );

export {
  guidelineBaseHeight,
  guidelineBaseWidth,
  horizontalScale,
  verticalScale,
  moderateScale,
};
