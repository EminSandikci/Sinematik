
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Color from '../utils/color';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from '../screens/mainScreen';
import Kampanya from '../screens/kampanya';
import Sinemalar from '../screens/sinemalar';
 
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../images/drawer.png')}
            style={{ width: 20, height: 20, marginLeft: 15 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Filmler',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.inactiveColor,
      },
      headerTintColor: Color.tabBackgroundColor,
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }),
  },
});
 
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Kampanya,
    navigationOptions: ({ navigation }) => ({
      title: 'Kampanyalar',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.inactiveColor,
      },
      headerTintColor: Color.tabBackgroundColor,
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }),
  },
});
 
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Sinemalar,
    navigationOptions: ({ navigation }) => ({
      title: 'CGV Arthouse Sinemaları',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.inactiveColor,
      },
      headerTintColor: Color.tabBackgroundColor,
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }),
  },
});

const costumDrawerComponent = (props) => (
  <SafeAreaView style={{flex:1}}>
    <View style={{flex:1,flexDirection:'column',backgroundColor: Color.inactiveColor}}>
      <View style={{flex:3,height:200,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../images/movie.png')} style={{width:90,height:90}}/>
      </View>
      <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-start'}}>
        <Text style={{fontWeight:'bold',marginLeft:15,marginBottom:10,fontSize:30,color: Color.tabBackgroundColor}}>Sinematik</Text>
      </View>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
);
 
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  MainScreen: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Filmler',
      drawerIcon: <Image source={require('../images/film.png')} style={{width:20,height:20}}/>
    },
  },
  Yakinda: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Kampanyalar',
      drawerIcon: <Image source={require('../images/campaign.png')} style={{width:20,height:20}}/>
    },
  },
  Populer: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'CGV Arthouse Sinemaları',
      drawerIcon: <Image source={require('../images/sinema.png')} style={{width:20,height:20}}/>
    },
  },
},{
  contentOptions:{
    activeTintColor: Color.activeColor,
  },
  contentComponent:costumDrawerComponent
}
);
 
export default createAppContainer(DrawerNavigatorExample);