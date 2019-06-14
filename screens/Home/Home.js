import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'
import { Container, Header, Content, Text, Card, CardItem, Left, Body, Thumbnail } from 'native-base';
import { Button, Alert } from 'react-native'
import Cardi from '../Components/Card'
import { TouchableHighlight } from 'react-native-gesture-handler';

const image = require("../../assets/images/blank.jpeg")

class ButtonFullExample extends Component {
    onClickHandler = (props) => {
        // Works on both iOS and Android
        this.props.navigation.navigate('DetailPage')
    }

    render() {
        return (
            <Container>
                <Content>
                    <Cardi onClick={this.onClickHandler} />
                    <Cardi />
                </Content>
            </Container>
        );
    }
}

class DetailPage extends Component {
    render() {
        return (
            <Container>
                <Content>
                <Cardi />
                  {  Array.from({length: 5}, (v, i) => i)
                  .map((el,i)=>{
                    return(
                    <Card key={i}>
                   

                   <TouchableHighlight
                   onPress={()=>{
                    Alert.alert(
                        'Clicked Item',
                        'About to change video source',
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
                    <CardItem>
                        <Left>
                            <Thumbnail source={image} style={{borderRadius:0}}/>
                            <Body>
                                <Text>Part {i}</Text>
                                <Text note>SubTitle</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    </TouchableHighlight>
                </Card>
                
                )
                  })

                }
                  


                </Content>
            </Container>
        );
    }
}

const Home = createStackNavigator({
    Main: {
        screen: ButtonFullExample
    },
    DetailPage: {
        screen: DetailPage
    }

}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }

    })


export default Home