import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'shopping-cart-outline',
    link: '/pages/ui-features/grid',
  },
  {
    title: 'Create',
    icon: 'keypad-outline',
    link: '/pages/browse',
  },
  {
    title: 'Browse',
    icon: 'keypad-outline',
    link: '/pages/browse',
    home: true,
  },
];
