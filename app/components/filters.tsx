import React from 'react';
import {View, Text} from 'react-native';
import {Item, HeaderButtonsProps} from 'react-navigation-header-buttons';
import {NavigationParams, NavigationNavigatorProps} from 'react-navigation';

import HeaderButtons from './header-buttons';
import Fonts from '../utils/fonts';
import Styles from '../utils/styles';
import {COLOURS} from '../utils/colours';

interface Props {}

const Filters: React.FunctionComponent<Props> &
  NavigationNavigatorProps = () => {
  return (
    <View style={Styles.center}>
      <Text style={Fonts.script}>Filters</Text>
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

export default Filters;
