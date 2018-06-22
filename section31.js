import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert } from 'react-native';
import { defaultStyle } from './styles';

export default class Kalaviyal extends Component {

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
      headerBackTitle: 'களவியல்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>காமத்துப்பால் : களவியல்</Text>
        </View>

        <View style={defaultStyle.body}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter109')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>109. தகையணங்குறுத்தல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter110')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>110. குறிப்பறிதல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter111')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>111. புணர்ச்சிமகிழ்தல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter112')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>112. நலம்புனைந்துரைத்தல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter113')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>113. காதற்சிறப்புரைத்தல்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter114')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>114. நாணுத்துறவுரைத்தல்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter115')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>115. அலரறிவுறுத்தல்</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}
