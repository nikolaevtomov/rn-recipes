import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {NavigationParams} from 'react-navigation';

import {CategoryProp} from '../types';
import Fonts from '../utils/fonts';
import {COLOURS} from '../utils/colours';

interface Props {
  item: CategoryProp;
}

const CategoryItem = (
  navigation: NavigationParams,
): React.FunctionComponent<Props> => ({item}) => {
  return (
    <TouchableOpacity
      style={{...styles.item, backgroundColor: item.color}}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate({
          routeName: 'recipes',
          params: {id: item.id, name: item.name},
        });
      }}>
      <View>
        <Text style={{...Fonts.delius, ...styles.text}}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 14,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 14,
    height: 150,
    borderRadius: 3,
    shadowColor: COLOURS.black,
    shadowOpacity: 0.24,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 8,
    elevation: 3,
  },
  text: {
    fontSize: 20,
  },
});

export default CategoryItem;
