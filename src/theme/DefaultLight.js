import {borders, colors, fontsSize} from '../constants/index';

const DEFAULT_LIGHT_COLOR_THEME = {
  appBackground: colors.appBackground,
  primaryColor: colors.lightGreen,
  white: colors.white,
  textBlack: colors.black,
  error: colors.red,
  avatarColor: colors.darkGray,
  inputBorder: colors.silver,
  shadowColor: colors.gray,
  activeTag: colors.green,
  pendingTag: colors.blue,
  buttonText: colors.white,

  buttonBackground: colors.lightGreen,
  lightSilver: colors.lightSilver,
  secondaryColor: colors.cultured,
  logoutColor: colors.Orange,
  headingText: colors.lightGray,
  lightBlue: colors.lightBlue,
};

const FONT_SET = {
  size: {
    xSmall: fontsSize.extraSmall,
    small: fontsSize.small,
    medium: fontsSize.medium,
    large: fontsSize.large,
    xLarge: fontsSize.extraLarge,
  },
  family: {},
};

const BORDER_RADIUS = {
  radius1: borders.buttonBorder,
  radius2: borders.inputRadius,
  radius3: borders.headerRadius,
  radius4: borders.circleRadius,
};

export const DEFAULT_LIGHT_THEME_ID = 'default-light';

export const DEFAULT_LIGHT_THEME = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  size: FONT_SET.size,
  borders: BORDER_RADIUS,
  family: FONT_SET.family,
};
