import React from 'react';
import {View, Text} from 'react-native';
import Fonts from '../utils/fonts';
import Styles from '../utils/styles';

interface Props {}

const Filters: React.FunctionComponent<Props> = () => {
  return (
    <View style={Styles.screen}>
      <Text style={Fonts.script}>Filters</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   screen: {},
// });

export default Filters;
