import React from 'react';
import {createStackNavigator} from 'react-navigation'
import RegisterScreen from './User/Register'
import LoginScreen from './User/Login'
import PasswordRecoveryScreen from './User/ForgotPassword'

const UserStack =createStackNavigator({
    Login:{
        screen:LoginScreen
    },
    Register:{
        screen:RegisterScreen
    },
    PasswordRecover:{
        screen:PasswordRecoveryScreen
    }
},{
    initialRouteName:"Login"
})

UserStack.navigationOptions={
    header:null
}

export default UserStack;