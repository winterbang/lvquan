import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView} from 'react-native';

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

import Detail from './detail';

export default class Choiceness extends React.Component {

  onPressItem(item) {
    this.props.navigation.navigate('DiscoverDetail', {name: 'Lucy'})
  }

  render() {
    return (
      <ScrollView>
        <Card >
          <CardItem>
            <Left>
                <Thumbnail source={require('../../source/avatar.jpg')} />
                <Body>
                    <Text>winter</Text>
                    <Text note>GeekyAnts</Text>
                </Body>
            </Left>
          </CardItem>
          <CardItem cardBody
                    onPress={() => this.onPressItem({a: 'a'})}>
              <Image source={require('../../source/flower.jpg')}
                     style={{width: '100%', height: 250}}/>
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
        <Card >
          <CardItem>
            <Left>
                <Thumbnail source={require('../../source/avatar.jpg')} />
                <Body>
                    <Text>winter</Text>
                    <Text note>GeekyAnts</Text>
                </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
              <Image source={require('../../source/flower.jpg')}
                     style={{width: '100%', height: 250}}/>
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
        <Card >
          <CardItem>
            <Left>
                <Thumbnail source={require('../../source/avatar.jpg')} />
                <Body>
                    <Text>winter</Text>
                    <Text note>GeekyAnts</Text>
                </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
              <Image source={require('../../source/flower.jpg')}
                     style={{width: '100%', height: 250}}/>
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
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
