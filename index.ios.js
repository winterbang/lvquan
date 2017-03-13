/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import { TabNavigator } from 'react-navigation';

import Discover from './app/pages/discover.pages';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Home',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      // icon: ({ tintColor }) => (
      //   <Image
      //     source={require('./1.png')}
      //     style={[styles.icon, {tintColor: tintColor}]}
      //   />
      // ),
    },
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class NotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Notifications',
      // icon: ({ tintColor }) => (
      //   <Image
      //     source={require('./1.png')}
      //     style={[styles.icon, {tintColor: tintColor}]}
      //   />
      // ),
    },
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const lvquan = TabNavigator({
  Discover: {
    screen: Discover
  },
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: NotificationsScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

AppRegistry.registerComponent('lvquan', () => lvquan);
