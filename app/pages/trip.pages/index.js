import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Container, Header, Body, Content, Segment, Left, Right, Button, Icon } from 'native-base';

import { TabNavigator } from 'react-navigation';

import Config from 'react-native-config';

export default class Trip extends React.Component {

  static navigationOptions = {
    title: '旅程',
    header: {
      right: <Button title="发布" />,
    },
    tabBar: {
      label: '旅程',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
        <Image
          source={require('../../source/email.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Text>Awesome segment</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});
