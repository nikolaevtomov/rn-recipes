import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Categories from './categories';
import Recipes from './recipes';
import Details from './details';
// import Fonts from '../utils/fonts';
// import {COLOURS} from '../utils/colours';

const TabNavigation = createBottomTabNavigator(
  {
    categories: {screen: Categories},
    recipes: Recipes,
    details: Details,
  },
  {
    defaultNavigationOptions: {},
  },
);

export default createAppContainer(TabNavigation);
