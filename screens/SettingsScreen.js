import React, { Component } from 'react';
import { Container, Content, Text,List, ListItem, Icon, Left, Body, Right, Switch ,Button} from 'native-base';
import { View } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid'
import { MapView } from 'expo'
import {Feather,Entypo} from '@expo/vector-icons'
export default class InlineLabelExample extends Component {

  static navigationOptions = {
    header: null,
    title: 'Giving',
    headerTitleStyle:
      { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {

    },
  }

  render() {
    return (
      <Container>
        <Content>
          <MapView
            style={{ height: 300 }}
            initialRegion={{
              latitude: -6.7963,
              longitude: 39.2847,
              latitudeDelta: 0.0122,
              longitudeDelta: 0.0121,
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: -6.7963,
                longitude: 39.2847,
              }}
              title="The Ocean Church Tanzania"
              description="Description"
            />
          </MapView>

       
            <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="home" />
              </Button>
            </Left>
            <Body>
              <Text>Office</Text>
              <Text note>Adress</Text>
            </Body>
          
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Entypo name="email" size={20} style={{color:"white"}}/>
              </Button>
            </Left>
            <Body>
              <Text>Email</Text>
              <Text note>email@gmail.com</Text>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#689F38" }}>
                <Feather name="phone-call" size={20} style={{color:"white"}}/>
              </Button>
            </Left>
            <Body>
              <Text>Phone</Text>
              <Text note>07********</Text>
            </Body>
          </ListItem>

        </Content>
      </Container>
    );

  }



}


