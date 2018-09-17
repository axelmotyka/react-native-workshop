import React, { Component } from 'react';
import {Button, Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';

class MessageButton extends Component {

    render() {
        return(
            <View style={styles.button}>
                <Button 
                    ref={ref => (this.buttonSubmit = ref)}
                    title={this.props.title}
                    onPress={this.props.onPress}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    button: {
      margin: 5,
    },
  });

  export default MessageButton;