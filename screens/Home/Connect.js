import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Container, Content, CardItem,Card, } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
export default class CustomRadioButtonExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Grid>
                {  Array.from({length: 9}, (v, i) => i)
                  .map((el,i)=>{
                    return(

                        <Row style={{ height: 150,margin:10 }} key={i}>
                            <Col style={{height:150}}>  
                            <Card>
                            <CardItem cardBody>
                                <Image source={require("../../assets/images/blank.jpeg")} style={{ height: 150, width: null, flex: 1 }} />
                            </CardItem>
                            </Card>

                            </Col>

                            <Col style={{height:150}}>

                            <Card>
                            <CardItem cardBody>
                                <Image source={require("../../assets/images/blank.jpeg")} style={{ height: 150, width: null, flex: 1 }} />
                            </CardItem>
                            </Card>

                            </Col>
                        </Row>
               )
                  })

                }
                    </Grid>

                </Content>
            </Container>
        );
    }
}