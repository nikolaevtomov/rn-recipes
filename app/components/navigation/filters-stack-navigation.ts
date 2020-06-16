import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {defaultStackNavOptions} from './categories-stack-navigation';
import Filters from '../filters';

const FiltersStackNavigation = createStackNavigator(
  {
    favorites: {
      screen: Filters,
    },
  },
  defaultStackNavOptions,
);

export default createAppContainer(FiltersStackNavigation);
