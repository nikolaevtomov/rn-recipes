import React from 'react';
import {FlatList} from 'react-native';
import {NavigationParams} from 'react-navigation';
import {connect} from 'react-redux';

// import Fonts from '../utils/fonts';
// import Styles from '../utils/styles';
import {CategoryProp, StoreState} from '../types';
import Category from './category';

interface OwnProps {
  navigation: NavigationParams;
}

interface StateProps {
  categories: Array<CategoryProp>;
}

type Props = OwnProps & StateProps;

const Categories: React.FunctionComponent<Props> = ({
  navigation,
  categories,
}) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item: CategoryProp) => item.id}
      renderItem={Category(navigation)}
      numColumns={2}
    />
  );
};

// const styles = StyleSheet.create({
//   categories: {},
// });

const mapStateToProps = (state: StoreState): StateProps => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Categories);
