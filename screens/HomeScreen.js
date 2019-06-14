import React, { Component } from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation'
import {Constants} from 'expo'
import { Container, Header, Content, Button, Text } from 'native-base';
import Events from './Home/Events'
import Connect from './Home/Connect'
import Home from './Home/Home'


const App=createMaterialTopTabNavigator({
  Home:{
    screen:Home,},
  Events:{screen:Events},
  Connect:{screen:Connect}
},{
  tabBarOptions:{
    style:{
      backgroundColor:"#fff",
    },
    indicatorStyle:{
      backgroundColor:"#424242"
    },
    labelStyle:{
      color:"#424242"
    }
  }
})

App.navigationOptions={
    header: null,
}


export default App