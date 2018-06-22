import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert } from 'react-native';
import { defaultStyle } from './styles';

export default class Koozhiyal extends Component {

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
      headerBackTitle: 'கூழியல்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>பொருட்பால் : கூழியல்</Text>
        </View>

        <View style={defaultStyle.body}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter76')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>76. பொருள்செயல்வகை</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}
