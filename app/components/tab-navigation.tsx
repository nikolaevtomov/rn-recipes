import React from 'react';
import {createAppContainer} from 'react-navigation';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import StackNavigation from './stack-navigation';
import Favorites from './favorites';
// import Fonts from '../utils/fonts';
import {COLOURS} from '../utils/colours';

const TabNavigation = createBottomTabNavigator(
  {
    categories: {
      screen: StackNavigation,
      navigationOptions: {
        tabBarIcon: (props: BottomTabBarProps) => (
          <Icon {...props} name="cutlery" size={30} />
        ),
      },
    },
    favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarIcon: (props: BottomTabBarProps) => (
          <Icon {...props} name="star" size={30} selectionColor={'red'} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: COLOURS.black,
    },
  },
);

export default createAppContainer(TabNavigation);
