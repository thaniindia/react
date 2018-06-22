import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert } from 'react-native';
import { defaultStyle } from './styles';
import { Icon } from 'react-native-elements';


export default class DetailsScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'திருக்குறள்',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Home')}
          title="முகப்பு"
          color="#fff"
        />
      ),
      headerBackTitle: 'முப்பால்',
    };
  };

/*
// Right Arrow Key
<Icon
  name='chevron-right'
  color='white'
/>
*/

  render() {
   
    return (
      <View style={{flex:1}}>
        <View style={defaultStyle.subHeading}>
            <Text style={defaultStyle.subheadingText}>முப்பால்</Text>
        </View>

        <View style={defaultStyle.body}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Division1')}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>1. அறத்துப்பால்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Division2')}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>2. பொருட்பால்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Division3')}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>3. காமத்துப்பால்</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}
