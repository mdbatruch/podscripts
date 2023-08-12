type MenuItemSettings = {
  label: string;
  url: string;
};

type MenuItemSettingsType = {
  [key: string]: MenuItemSettings;
};

export const MenuItems: MenuItemSettingsType = {
  Home: { label: 'Home', url: '/' },
  Podcasts: { label: 'Podcasts', url: 'podcasts' },
  About: { label: 'About', url: 'about' },
  Contact: { label: 'Contact', url: 'contact' },
};
