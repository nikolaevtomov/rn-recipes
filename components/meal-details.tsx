import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationParams} from 'react-navigation';

import Fonts from '../utils/fonts';
import Styles from '../utils/styles';

interface Props {
  navigation: NavigationParams;
}

const MealDetails: React.FunctionComponent<Props> = ({navigation}) => {
  return (
    <View style={Styles.screen}>
      <Text style={Fonts.script}>MealDetails</Text>
      <Button
        title="Go back to Categories"
        onPress={() => {
          navigation.pop();
        }}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   screen: {},
// });

export default MealDetails;
