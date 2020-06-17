import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import {Item, HeaderButtonsProps} from 'react-navigation-header-buttons';
import {NavigationParams, NavigationNavigatorProps} from 'react-navigation';
import {connect} from 'react-redux';

import HeaderButtons from './header-buttons';
import Fonts from '../utils/fonts';
import {setFilters, resetFilters} from '../actions';
import {FILTER_ENUM} from '../reducers/filters';
// import Styles from '../utils/styles';
import {COLOURS} from '../utils/colours';
import {StoreState} from 'app/types';

interface DispatchProps {
  setFiltersValue: typeof setFilters;
  resetFiltersValue: typeof resetFilters;
}

interface StateProps {
  filters: Array<FILTER_ENUM>;
}

type Props = DispatchProps & StateProps;

const Filters: React.FunctionComponent<Props> & NavigationNavigatorProps = ({
  filters,
  setFiltersValue,
  resetFiltersValue,
}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>All</Text>
        <Switch
          trackColor={{true: COLOURS.secondary, false: ''}}
          thumbColor={COLOURS.black}
          onValueChange={() => resetFiltersValue()}
          value={!filters.length}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Gluten free</Text>
        <Switch
          trackColor={{true: COLOURS.secondary, false: ''}}
          thumbColor={COLOURS.black}
          onValueChange={() => setFiltersValue(FILTER_ENUM.isGlutenFree)}
          value={filters.includes(FILTER_ENUM.isGlutenFree)}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Vegan</Text>
        <Switch
          trackColor={{true: COLOURS.secondary, false: COLOURS.primary}}
          thumbColor={COLOURS.black}
          onValueChange={() => setFiltersValue(FILTER_ENUM.isVegan)}
          value={filters.includes(FILTER_ENUM.isVegan)}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Vegetarian</Text>
        <Switch
          trackColor={{true: COLOURS.secondary, false: COLOURS.primary}}
          thumbColor={COLOURS.black}
          onValueChange={() => setFiltersValue(FILTER_ENUM.isVegetarian)}
          value={filters.includes(FILTER_ENUM.isVegetarian)}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Lactose free</Text>
        <Switch
          trackColor={{true: COLOURS.secondary, false: COLOURS.primary}}
          thumbColor={COLOURS.black}
          onValueChange={() => setFiltersValue(FILTER_ENUM.isLactoseFree)}
          value={filters.includes(FILTER_ENUM.isLactoseFree)}
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

const mapStateToProps = (state: StoreState): StateProps => ({
  filters: state.filters,
});

export default connect(mapStateToProps, {
  setFiltersValue: setFilters,
  resetFiltersValue: resetFilters,
})(Filters);
