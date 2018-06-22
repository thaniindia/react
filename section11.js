import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert } from 'react-native';
import { defaultStyle } from './styles';
import { Icon } from 'react-native-elements';

export default class Paayirayeyal extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'திருக்குறள்',
      headerRight: (
        <Icon
        onPress={() => navigation.navigate('Home')}
        name='home'
        color='white'
        />
      ),

      headerBackTitle: 'பாயிரவியல்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>அறத்துப்பால் : பாயிரவியல்</Text>
        </View>
        
        <View style={defaultStyle.body}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter1')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>1. கடவுள் வாழ்த்து</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter2')}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>2. வான்சிறப்பு</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter3')}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>3. நீத்தார் பெருமை</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter4')}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>4. அறன் வலியுறுத்தல்</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}
