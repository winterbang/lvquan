import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Container, Header, Body, Content, Segment, Left, Right, Button, Title, Tabs, Tab } from 'native-base';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';

import Config from 'react-native-config'

import Choiceness from './choiceness.js'
import Friends from './friends.js'

export default class Discover extends React.Component {

  static navigationOptions = {
    header: {
      visible: false,
    },
    tabBar: {
      label: '发现',
      icon: ({ tintColor }) => (
        <Image
          source={require('../../source/view.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  }

  // <View style={{flex: 1}}>
  //   <ScrollableTabView
  //     tabBarUnderlineColor='#e7e7e7'
  //     tabBarInactiveTextColor='#888'
  //     tabBarActiveTextColor='red'
  //     tabBarBackgroundColor='#F5FCFF'
  //     ref="scrollableTabView"
  //     initialPage={0}
  //   >
  //     <Choiceness {...this.props} tabLabel="精选" />
  //     <Friends {...this.props} tabLabel="好友" />
  //   </ScrollableTabView>
  // </View>
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left></Left>
          <Body>
            <Title>发现</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='camera' size={20}/>
            </Button>
          </Right>
        </Header>
        <Tabs>
          <Tab heading="精选">
            <Choiceness {...this.props} tabLabel="精选" />
          </Tab>
          <Tab heading="好友">
            <Friends {...this.props} tabLabel="好友" />
          </Tab>
        </Tabs>
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
