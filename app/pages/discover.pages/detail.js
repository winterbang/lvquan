import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import { TabNavigator } from 'react-navigation';

import Config from 'react-native-config'

export default class Detail extends React.Component {

  static navigationOptions = {
    title: '精选',
    // header: {
    //   right: <Button title="Info" />,
    // }
  }
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Friends"
      />
    );
  }
}
