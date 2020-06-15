import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import MainStackNavigation from './main-stack-navigation';
import FavoritesStackNavigation from './favorites-stack-navigation';
import {COLOURS} from '../utils/colours';

const tabScreenConfig = {
  categories: {
    screen: MainStackNavigation,
    navigationOptions: {
      tabBarLabel: 'Categories',
      tabBarIcon: (props: BottomTabBarProps & {tintColor: string}) => (
        <Icon color={props.tintColor} name="cutlery" size={26} />
      ),
    },
  },
  favorites: {
    screen: FavoritesStackNavigation,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: (props: BottomTabBarProps & {tintColor: string}) => (
        <Icon color={props.tintColor} name="star" size={26} />
      ),
    },
  },
};

const TabNavigation =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        inactiveColor: COLOURS.black,
        labeled: false,
        barStyle: {backgroundColor: COLOURS.dark},
        shifting: false,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          showLabel: false,
          activeTintColor: COLOURS.black,
        },
      });

export default createAppContainer(TabNavigation);
