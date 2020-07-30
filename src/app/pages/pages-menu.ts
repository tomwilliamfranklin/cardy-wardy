import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Create',
    icon: 'keypad-outline',
    link: '/pages/create',
  },
  {
    title: 'Browse',
    icon: 'keypad-outline',
    link: '/pages/browse',
    home: true,
  },
];
