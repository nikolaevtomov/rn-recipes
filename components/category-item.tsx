import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {NavigationParams} from 'react-navigation';

// import Fonts from '../utils/fonts';
import {Category} from '../utils/constants';

interface Props {
  item: Category;
}

const CategoryItem = (
  navigation: NavigationParams,
): React.FunctionComponent<Props> => ({item}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate({routeName: 'meals'});
      }}>
      <View>
        <Text>{item.name}</Text>
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

export default CategoryItem;
