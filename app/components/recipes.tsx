import React from 'react';
import {FlatList} from 'react-native';
import {NavigationParams, NavigationNavigatorProps} from 'react-navigation';
import {connect} from 'react-redux';

import {FILTER_ENUM} from '../reducers/filters';
import {RecipeProps, StoreState} from '../types';
import Recipe from './recipe';

interface OwnProps {
  navigation: NavigationParams;
}

interface StateProps {
  recipes: Array<RecipeProps>;
  filters: Array<FILTER_ENUM>;
}

type Props = OwnProps & StateProps;

const Recipes: React.FunctionComponent<Props> & NavigationNavigatorProps = ({
  navigation,
  recipes,
  filters,
}) => {
  const catId = navigation.getParam('id');

  const filteredIDs = [
    ...new Set(
      filters
        .map((filter: string) =>
          recipes
            .filter((recipe: RecipeProps) => recipe[filter as FILTER_ENUM])
            .map((recipe: RecipeProps) => recipe.id),
        )
        .flat(1),
    ),
  ]; // ['m1', 'm2', 'm3', ...]

  const filteredByCategory = recipes.filter((item: RecipeProps) =>
    item.categoryIds.includes(catId),
  ); // [{id: 'm1'...}, {...}, ...]

  return (
    <FlatList
      data={filteredByCategory.filter((item: RecipeProps) =>
        filteredIDs.includes(item.id),
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
  filters: state.filters,
});

export default connect(mapStateToProps)(Recipes);
