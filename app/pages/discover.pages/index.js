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
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Config from 'react-native-config'

import Choiceness from './choiceness.js'
import Friends from './friends.js'
export default class Discover extends React.Component {

  static navigationOptions = {
    title: '发现',
    header: {
      right: <Button title="Info" />,
    },
    tabBar: {
      label: '发现',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
        <Image
          source={require('../../source/view.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollableTabView
          tabBarUnderlineColor='#e7e7e7'
          tabBarInactiveTextColor='#888'
          tabBarActiveTextColor='red'
          tabBarBackgroundColor='#F5FCFF'
          ref="scrollableTabView"
          initialPage={0}
        >
          <Choiceness tabLabel="精选" />
          <Friends tabLabel="好友" />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
