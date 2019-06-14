import React, { Component } from 'react';
import { Image, Alert,TouchableHighlight } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const image = require("../../assets/images/blank.jpeg")
export default class CardImageExample extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return (

            <Card style={{ padding: 0, margin: 0 }} >
                <TouchableHighlight onPress={
                  this.props.onClick
                }>
                <CardItem style={{ padding: 0, margin: 0 }}
                    onPress={this.props.onClick}>

                    <Body style={{ margin: 0, padding: 0 }} >
                        <Image source={
                            image
                            // uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'
                        } style={{ height: 250, width: '100%', flex: 1 }} />
                        <Text>Title</Text>
                        <Text note>Sub title</Text>
                    </Body>
                </CardItem>

                </TouchableHighlight>
            </Card>

        );
    }
}