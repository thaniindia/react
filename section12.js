import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert, ScrollView } from 'react-native';
import { defaultStyle } from './styles';

export default class Illarayeyal extends Component {

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
      headerBackTitle: 'இல்லறவியல்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>அறத்துப்பால் : இல்லறவியல்</Text>
        </View>
       
        <View style={defaultStyle.body}>
        <ScrollView >

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter5')}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>5. இல்வாழ்க்கை</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter6')}>
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>6. வாழ்க்கைத் துணைநலம்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter7')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>7. மக்கட்பேறு</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter8')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>8. அன்புடைமை</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter9')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>9. விருந்தோம்பல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter10')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>10. இனியவை கூறல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter11')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>11. செய்ந்நன்றியறிதல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter12')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>12. நடுவு நிலைமை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter13')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>13. அடக்கம் உடைமை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter14')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>14. ஒழுக்கம் உடைமை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter15')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>15. பிறனில் விழையாமை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter16')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>16. பொறையுடைமை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter17')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>17. அழுக்காறாமை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter18')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>18. வெஃகாமை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter19')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>19. புறங்கூறாமை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter20')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>20. பயனில சொல்லாமை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter21')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>21. தீவினையச்சம்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter22')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>22. ஒப்புரவறிதல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter23')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>23. ஈ.கை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter24')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>24. புகழ்</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
        </View>
        
      </View>
    );
  }
}
