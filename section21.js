import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert, ScrollView } from 'react-native';
import { defaultStyle } from './styles';

export default class Arasiyal extends Component {

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
      headerBackTitle: 'அரசியல்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>பொருட்பால் : அரசியல்</Text>
        </View>
        
        <View style={defaultStyle.body}>
        <ScrollView>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter39')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>39. இறைமாட்சி</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter40')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>40. கல்வி</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter41')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>41. கல்லாமை</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter42')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>42. கேள்வி</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter43')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>43. அறிவுடைமை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter44')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>44. குற்றங்கடிதல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter45')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>45. பெரியாரைத் துணைக்கோடல்</Text>
            </View>
          </TouchableHighlight>


          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter46')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>46. சிற்றினஞ்சேராமை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter47')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>47. தெரிந்துசெயல்வகை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter48')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>48. வலியறிதல்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter49')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>49. காலமறிதல்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter50')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>50. இடனறிதல்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter51')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>51. தெரிந்துதெளிதல்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter52')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>52. தெரிந்துவினையாடல்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter53')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>53. சுற்றந்தழால்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter54')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>54. பொச்சாவாமை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter55')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>55. செங்கோன்மை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter56')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>56. கொடுங்கோன்மை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter57')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>57. வெருவந்தசெய்யாமை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter58')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>58. கண்ணோட்டம்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter59')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>59. ஒற்றாடல்</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter60')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>60. ஊக்கமுடைமை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter61')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>61. மடியின்மை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter62')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>62. ஆள்வினையுடைமை</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter63')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>63. இடுக்கணழியாமை</Text>
            </View>
          </TouchableHighlight>

        </ScrollView>
        </View>

      </View>
    );
  }
}
