import React, { Component } from 'react';
import { Text, Image,Alert,TouchableHighlight  } from 'react-native';
import { Container, Content, CardItem, Card, Left, Button, Right } from 'native-base';

export default class CustomRadioButtonExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    {Array.from({ length: 9 }, (v, i) => i)
                        .map((el, i) => {
                            return (
                                <Card key={i}>

                                    <CardItem cardBody>
                                        <Image source={require("../../assets/images/blank.jpeg")} style={{ height: 200, width: null, flex: 1 }} />
                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            <TouchableHighlight
                                                    onPress={()=>{
                                                        Alert.alert(
                                                            'Clicked Item',
                                                            'About to show More Info',
                                                            [
                                                            {
                                                                text: 'Cancel',
                                                                onPress: () => console.log('Cancel Pressed'),
                                                                style: 'cancel',
                                                              },
                                                              {text: 'OK', onPress: () => console.log('OK Pressed')},
                                                            ],
                                                            {cancelable: false},
                                                          );
                                                       }}
                                            >
                                                <Text>More Info</Text>
                                            </TouchableHighlight>

                                        </Left>

                                        <Right>
                                            
                                            <Button
                                                style={{ backgroundColor: "#B71C1C", width: 100, alignItems: "center", justifyContent: "center" }}
                                                onPress={()=>{
                                                    Alert.alert(
                                                        'Clicked Item',
                                                        'About to show RSVP',
                                                        [
                                                        {
                                                            text: 'Cancel',
                                                            onPress: () => console.log('Cancel Pressed'),
                                                            style: 'cancel',
                                                          },
                                                          {text: 'OK', onPress: () => console.log('OK Pressed')},
                                                        ],
                                                        {cancelable: false},
                                                      );
                                                   }} 
                                            >
                                                <Text style={{ color: "white" }}>RSVP</Text>
                                            </Button>
                                        </Right>
                                    </CardItem>
                                </Card>
                            )
                        })}

                </Content>
            </Container>
        );
    }
}