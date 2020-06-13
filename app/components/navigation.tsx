import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Categories from './categories';
import Recipes from './recipes';
import Details from './details';
import Fonts from '../utils/fonts';
import {COLOURS} from '../utils/colours';

const Navigation = createStackNavigator(
  {
    categories: {screen: Categories},
    recipes: Recipes,
    details: Details,
  },
  {
    initialRouteName: 'categories',
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
    },
  },
);

export default createAppContainer(Navigation);
