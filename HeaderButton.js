import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from './constants/Colors';
import { Platform } from 'react-native';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

const CustomHeaderButton = (props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    {...props}
  />
);

export const CustomHeaderButtons = (props) => {
  return <HeaderButtons HeaderButtonComponent={CustomHeaderButton} {...props} />;
};
export { Item } from 'react-navigation-header-buttons';