import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native';

import Categories from '../categories';
import Recipes from '../recipes';
import Details from '../details';
import Fonts from '../../utils/fonts';
import {COLOURS} from '../../utils/colours';

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
      ...(Platform.OS === 'android' && {paddingRight: 30}),
    },
    cardStyle: {
      backgroundColor: COLOURS.white,
    },
  },
};

const CategoriesStackNavigation = createStackNavigator(
  {
    categories: {screen: Categories},
    recipes: Recipes,
    details: Details,
  },
  defaultStackNavOptions,
);

export default createAppContainer(CategoriesStackNavigation);
