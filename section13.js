import React, { Component } from 'react';
import { Text, View, Image, Button,TouchableHighlight, Alert, ScrollView} from 'react-native';
import { defaultStyle } from './styles';

export default class Thuravarayeyal extends Component {

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
      headerBackTitle: 'துறவறவியல்',
    };
  };

  render() {
    return (
      <View style={defaultStyle.bodyView}>
        <View style={defaultStyle.subHeading} >
            <Text style={defaultStyle.subheadingText}>அறத்துப்பால் : துறவறவியல்</Text>
        </View>

        <View style={defaultStyle.body}>
        <ScrollView >
 
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter25')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>25. அருளுடைமை</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter26')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>26. புலால் மறுத்தல்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter27')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>27. தவம்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter28')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>28. கூடா ஒழுக்கம்</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter29')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>29. 	கள்ளாமை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter30')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>30. வாய்மை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter31')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>31. வெகுளாமை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter32')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>32. இன்னா செய்யாமை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter33')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>33. கொல்லாமை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter34')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>34. நிலையாமை</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter35')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>35. துறவு</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter36')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>36. மெய்யுணர்தல்</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Chapter37')} >
            <View style={defaultStyle.bodyRows} >
              <Text style={defaultStyle.bodyText}>37. அவா அறுத்தல்</Text>
            </View>
          </TouchableHighlight>

        </ScrollView>
        </View>
      </View>
    );
  }
}
