import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationParams} from 'react-navigation';

import Fonts from '../utils/fonts';
import Styles from '../utils/styles';

interface Props {
  navigation: NavigationParams;
}

const Meals: React.FunctionComponent<Props> = ({navigation}) => {
  return (
    <View style={Styles.screen}>
      <Text style={Fonts.script}>Meals</Text>
      <Button
        title="Go to Meal Details"
        onPress={() => {
          navigation.navigate({
            routeName: 'details',
          });
        }}
      />
      <Button
        title="Go to back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   screen: {},
// });

export default Meals;
