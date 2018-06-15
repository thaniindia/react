import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert } from 'react-native';
import { defaultStyle } from './styles';

export default class MyComponent extends Component {
  navigate(number) {
    this.setState({ page: number })
  }

  render(){
    return (
      <React.Fragment>
 
            <TouchableHighlight onPress={() => this.navigate('1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={defaultStyle.style3}>1. அறத்துப்பால்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('2')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={defaultStyle.style3}>2. பொருட்பால்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('3')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={defaultStyle.style3}>3. காமத்துப்பால்</Text>
                </View>
              </TouchableHighlight>

      </React.Fragment> 
    )
  }
}