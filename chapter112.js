import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert,ScrollView } from 'react-native';
import { defaultStyle } from './styles';
import { Icon } from 'react-native-elements';

export default class nalampunandhuUraithal extends Component {

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

      headerBackTitle: 'நலம் புனைந்து உரைத்தல்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>காமத்துப்பால் : களவியல் : நலம் புனைந்து உரைத்தல்</Text>
        </View>
        
        <View style={defaultStyle.body}>
        <ScrollView >

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter112')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>1</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  நன்னீரை வாழி அனிச்சமே நின்னினும் {'\n'}
                  மென்னீரள் யாம்வீழ் பவள்.
                </Text>
              </View>

            </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter112')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>2</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  மலர்காணின் மையாத்தி நெஞ்சே இவள்கண் {'\n'}
                  பலர்காணும் பூவொக்கும் என்று.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter112')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>3</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  முறிமேனி முத்தம் முறுவல் வெறிநாற்றம் {'\n'}
                  வேலுண்கண் வேய்த்தோ ளவட்கு.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter112')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>4</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  காணின் குவளை கவிழ்ந்து நிலனோக்கும் {'\n'}
                  மாணிழை கண்ணொவ்வேம் என்று.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter112')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>5</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  அனிச்சப்பூக் கால்களையாள் பெய்தாள் நுசுப்பிற்கு {'\n'}
                  நல்ல படாஅ பறை.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter112')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>6</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  மதியும் மடந்தை முகனும் அறியா {'\n'}
                  பதியின் கலங்கிய மீன்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter112')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>7</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  அறுவாய் நிறைந்த அவிர்மதிக்குப் போல {'\n'}
                  மறுவுண்டோ மாதர் முகத்து.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter112')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>8</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  மாதர் முகம்போல் ஒளிவிட வல்லையேல் {'\n'}
                  காதலை வாழி மதி.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter112')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>9</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  மலரன்ன கண்ணாள் முகமொத்தி யாயின் {'\n'}
                  பலர்காணத் தோன்றல் மதி.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter112')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>10</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  அனிச்சமும் அன்னத்தின் தூவியு மாதர் {'\n'}
                  அடிக்கு நெருஞ்சிப் பழம்.
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