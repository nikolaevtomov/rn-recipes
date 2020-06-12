import React from 'react';
import {FlatList} from 'react-native';
import {NavigationParams} from 'react-navigation';

// import Fonts from '../utils/fonts';
// import Styles from '../utils/styles';
import {CATEGORIES, Category} from '../utils/constants';
import CategoryItem from './category-item';

interface Props {
  navigation: NavigationParams;
}

const Categories: React.FunctionComponent<Props> = ({navigation}) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item: Category) => item.id}
      renderItem={CategoryItem(navigation)}
      numColumns={2}
    />
  );
};

// const styles = StyleSheet.create({
//   categories: {},
// });

export default Categories;
