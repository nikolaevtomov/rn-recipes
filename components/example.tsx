import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Fonts from '../utils/fonts';
import Styles from '../utils/styles';

interface Props {}

const Example: React.FunctionComponent<Props> = () => {
  return (
    <View style={Styles.screen}>
      <Text style={Fonts.script}>Example</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

export default Example;
