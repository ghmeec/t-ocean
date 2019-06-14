import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Icon, Picker, Button, Text } from 'native-base';
import {Alert} from 'react-native'
export default class InlineLabelExample extends Component {
  static navigationOptions = {
    header: null,
    title: 'Giving',
    headerTitleStyle:
      { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {

    },
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  handleGiving = () => {

    Alert.alert(
      'Handling Giving',
      'About to process giving of cash',
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
      <Content
        contentContainerStyle={{ justifyContent: 'center', flex: 1 }}
      >

        <Form style={{ margin: 10, padding: 0 }}>
          <Item inlineLabel style={{ margin: 0, paddingLeft: 10 }}>
            <Label>Tsh</Label>
            <Input placeholder='10,000' />
          </Item>
          <Item inlineLabel>
            <Picker
              mode="dropdown"
              iosHeader="Select Mode"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="One time" value="key0" />
              <Picker.Item label="Weekly" value="key1" />
              <Picker.Item label="Every Two Weeks" value="key2" />
              <Picker.Item label="Monthly" value="key3" />
            </Picker>
          </Item>


          <Item inlineLabel>
            <Picker
              mode="dropdown"
              iosHeader="Select Mode"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Tithe" value="key0" />
              <Picker.Item label="Building Fund" value="key1" />
              <Picker.Item label="Missions" value="key2" />
              <Picker.Item label="Offerings" value="key3" />
              <Picker.Item label="Thanks Giving" value="key4" />
            </Picker>
          </Item>

          <Button style={{
            backgroundColor: "#B71C1C",
            width: "95%",
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-end"
          }}
          onPress={this.handleGiving}
          >
            <Text>
              Give
                </Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
}




