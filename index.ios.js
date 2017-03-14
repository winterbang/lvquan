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
import lvquan from './app/pages';

// import Discover from './app/pages/discover.pages';
// import Information from './app/pages/information.pages';
// import Me from './app/pages/me.pages';
//
// const lvquan = TabNavigator({
//   Discover: {
//     screen: Discover
//   },
//   Information: {
//     screen: Information,
//   },
//   Me: {
//     screen: Me,
//   },
// }, {
//   tabBarOptions: {
//     activeTintColor: '#e91e63',
//   },
//   tabBarPosition: 'bottom'
// });

AppRegistry.registerComponent('lvquan', () => lvquan);
