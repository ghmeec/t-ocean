import React from 'react';
import { createAppContainer, createSwitchNavigator, Header } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

const App= createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    
  },{
  })
);


export default App;
