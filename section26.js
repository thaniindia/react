import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert, ScrollView } from 'react-native';
import { defaultStyle } from './styles';

export default class Natpiyal extends Component {

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
      headerBackTitle: 'நட்பியல்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>பொருட்பால் : நட்பியல்</Text>
        </View>

        <View style={defaultStyle.body}>
        <ScrollView >

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter79')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>79. நட்பு</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter80')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>80. நட்பாராய்தல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter81')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>81. பழைமை</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter82')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>82. தீ நட்பு</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter83')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>83. கூடாநட்பு</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter84')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>84. பேதைமை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter85')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>85. புல்லறிவாண்மை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter86')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>86. இகல்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter87')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>87. பகைமாட்சி</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter88')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>88. பகைத்திறந்தெரிதல்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter89')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>89. உட்பகை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter90')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>90. பெரியாரைப் பிழையாமை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter91')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>91. பெண்வழிச்சேறல்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter92')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>92. வரைவின்மகளிர்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter93')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>93. கள்ளுண்ணாமை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter94')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>94. சூது</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter95')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>95. மருந்து</Text>
            </View>
          </TouchableHighlight>

        </ScrollView>
        </View>

      </View>
    );
  }
}
