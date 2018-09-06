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
import {Button, Keyboard, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import { ActionCreators } from '../actions';

class AppContainer extends Component {

  state = {
    cityName: '',
    latitude: null,
    longitude: null,
    gpsError: null,
  }

  componentDidMount() {
    console.log("**************** AppContainer.componentDidMount ****************");
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ gpsError: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  getWeatherForeCastPressed() {
    console.log("getWeatherForeCastPressed() => ");
    Keyboard.dismiss();
    if(this.state.latitude!= null && this.state.longitude != null) {
      this.props.getWeatherByCoordinates(this.state.latitude, this.state.longitude);
    } else {
      this.props.getWeatherByCityName(this.state.cityName);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Weather Forecast</Text>
        <Text style={styles.instructions}>Enter a City below or leave empty to detect you location automatically!</Text>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        <Text>GPS Error: {this.state.gpsError}</Text>
        <TextInput 
          value={this.state.cityName}
          onChangeText={cityName => this.setState({cityName})} 
          onSubmitEditing={Keyboard.dismiss()}
          editable={true} multiline={false} 
          style={styles.messageTextInput}/>
        <View style={styles.button}>
          <Button 
            ref={ref => (this.buttonSubmit = ref)}
            title="Get Weather" 
            onPress={ () => this.getWeatherForeCastPressed()}/>
        </View>
        <TextInput editable={false} multiline = {true} style={styles.messageTextOutput}>
          Weather for {this.props.weatherForeCast.name}:{"\n\t"}{this.props.weatherForeCast.weather[0].description}
        </TextInput>
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
    weatherForeCast: state.weatherForeCast
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);