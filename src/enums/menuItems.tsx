type MenuItemSettings = {
  label: string;
  url: string;
};

type MenuItemSettingsType = {
  [key: string]: MenuItemSettings;
};

export const MenuItems: MenuItemSettingsType = {
  Home: { label: 'Home', url: '/' },
  About: { label: 'About', url: 'about' },
  Podcasts: { label: 'Podcasts', url: 'podcasts' },
  Contact: { label: 'Contact', url: 'contact' },
};
