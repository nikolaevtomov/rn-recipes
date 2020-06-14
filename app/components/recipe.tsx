import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {NavigationParams} from 'react-navigation';

import {RecipeProps} from '../types';
import Fonts from '../utils/fonts';
import Styles from '../utils/styles';
import {COLOURS} from '../utils/colours';

interface Props {
  item: RecipeProps;
}

const Recipe = (
  navigation: NavigationParams,
): React.FunctionComponent<Props> => ({item}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate({routeName: 'details', params: {recipe: item}});
      }}>
      <View style={Styles.center}>
        <ImageBackground source={{uri: item.imageUrl}} style={styles.bgImage}>
          <View style={styles.titleContainer}>
            <Text style={{...styles.title, ...Fonts.delius}} numberOfLines={1}>
              {item.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 14,
    height: 200,
    borderRadius: 4,
    overflow: 'hidden',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    color: COLOURS.white,
    textAlign: 'center',
  },
});

export default Recipe;
