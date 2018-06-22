import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert } from 'react-native';
import { defaultStyle } from './styles';

export default class Padaiyil extends Component {

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
      headerBackTitle: 'படையில்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>பொருட்பால் : படையில்</Text>
        </View>

        <View style={defaultStyle.body}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter77')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>77. படைமாட்சி</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter78')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>78. படைச்செருக்கு</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}
