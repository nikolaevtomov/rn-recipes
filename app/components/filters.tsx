import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import {Item, HeaderButtonsProps} from 'react-navigation-header-buttons';
import {NavigationParams, NavigationNavigatorProps} from 'react-navigation';

import HeaderButtons from './header-buttons';
import Fonts from '../utils/fonts';
// import Styles from '../utils/styles';
import {COLOURS} from '../utils/colours';

interface Props {}

const Filters: React.FunctionComponent<Props> &
  NavigationNavigatorProps = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Gluten free</Text>
        <Switch
          trackColor={{true: COLOURS.secondary, false: ''}}
          thumbColor={COLOURS.black}
          onValueChange={() => {}}
          value={false}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Vegan</Text>
        <Switch
          trackColor={{true: COLOURS.secondary, false: COLOURS.primary}}
          thumbColor={COLOURS.black}
          onValueChange={() => {}}
          value={true}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Vegetarian</Text>
        <Switch
          trackColor={{true: COLOURS.secondary, false: COLOURS.primary}}
          thumbColor={COLOURS.black}
          onValueChange={() => {}}
          value={true}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Lactose free</Text>
        <Switch
          trackColor={{true: COLOURS.secondary, false: COLOURS.primary}}
          thumbColor={COLOURS.black}
          onValueChange={() => {}}
          value={true}
        />
      </View>
    </View>
  );
};

Filters.navigationOptions = ({
  navigation,
  _categories,
  ...rest
}: Props & NavigationParams & HeaderButtonsProps) => ({
  headerTitle: 'Filters',
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 24,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  switchLabel: {
    ...Fonts.script,
    fontSize: 20,
  },
});

export default Filters;
