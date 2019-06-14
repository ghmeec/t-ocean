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

    handleRegistration = () => {

        Alert.alert(
          'Handling Registration',
          'About to Register a user',
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
                <Content contentContainerStyle={{}} >

                    <Form style={{ margin: 10, padding: 0 }}>
                        <View style={{ alignItems: "center" }}>
                            <Icon type="FontAwesome" name="user-plus" style={{ fontSize: 100, color: "#424242" }} />
                        </View>

                        <Item stackedLabel>
                            <Label>Full Name</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Phone Number</Label>
                            <Input />
                        </Item>

                        <Item stackedLabel>
                            <Label>Email</Label>
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
                        onPress={this.handleRegistration}
                        >
                            <Text>
                                Register
                            </Text>
                        </Button>
                       
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                            <Button transparent
                                onPress={() => {
                                    console.log("Let go back")
                                    this.props.navigation.goBack()
                                }}
                            >
                                <Text>Already Registered? Login me!</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}




