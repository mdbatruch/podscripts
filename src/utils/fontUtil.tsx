import WebFont from 'webfontloader';

export const loadFonts = () => {
    WebFont.load({
      google: {
        families: [`Quicksand`]
      }
    });
};