import React from 'react';
import {
  HeaderButton,
  HeaderButtons,
  HeaderButtonProps,
  HeaderButtonsProps,
} from 'react-navigation-header-buttons';
import MaterialIcons from 'react-native-vector-icons/FontAwesome';

import {COLOURS} from '../utils/colours';

const MaterialHeaderButton = (props: HeaderButtonProps) => (
  <HeaderButton
    IconComponent={MaterialIcons}
    iconSize={23}
    color={COLOURS.yellow}
    {...props}
  />
);

const MaterialHeaderButtons = (props: HeaderButtonsProps) => (
  <HeaderButtons HeaderButtonComponent={MaterialHeaderButton} {...props} />
);

export default MaterialHeaderButtons;
