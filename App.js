import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native';

export default class App extends React.Component {
  
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        <View style={{width: 50, height: 20}} />

        <View style={{width: 415, height: 50, backgroundColor: 'white'}}> 
          <Text style={styles.style1}>திருக்குறள்</Text>
        </View>

        <View style={{width: 415, height: 50, backgroundColor: 'skyblue'}} >
          <Text style={styles.style2}>திருக்குறள் : பால்</Text>
        </View>

        <TouchableHighlight onPress={this._onPressButton}>
          <View style={{width: 415, height: 50, backgroundColor: 'powderblue'}} >
            <Text style={styles.style3}>1. அறத்துப்பால்</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={this._onPressButton}>
          <View style={{width: 415, height: 50, backgroundColor: 'powderblue'}} >
            <Text style={styles.style3}>2. பொருட்பால்</Text>
          </View>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={this._onPressButton}>
          <View style={{width: 415, height: 50, backgroundColor: 'powderblue'}} >
            <Text style={styles.style3}>3. காமத்துப்பால்</Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  style1: {
    color: 'black',
    fontSize: 30,
    
  },

  style2: {
    color: 'white',
    fontSize: 25,
    padding: 10,
  },

  style3: {
    color: 'white',
    fontSize: 20,
    padding: 10,
  },

});