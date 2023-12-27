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
    text: 'Relatórios',
    icon: 'export',
    items: [
      {
        text: 'Relatório 1',
        path: '/rel1',
        icon: 'file-share'
      },
    ],
  },
  {
    text: 'Configurações',
    icon: 'administrator',
    items: [
      {
        text: 'Configuração 1',
        path: '/conf1',
        icon: 'cog'
      },
    ],
  },
];
