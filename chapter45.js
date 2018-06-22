import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert,ScrollView } from 'react-native';
import { defaultStyle } from './styles';
import { Icon } from 'react-native-elements';

export default class periThunai extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'திருக்குறள்',
      headerRight: (
        <Icon
        onPress={() => navigation.navigate('Home')}
        name='home'
        color='white'
        />
      ),

      headerBackTitle: 'பெரியாரைத் துணைக்கோடல்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>பொருட்பால் : அரசியல் : பெரியாரைத் துணைக்கோடல்</Text>
        </View>
        
        <View style={defaultStyle.body}>
        <ScrollView >

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter45')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>1</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  அறனறிந்து மூத்த அறிவுடையார் கேண்மை {'\n'}
                  திறனறிந்து தேர்ந்து கொளல்.
                </Text>
              </View>

            </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter45')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>2</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  உற்றநோய் நீக்கி உறாஅமை முற்காக்கும் {'\n'}
                  பெற்றியார்ப் பேணிக் கொளல்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter45')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>3</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  அரியவற்று ளெல்லாம் அரிதே பெரியாரைப் {'\n'}
                  பேணித் தமராக் கொளல்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter45')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>4</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  தம்மிற் பெரியார் தமரா ஒழுகுதல் {'\n'}
                  வன்மையு ளெல்லாந் தலை.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter45')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>5</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  சூழ்வார்கண் ணாக ஒழுகலான் மன்னவன் {'\n'}
                  சூழ்வாரைச் சூழ்ந்து கொளல்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter45')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>6</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  தக்கா ரினத்தனாய்த் தானொழுக வல்லானைச் {'\n'}
                  செற்றார் செயக்கிடந்த தில்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter45')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>7</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  இடிக்குந் துணையாரை யாள்வாரை யாரே {'\n'}
                  கெடுக்குந் தகைமை யவர்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter45')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>8</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  இடிப்பாரை இல்லாத ஏமரா மன்னன் {'\n'}
                  கெடுப்பா ரிலானுங் கெடும்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter45')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>9</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  முதலிலார்க் கூதிய மில்லை மதலையாஞ் {'\n'}
                  சார்பிலார்க் கில்லை நிலை.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter45')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>10</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  பல்லார் பகைகொளலிற் பத்தடுத்த தீமைத்தே {'\n'}
                  நல்லார் தொடர்கை விடல்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>
          
        </ScrollView >
        </View>

      </View> /* body close */
    );
  }
}