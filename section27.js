import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert, ScrollView } from 'react-native';
import { defaultStyle } from './styles';

export default class Kudiyiyal extends Component {

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
      headerBackTitle: 'குடியியல்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>பொருட்பால் : குடியியல்</Text>
        </View>
        
        <View style={defaultStyle.body}>
        <ScrollView >

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter96')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>96. குடிமை</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter97')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>97. மானம்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter98')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>98. பெருமை</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter99')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>99. சான்றாண்மை</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter100')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>100. பண்புடைமை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter101')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>101. நன்றியில்செல்வம்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter102')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>102. நாணுடைமை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter103')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>103. குடிசெயல்வகை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter104')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>104. உழவு</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter105')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>105. நல்குரவு</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter106')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>106. இரவு</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter107')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>107. இரவச்சம்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter108')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>108. கயமை</Text>
            </View>
          </TouchableHighlight>

        </ScrollView>
        </View>

      </View>
    );
  }
}