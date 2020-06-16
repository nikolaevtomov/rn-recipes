import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import TabsNavigation from './tab-navigation';
import FiltersStackNavigation from './filters-stack-navigation';

const DrawerNavigation = createDrawerNavigator(
  {
    tabs: {
      screen: TabsNavigation,
      navigationOptions: {
        title: 'Menu',
      },
    },
    filters: {
      screen: FiltersStackNavigation,
      navigationOptions: {
        title: 'Filters',
      },
    },
  },
  {
    drawerPosition: 'left',
    drawerType: 'front',
    drawerWidth: 240,
  },
);

export default createAppContainer(DrawerNavigation);
