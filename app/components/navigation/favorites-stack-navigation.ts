import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {defaultStackNavOptions} from './categories-stack-navigation';
import Favorites from '../favorites';
import Details from '../details';

const FavoritesStackNavigation = createStackNavigator(
  {
    favorites: {
      screen: Favorites,
      navigationOptions: {
        // headerTitle: 'Favorites',
      },
    },
    details: {screen: Details},
  },
  defaultStackNavOptions,
);

export default createAppContainer(FavoritesStackNavigation);
