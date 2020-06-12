import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Categories from './categories';
import Meals from './meals';
import MealDetails from './meal-details';

const Navigation = createStackNavigator(
  {
    categories: {screen: Categories},
    meals: Meals,
    details: MealDetails,
  },
  {
    initialRouteName: 'categories',
  },
);

export default createAppContainer(Navigation);
