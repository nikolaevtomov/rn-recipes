import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {NavigationParams} from 'react-navigation';

import {RecipeProps} from '../types';

interface Props {
  item: RecipeProps;
}

const Recipe = (
  navigation: NavigationParams,
): React.FunctionComponent<Props> => ({item}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate({routeName: 'details', params: {recipe: item}});
      }}>
      <View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 14,
    height: 150,
    borderWidth: 1,
    borderColor: 'orange',
  },
});

export default Recipe;
