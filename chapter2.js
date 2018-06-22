import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert,ScrollView } from 'react-native';
import { defaultStyle } from './styles';
import { Icon } from 'react-native-elements';

export default class vaanSirappu extends Component {

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

      headerBackTitle: 'வான்சிறப்பு',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>அறத்துப்பால் : பாயிரவியல் : வான்சிறப்பு</Text>
        </View>
        
        <View style={defaultStyle.body}>
        <ScrollView >

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter2')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>1</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  வான்நின்று உலகம் வழங்கி வருதலால் {'\n'}
                  தான்அமிழ்தம் என்றுணரற் பாற்று.
                </Text>
              </View>

            </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter2')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>2</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  துப்பார்க்குத் துப்பாய துப்பாக்கித் துப்பார்க்குத் {'\n'}
                  துப்பாய தூஉம் மழை.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter2')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>3</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  விண்இன்று பொய்ப்பின் விரிநீர் வியனுலகத்து {'\n'}
                  உள்நின்று உடற்றும் பசி.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter2')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>4</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  ஏரின் உழாஅர் உழவர் புயல்என்னும் {'\n'}
                  வாரி வளங்குன்றிக் கால்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter2')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>5</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  கெடுப்பதூஉம் கெட்டார்க்குச் சார்வாய்மற் றாங்கே {'\n'}
                  எடுப்பதூஉம் எல்லாம் மழை.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter2')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>6</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  விசும்பின் துளிவீழின் அல்லால்மற் றாங்கே {'\n'}
                  பசும்புல் தலைகாண்பு அரிது.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter2')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>7</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  நெடுங்கடலும் தன்நீர்மை குன்றும் தடிந்தெழிலி {'\n'}
                  தான்நல்கா தாகி விடின்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter2')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>8</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  சிறப்பொடு பூசனை செல்லாது வானம் {'\n'}
                  வறக்குமேல் வானோர்க்கும் ஈண்டு.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter2')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>9</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                  தானம் தவம்இரண்டும் தங்கா வியன்உலகம் {'\n'}
                  வானம் வழங்கா தெனின்.
                </Text>
              </View>

             </View> 
          </TouchableHighlight>

         <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter2')} >
            <View style={defaultStyle.kuralRows}>
              
              <View style={defaultStyle.kuralColumn1} >
                <Text style={defaultStyle.kuralText}>10</Text>
              </View>
              
              <View style={defaultStyle.kuralColumn2} >
                <Text style={defaultStyle.kuralText}>
                        நீர்இன்று அமையாது உலகெனின் யார்யார்க்கும் {'\n'}
                        வான்இன்று அமையாது ஒழுக்கு.
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
