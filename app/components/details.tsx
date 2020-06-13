import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {NavigationParams, NavigationNavigatorProps} from 'react-navigation';

import Fonts from '../utils/fonts';
import Styles from '../utils/styles';

interface Props {
  navigation: NavigationParams;
}

const MealDetails: React.FunctionComponent<Props> &
  NavigationNavigatorProps = ({navigation}) => {
  const recipe = navigation.getParam('recipe');
  return (
    <View style={Styles.screen}>
      <ImageBackground source={{uri: recipe.image}} style={styles.bgImage}>
        <View style={styles.titleContainer}>
          <Text style={{...styles.title, ...Fonts.delius}} numberOfLines={1}>
            {recipe.title}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

MealDetails.navigationOptions = ({navigation}: NavigationParams) => ({
  headerTitle: navigation.state.params.recipe.title,
});

const styles = StyleSheet.create({
  bgImage: {},
  titleContainer: {},
  title: {},
});

export default MealDetails;
