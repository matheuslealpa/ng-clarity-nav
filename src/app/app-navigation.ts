interface NavigationItem {
  text: string;
  path?: string;
  icon: string;
  items?: NavigationItem[];
}

export const APP_NAVIGATION: NavigationItem[] = [
  {
    text: 'Home',
    path: '/',
    icon: 'home',
  },
  {
    text: 'Configurações',
    icon: 'cog',
    path: '',
    items: [
      {
        text: 'Home',
        path: '/',
        icon: 'home',
      },
    ],
  },
];
