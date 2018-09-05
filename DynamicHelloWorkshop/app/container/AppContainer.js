/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Button, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import { ActionCreators } from '../actions';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class AppContainer extends Component {

  setMessagePressed() {
    console.log("setMessagePressed() => ")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello Workshop</Text>
        <Text style={styles.instructions}>Enter a Message below</Text>
        <TextInput editable={true} multiline = {true} style={styles.messageTextInput}/>
        <View style={styles.button}>
          <Button title="Set message" onPress={ () => this.setMessagePressed()}/>
        </View>
        <TextInput editable={false} multiline = {true} style={styles.messageTextOutput}>{this.props.message}</TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 5,
  },
  button: {
    margin: 5,
  },
  messageTextInput: {
    height: 100, 
    width: 400, 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 5,
  },
  messageTextOutput: {
    height: 100, 
    width: 400,
    color: 'white',
    backgroundColor: 'gray', 
    marginBottom: 5,
  }
});

function mapStateToProps(state) {
  return {
    message: state.message
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);