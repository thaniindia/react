import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert } from 'react-native';
import { defaultStyle } from './styles';

export default class Virtue extends Component {

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
      headerBackTitle: 'அறத்துப்பால்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>பால் : அறத்துப்பால்</Text>
        </View>

        <View style={defaultStyle.body}>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Section11')} style={{width: '100%'}}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>1. பாயிரவியல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Section12')} style={{width: '100%'}}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>2. இல்லறவியல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Section13')} style={{width: '100%'}}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>3. துறவறவியல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Section14')} style={{width: '100%'}}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>4. ஊழியல்</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}
