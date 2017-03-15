import React, { Component } from 'react';
import { StyleSheet, View, Image} from 'react-native';

import { TabNavigator } from 'react-navigation';
import {
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Thumbnail,
  Text,
  Button,
  Icon
} from 'native-base';

import Config from 'react-native-config';

export default class Choiceness extends React.Component {

  render() {
    return (
      <Container>
        <Content>
          <Card >
            <CardItem>
              <Left>
                  <Thumbnail source={require('../../source/view.png')} />
                  <Body>
                      <Text>NativeBase</Text>
                      <Text note>GeekyAnts</Text>
                  </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={require('../../source/nint.jpg')}/>
            </CardItem>
            <CardItem content>
                <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                Are you telling me that you built a time machine... out of a DeLorean?!
                Whoa. This is heavy.</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
