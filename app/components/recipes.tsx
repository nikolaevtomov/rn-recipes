import React from 'react';
import {FlatList} from 'react-native';
import {NavigationParams, NavigationNavigatorProps} from 'react-navigation';
import {connect} from 'react-redux';

import {RecipeProps, StoreState} from '../types';
import Recipe from './recipe';

interface OwnProps {
  navigation: NavigationParams;
}

interface StateProps {
  recipes: Array<RecipeProps>;
}

type Props = OwnProps & StateProps;

const Recipes: React.FunctionComponent<Props> & NavigationNavigatorProps = ({
  navigation,
  recipes,
}) => {
  const catId = navigation.getParam('id');

  return (
    <FlatList
      data={recipes.filter((item: RecipeProps) =>
        item.categoryIds.includes(catId),
      )}
      keyExtractor={(item: RecipeProps) => item.id}
      renderItem={Recipe(navigation)}
      numColumns={1}
    />
  );
};

Recipes.navigationOptions = ({navigation}: NavigationParams) => ({
  headerTitle: navigation.state.params.name,
});

const mapStateToProps = (state: StoreState): StateProps => ({
  recipes: state.recipes,
});

export default connect(mapStateToProps)(Recipes);
