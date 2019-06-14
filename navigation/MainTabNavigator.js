import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UserScreen from '../screens/UserScreen'
import {Icon} from 'native-base'
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `location${focused ? '' : '-outline'}`
          : 'home'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  header:null,
  tabBarLabel: 'Give',
  tabBarIcon: ({ focused }) => (
    <Icon type="FontAwesome" name="dollar"
     style={{fontSize:26,
      color:focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    } />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Contacts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'location' : 'location'}
    />
  ),
};


const UserStack=createStackNavigator({
  User:UserScreen
})

UserStack.navigationOptions = {
  tabBarLabel: 'User',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'user' : 'user'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack:{screen:HomeStack},
  LinksStack:{screen:LinksStack},
  SettingsStack:{screen:SettingsStack},
  UserStack:{screen:UserStack}
},{
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
        color:"#424242"
      },
    }

});
