import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert } from 'react-native';
import { defaultStyle } from './styles';

export default class Araniyal extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'திருக்குறள்',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Home"
          color="#fff"
        />
      ),
      headerBackTitle: 'அரணியல்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>பொருட்பால் : அரணியல்</Text>
        </View>
        
        <View style={defaultStyle.body}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter74')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>74. நாடு</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter75')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>75. அரண்</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}
