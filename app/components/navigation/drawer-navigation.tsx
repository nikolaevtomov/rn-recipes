import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import TabsNavigation from './tab-navigation';
import FiltersStackNavigation from './filters-stack-navigation';
import {COLOURS} from '../../utils/colours';
import Fonts from '../../utils/fonts';

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
    contentOptions: {
      activeTintColor: COLOURS.black,
      activeBackgroundColor: COLOURS.ternary,
      activeLabelStyle: {
        color: COLOURS.white,
      },
      labelStyle: {
        ...Fonts.script,
        fontSize: 24,
        fontWeight: null,
      },
    },
  },
);

export default createAppContainer(DrawerNavigation);
