import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer} from "react-navigation";
import AppScreen from '../screen/AppScreen';
import Colors from '../constants/Colors';


const defaultStackNavOptions = {
  headerBackTitle: 'Back',
  headerStyle: {
  backgroundColor: Colors.primaryColor
  },
  headerTintColor: 'white'
};


const MainNavigator = createStackNavigator({
  App:AppScreen
},{
    defaultNavigationOptions:defaultStackNavOptions
});

export default createAppContainer(MainNavigator);