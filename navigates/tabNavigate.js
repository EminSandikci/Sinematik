import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Color from '../utils/color';
import Vizyonda from '../screens/vizyonda';
import Yakinda from '../screens/yakinda';
import Populer from '../screens/populer';

class HomeScreen extends React.Component {
  render() {
    return (
      <Vizyonda />
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <Yakinda />
    );
  }
}

class DetailsScreen extends React.Component {
    render() {
      return (
        <Populer />
      );
    }
  }

const TabNavigator = createMaterialTopTabNavigator({
  Vizyonda: HomeScreen,
  Yakında: SettingsScreen,
  Popüler: DetailsScreen,
},
{
    tabBarOptions: {
        activeTintColor:Color.activeColor,
        inactiveTintColor:Color.inactiveColor,
        indicatorStyle:{
            backgroundColor:Color.activeColor
        },
        style: {  
            backgroundColor: Color.tabBackgroundColor,
        },
        labelStyle:{
            fontWeight:'bold'
        } 
      }
});

export default createAppContainer(TabNavigator);