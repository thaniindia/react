import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert,ScrollView } from 'react-native';
import { defaultStyle } from './styles';
import { Icon } from 'react-native-elements';

export default class koodaOlukkam extends Component {

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

      headerBackTitle: 'கூடா ஒழுக்கம்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>அறத்துப்பால் : துறவறவியல் : கூடா ஒழுக்கம்</Text>
        </View>
        
        <View style={defaultStyle.body}>
        <ScrollView >

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter28')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>1</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  வஞ்ச மனத்தான் படிற்றொழுக்கம் பூதங்கள் {'\n'}
                  ஐந்தும் அகத்தே நகும்.
                </Text>
              </View>

            </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter28')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>2</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  வானுயர் தோற்றம் எவன்செய்யுந் தன்நெஞ்சத் {'\n'}
                  தானறி குற்றப் படின்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter28')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>3</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  வலியில் நிலைமையான் வல்லுருவம் பெற்றம் {'\n'}
                  புலியின்தோல் போர்த்துமேய்ந் தற்று.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter28')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>4</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  தவமறைந் தல்லவை செய்தல் புதல்மறைந்து {'\n'}
                  வேட்டுவன் புள்சிமிழ்த் தற்று.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter28')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>5</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  பற்றற்றேம் என்பார் படிற்றொழுக்கம் எற்றெற்றென் {'\n'}
                  றேதம் பலவுந் தரும்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter28')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>6</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  நெஞ்சின் துறவார் துறந்தார்போல் வஞ்சித்து {'\n'}
                  வாழ்வாரின் வன்கணா ரில்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter28')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>7</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  சபுறங்குன்றி கண்டனைய ரேனும் அகங்குன்றி {'\n'}
                  மூக்கிற் கரியா ருடைத்து.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter28')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>8</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  மனத்தது மாசாக மாண்டார்நீ ராடி {'\n'}
                  மறைந்தொழுகு மாந்தர் பலர்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter28')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>9</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  கணைகொடியது யாழ்கோடு செவ்விதாங் கனை {'\n'}
                  வினைபடு பாலாற் கொளல்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter28')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>10</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  மழித்தலும் நீட்டலும் வேண்டா உலகம் {'\n'}
                  பழித்த தொழித்து விடின்.
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
