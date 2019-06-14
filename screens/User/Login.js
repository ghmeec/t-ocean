import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, H1, H3, Button, Text, View, Icon } from 'native-base';
import {Alert} from 'react-native'
export default class LoginForm extends Component {
    static navigationOptions = {
        header: null,
        title: 'Giving',
        headerTitleStyle:
            { textAlign: 'center', alignSelf: 'center' },
        headerStyle: {

        },
    };

    handleLogin = () => {

        Alert.alert(
          'Handling Login',
          'About to login',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false },
        );
      }


    render() {
        return (
            <Container>
                <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }} >

                    <Form style={{ margin: 10, padding: 0 }}>
                        <View style={{ alignItems: "center" }}>
                            <Icon type="FontAwesome" name="user-circle" style={{ fontSize: 100, color: "#424242" }} />
                            <H1>Welcome !</H1>
                            <H3 >(The Ocean Church Tanzania)</H3>
                        </View>

                        <Item stackedLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Password</Label>
                            <Input />
                        </Item>

                        <Button style={{
                            backgroundColor: "#B71C1C",
                            width: "95%",
                            marginTop: 30,
                            alignItems: "center",
                            justifyContent: "center",
                            alignSelf: "flex-end"
                        }}
                        onPress={this.handleLogin}
                        >
                            <Text>
                                SIGN IN
                            </Text>
                        </Button>
                        <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                            <Button transparent
                            onPress={()=>{
                                console.log("Go to register")
                                this.props.navigation.navigate('Register')
                            }}
                            >
                                <Text>Register</Text>
                            </Button>
                            <Button transparent
                            onPress={()=>{
                                console.log("Go to Password Recovery")
                                this.props.navigation.navigate('PasswordRecover')
                            }}
                            >
                                <Text>Forgot Password</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}




