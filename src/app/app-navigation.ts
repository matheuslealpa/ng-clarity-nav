interface NavigationItem {
  text: string;
  path?: string;
  icon: string;
  items?: NavigationItem[];
}

export const APP_NAVIGATION: NavigationItem[] = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home',
  },
  {
    text: 'Configurações',
    icon: 'cog',
    items: [
      {
        text: 'Configuração 1',
        path: '/config',
        icon: 'cog'
      },
    ],
  },
];
