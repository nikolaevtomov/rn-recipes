import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import StackNavigation from './stack-navigation';
import Favorites from './favorites';
// import Fonts from '../utils/fonts';
// import {COLOURS} from '../utils/colours';

const TabNavigation = createBottomTabNavigator(
  {
    categories: StackNavigation,
    favorites: Favorites,
  },
  {
    defaultNavigationOptions: {},
  },
);

export default createAppContainer(TabNavigation);
