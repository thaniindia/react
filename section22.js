import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert } from 'react-native';
import { defaultStyle } from './styles';

export default class Amaichiyal extends Component {

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
      headerBackTitle: 'அமைச்சியல்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>பொருட்பால் : அமைச்சியல்</Text>
        </View>

        <View style={defaultStyle.body}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter64')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>64. அமைச்சு</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter65')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>65. சொல்வன்மை</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter66')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>66. வினைத்தூய்மை</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter67')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>67. வினைத்திட்பம்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter68')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>68. வினைசெயல்வகை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter69')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>69. தூது</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter70')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>70. மன்னரைச் சேர்ந்தொழுதல்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter71')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>71. குறிப்பறிதல்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter72')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>72. அவையறிதல்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter73')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>73. அவையஞ்சாமை</Text>
            </View>
          </TouchableHighlight>
        </View>
        
      </View>
    );
  }
}
