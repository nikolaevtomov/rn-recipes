import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {NavigationParams, NavigationNavigatorProps} from 'react-navigation';
import {connect} from 'react-redux';
import {Item, HeaderButtonsProps} from 'react-navigation-header-buttons';

import HeaderButtons from './header-buttons';
import {COLOURS} from '../utils/colours';
import Styles from '../utils/styles';
import Fonts from '../utils/fonts';
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
  const recipesList = recipes.filter((item: RecipeProps) =>
    favorites.includes(item.id),
  );

  return recipesList.length ? (
    <FlatList
      data={recipesList}
      keyExtractor={(item: RecipeProps) => item.id}
      renderItem={Recipe(navigation)}
      numColumns={1}
    />
  ) : (
    <View style={Styles.center}>
      <Text style={Fonts.script}>No saved favorites yet</Text>
    </View>
  );
};

Favorites.navigationOptions = ({
  navigation,
  _categories,
  ...rest
}: Props & NavigationParams & HeaderButtonsProps) => ({
  headerTitle: 'Favorites',
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
  recipes: state.recipes,
  favorites: state.favorites,
});

export default connect(mapStateToProps)(Favorites);
