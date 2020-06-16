import React from 'react';
import {FlatList} from 'react-native';
import {NavigationParams, NavigationNavigatorProps} from 'react-navigation';
import {connect} from 'react-redux';
import {Item, HeaderButtonsProps} from 'react-navigation-header-buttons';

import HeaderButtons from './header-buttons';
import {CategoryProp, StoreState} from '../types';
import Category from './category';
import {COLOURS} from '../utils/colours';

interface OwnProps {
  navigation: NavigationParams;
}

interface StateProps {
  categories: Array<CategoryProp>;
}

type Props = OwnProps & StateProps;

const Categories: React.FunctionComponent<Props> & NavigationNavigatorProps = ({
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

Categories.navigationOptions = ({
  navigation,
  _categories,
  ...rest
}: Props & NavigationParams & HeaderButtonsProps) => ({
  headerTitle: 'Categories',
  headerLeft: () => (
    <HeaderButtons {...rest}>
      <Item
        title="Menu"
        iconSize={30}
        color={COLOURS.black}
        iconName="navicon"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const mapStateToProps = (state: StoreState): StateProps => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Categories);
