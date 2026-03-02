// packages/ui/src/fonts.ts
import  localFont  from 'next/font/local';

// Delight font family
export const delightThin = localFont({
  src: '../public/fonts/Delight/delight-thin.otf',
  variable: '--font-delight-thin',
  weight: '100',
});

export const delightExtraLight = localFont({
  src: '../public/fonts/Delight/delight-extralight.otf',
  variable: '--font-delight-extralight',
  weight: '200',
});

export const delightLight = localFont({
  src: '../public/fonts/Delight/delight-light.otf',
  variable: '--font-delight-light',
  weight: '300',
});

export const delightRegular = localFont({
  src: '../public/fonts/Delight/delight-regular.otf',
  variable: '--font-delight-regular',
  weight: '400',
});

export const delightMedium = localFont({
  src: '../public/fonts/Delight/delight-medium.otf',
  variable: '--font-delight-medium',
  weight: '500',
});

export const delightSemiBold = localFont({
  src: '../public/fonts/Delight/delight-semibold.otf',
  variable: '--font-delight-semibold',
  weight: '600',
});

export const delightBold = localFont({
  src: '../public/fonts/Delight/delight-bold.otf',
  variable: '--font-delight-bold',
  weight: '700',
});

export const delightExtraBold = localFont({
  src: '../public/fonts/Delight/delight-extrabold.otf',
  variable: '--font-delight-extrabold',
  weight: '800',
});

export const delightBlack = localFont({
  src: '../public/fonts/Delight/delight-black.otf',
  variable: '--font-delight-black',
  weight: '900',
});

// Suisse Intl font family
export const suisseIntlLight = localFont({
  src: '../public/fonts/SuisseIntl/SuisseIntl-Light.ttf',
  variable: '--font-suisse-intl-light',
  weight: '300',
});

export const suisseIntlRegular = localFont({
  src: '../public/fonts/SuisseIntl/SuisseIntl-Regular.ttf',
  variable: '--font-suisse-intl-regular',
  weight: '400',
});

export const suisseIntlMedium = localFont({
  src: '../public/fonts/SuisseIntl/SuisseIntl-Medium.ttf',
  variable: '--font-suisse-intl-medium',
  weight: '500',
});

export const suisseIntlSemiBold = localFont({
  src: '../public/fonts/SuisseIntl/SuisseIntl-SemiBold.ttf',
  variable: '--font-suisse-intl-semibold',
  weight: '600',
});

export const suisseIntlBold = localFont({
  src: '../public/fonts/SuisseIntl/SuisseIntl-Bold.ttf',
  variable: '--font-suisse-intl-bold',
  weight: '700',
});

// Export all fonts for easy access
export const allFonts = {
  delight: {
    thin: delightThin,
    extralight: delightExtraLight,
    light: delightLight,
    regular: delightRegular,
    medium: delightMedium,
    semibold: delightSemiBold,
    bold: delightBold,
    extrabold: delightExtraBold,
    black: delightBlack,
  },

  suisseIntl: {
    light: suisseIntlLight,
    regular: suisseIntlRegular,
    medium: suisseIntlMedium,
    semibold: suisseIntlSemiBold,
    bold: suisseIntlBold,
  },
};

// Get all font variables for the layout
export const getAllFontVariables = () => {
  return Object.values(allFonts).flatMap(fontFamily => 
    Object.values(fontFamily).map(font => font.variable)
  ).join(' ');
};