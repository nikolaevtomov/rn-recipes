import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Categories from './categories';
import Recipes from './recipes';
import Details from './details';
import Fonts from '../utils/fonts';
import {COLOURS} from '../utils/colours';

export const defaultStackNavOptions = {
  // initialRouteName: 'categories',
  defaultNavigationOptions: {
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: COLOURS.ternary,
    },
    headerTintColor: COLOURS.white,
    headerTitleStyle: {
      ...Fonts.script,
      textAlign: 'center',
    },
    cardStyle: {
      backgroundColor: COLOURS.white,
    },
  },
};

const Navigation = createStackNavigator(
  {
    categories: {screen: Categories},
    recipes: Recipes,
    details: Details,
  },
  defaultStackNavOptions,
);

export default createAppContainer(Navigation);
