import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {NavigationParams, NavigationNavigatorProps} from 'react-navigation';
import {connect} from 'react-redux';

import Fonts from '../utils/fonts';
import {toggleFavorite} from '../actions';

interface OwnProps {
  navigation: NavigationParams;
}

interface DispatchProps {
  toggleFavs: typeof toggleFavorite;
}

type Props = OwnProps & DispatchProps;

const MealDetails: React.FunctionComponent<Props> &
  NavigationNavigatorProps = ({navigation, toggleFavs}) => {
  // const mealId = navigation.getParam('id');

  useEffect(() => {
    navigation.setParams({toggleee: toggleFavs});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recipe = navigation.getParam('recipe');
  return (
    <ScrollView>
      <Image source={{uri: recipe.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <View>
          <Text style={{...Fonts.script, ...styles.info}}>
            {recipe.duration}m
          </Text>
        </View>
        <View>
          <Text style={{...Fonts.script, ...styles.info}}>
            {recipe.complexity.toUpperCase()}
          </Text>
        </View>
        <View>
          <Text style={{...Fonts.script, ...styles.info}}>
            {recipe.affordability.toUpperCase()}
          </Text>
        </View>
      </View>

      <Text style={{...styles.title, ...Fonts.script}}>Ingredients</Text>

      {recipe.ingredients.map((ingredient: string, index: number) => (
        <View key={index} style={styles.listItem}>
          <Text style={{...Fonts.delius, ...styles.ingredient}}>
            {ingredient}
          </Text>
        </View>
      ))}

      <Text style={{...styles.title, ...Fonts.script}}>Steps</Text>

      {recipe.steps.map((step: string, index: number) => (
        <View key={index} style={styles.listItem}>
          <Text style={{...Fonts.delius, ...styles.ingredient}}>{step}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

MealDetails.navigationOptions = ({navigation}: NavigationParams) => {
  // console.log(navigation);
  return {
    headerTitle: navigation.state.params.recipe.title,
    headerRight: () => (
      <View>
        <Text
          onPress={() =>
            navigation.state.params.toggleee(navigation.state.params.recipe.id)
          }>
          **Flaf!**
        </Text>
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  info: {
    fontSize: 18,
  },
  ingredient: {
    fontSize: 18,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginHorizontal: 16,
    padding: 10,
  },
});

export default connect(null, {
  toggleFavs: toggleFavorite,
})(MealDetails);
