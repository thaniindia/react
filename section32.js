import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert, ScrollView, Dimensions } from 'react-native';
import { defaultStyle } from './styles';

export default class Karpiyal extends Component {

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
      headerBackTitle: 'கற்பியல்',
    };
  };

  render() {
    var {Windowheight, width} = Dimensions.get('window');

    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>காமத்துப்பால் : கற்பியல்</Text>
        </View>

        <View style={defaultStyle.body}>
        <ScrollView >

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter116')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>116. பிரிவாற்றாமை</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter117')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>117. படர்மெலிந்திரங்கல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter118')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>118. கண்விதுப்பழிதல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter119')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>119. பசப்புறுபருவரல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter120')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>120. தனிப்படர்மிகுதி</Text>
            </View>
          </TouchableHighlight>
         
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter121')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>121. நினைந்தவர்புலம்பல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter122')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>122. கனவுநிலையுரைத்தல்</Text>
            </View>
          </TouchableHighlight>
         
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter123')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>123. பொழுதுகண்டிரங்கல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter124')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>124. உறுப்புநலனழிதல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter125')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>125. நெஞ்சொடுகிளத்தல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter126')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>126. நிறையழிதல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter127')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>127. அவர்வயின்விதும்பல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter128')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>128. குறிப்பறிவுறுத்தல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter129')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>129. புணர்ச்சிவிதும்பல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter130')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>130. நெஞ்சொடுபுலத்தல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter131')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>131. புலவி</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter132')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>132. புலவி நுணுக்கம்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter133')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>133. ஊடலுவகை</Text>
            </View>
          </TouchableHighlight>

        </ScrollView>
        </View>

      </View>
    );
  }
}
