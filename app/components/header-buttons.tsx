import React from 'react';
import {
  HeaderButton,
  HeaderButtons,
  HeaderButtonProps,
  HeaderButtonsProps,
} from 'react-navigation-header-buttons';
import MaterialIcons from 'react-native-vector-icons/FontAwesome';

const MaterialHeaderButton = (props: HeaderButtonProps) => (
  <HeaderButton IconComponent={MaterialIcons} iconSize={23} {...props} />
);

const MaterialHeaderButtons = (props: HeaderButtonsProps) => (
  <HeaderButtons HeaderButtonComponent={MaterialHeaderButton} {...props} />
);

export default MaterialHeaderButtons;
