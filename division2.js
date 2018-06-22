import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert } from 'react-native';
import { defaultStyle } from './styles';

export default class Wealth extends Component {

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
      headerBackTitle: 'பொருட்பால்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>பால் : பொருட்பால்</Text>
        </View>
        
        <View style={defaultStyle.body}>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Section21')} style={{width: '100%'}}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>1 அரசியல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Section22')} style={{width: '100%'}}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>2 அமைச்சியல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Section23')} style={{width: '100%'}}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>3 அரணியல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Section24')} style={{width: '100%'}}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>4 கூழியல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Section25')} style={{width: '100%'}}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>5 படையியல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Section26')} style={{width: '100%'}}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>6 நட்பியல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Section27')} style={{width: '100%'}}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>7 குடியியல்</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}
