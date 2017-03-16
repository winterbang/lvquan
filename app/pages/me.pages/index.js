import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Button
} from 'react-native';

import { Container, Content, ListItem, Left, Body, Right, Switch, Radio, Text, Icon, Badge } from 'native-base';

import Config from 'react-native-config';

export default class Me extends React.Component {

  static navigationOptions = {
    header: {
      visible: false,
    },
    tabBar: {
      label: '我',
      icon: ({ tintColor }) => (
        <Image
          source={require('../../source/user.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  }

  render() {
    return (
      <Container>
        <Content>
          <ListItem icon>
            <Left>
                <Icon name="plane" />
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
            </Body>
            <Right>
                <Switch valur={false} />
            </Right>
          </ListItem>
          <ListItem icon>
              <Left>
                  <Icon name="wifi" />
              </Left>
              <Body>
                <Text>Wi-Fi</Text>
              </Body>
              <Right>
                  <Text>GeekyAnts</Text>
                  <Icon name="arrow-forward" />
              </Right>
          </ListItem>
          <ListItem icon>
              <Left>
                  <Icon name="bluetooth" />
              </Left>
              <Body>
                <Text>Bluetooth</Text>
              </Body>
              <Right>
                  <Text>On</Text>
                  <Icon name="arrow-forward" />
              </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
