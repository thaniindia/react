import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert, ScrollView } from 'react-native';
import { defaultStyle } from './styles';

export default class Ooliyal extends Component {

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
      headerBackTitle: 'ஊழியல்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>அறத்துப்பால் : ஊழியல்</Text>
        </View>
        
        <View style={defaultStyle.body}>
        <ScrollView >

        <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter38')} >
          <View style={defaultStyle.bodyRows} >
            <Text style={defaultStyle.bodyText}>38. ஊழ்</Text>
          </View>
        </TouchableHighlight>

        </ScrollView>
        </View>

      </View>
    );
  }
}
