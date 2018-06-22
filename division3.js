import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert } from 'react-native';
import { defaultStyle } from './styles';

export default class Love extends Component {

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
      headerBackTitle: 'காமத்துப்பால்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>பால் : காமத்துப்பால்</Text>
        </View>
        <View style={defaultStyle.body}>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Section31')} style={{width: '100%'}}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>1 களவியல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Section32')} style={{width: '100%'}}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>2 கற்பியல்</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}
