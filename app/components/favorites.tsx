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
  favorites: Array<string>;
}

type Props = OwnProps & StateProps;

const Favorites: React.FunctionComponent<Props> & NavigationNavigatorProps = ({
  navigation,
  recipes,
  favorites,
}) => {
  return (
    <FlatList
      data={recipes.filter((item: RecipeProps) => favorites.includes(item.id))}
      keyExtractor={(item: RecipeProps) => item.id}
      renderItem={Recipe(navigation)}
      numColumns={1}
    />
  );
};

const mapStateToProps = (state: StoreState): StateProps => ({
  recipes: state.recipes,
  favorites: state.favorites,
});

export default connect(mapStateToProps)(Favorites);
