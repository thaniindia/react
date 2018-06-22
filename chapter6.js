import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert,ScrollView } from 'react-native';
import { defaultStyle } from './styles';
import { Icon } from 'react-native-elements';

export default class vaalkaiThunainalam extends Component {

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

      headerBackTitle: 'வாழ்க்கைத் துணைநலம்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>அறத்துப்பால் : இல்லறவியல் : வாழ்க்கைத் துணைநலம்</Text>
        </View>
        
        <View style={defaultStyle.body}>
        <ScrollView >

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter6')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>1</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  மனைத்தக்க மாண்புடையள் ஆகித்தற் கொண்டான் {'\n'}
                  வளத்தக்காள் வாழ்க்கைத் துணை.
                </Text>
              </View>

            </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter6')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>2</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  மனைமாட்சி இல்லாள்கண் இல்லாயின் வாழ்க்கை {'\n'}
                  எனைமாட்சித் தாயினும் இல்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter6')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>3</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  இல்லதென் இல்லவள் மாண்பானால் உள்ளதென் {'\n'}
                  இல்லவள் மாணாக் கடை.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter6')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>4</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  பெண்ணின் பெருந்தக்க யாவுள கற்பென்னும் {'\n'}
                  திண்மைஉண் டாகப் பெறின்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter6')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>5</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  தெய்வம் தொழாஅள் கொழுநற் றொழுதெழுவாள் {'\n'}
                  பெய்யெனப் பெய்யும் மழை.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter6')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>6</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  தற்காத்துத் தற்கொண்டாற் பேணித் தகைசான்ற {'\n'}
                  சொற்காத்துச் சோர்விலாள் பெண்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter6')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>7</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  சிறைகாக்கும் காப்பெவன் செய்யும் மகளிர் {'\n'}
                  நிறைகாக்கும் காப்பே தலை.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter6')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>8</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  பெற்றாற் பெறின்பெறுவர் பெண்டிர் பெருஞ்சிறப்புப் {'\n'}
                  புத்தேளிர் வாழும் உலகு.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter6')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>9</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  புகழ்புரிந் தில்லிலோர்க் கில்லை இகழ்வார்முன் {'\n'}
                  ஏறுபோல் பீடு நடை.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter6')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>10</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  மங்கலம் என்ப மனைமாட்சி மற்றதன் {'\n'}
                  நன்கலம் நன்மக்கட் பேறு.
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
