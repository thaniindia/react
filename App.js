import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { defaultStyle } from './styles';

import MyComponent from './mycomponent';

import Division1Virtue from './division1';
import Division2Wealth from './division2';
import Division3Love from './division3';

import Section11Payiram from './section11';
import Section12Illaram from './section12';
import Section13Thuravaram from './section13';
import Section14Ooliyal from './section14';

import Section21Arasiyal from './section21';
import Section22Amaichiyal from './section22';
import Section23Araniyal from './section23';
import Section24Koozhiyal from './section24';
import Section25Padaiyil from './section25';
import Section26Natpiyal from './section26';
import Section27Kudiyiyal from './section27';

import Section31Kalaviyal from './section31';
import Section32Karpiyal from './section32';

import Chapter1Virtue from './chapter1';
import Chapter2Virtue from './chapter2';
import Chapter3Virtue from './chapter3';
import Chapter4Virtue from './chapter4';

import Chapter5Virtue from './chapter5';
import Chapter6Virtue from './chapter6';
import Chapter7Virtue from './chapter7';
import Chapter8Virtue from './chapter8';
import Chapter9Virtue from './chapter9';
import Chapter10Virtue from './chapter10';
import Chapter11Virtue from './chapter11';
import Chapter12Virtue from './chapter12';
import Chapter13Virtue from './chapter13';
import Chapter14Virtue from './chapter14';
import Chapter15Virtue from './chapter15';
import Chapter16Virtue from './chapter16';
import Chapter17Virtue from './chapter17';
import Chapter18Virtue from './chapter18';
import Chapter19Virtue from './chapter19';
import Chapter20Virtue from './chapter20';
import Chapter21Virtue from './chapter21';
import Chapter22Virtue from './chapter22';
import Chapter23Virtue from './chapter23';
import Chapter24Virtue from './chapter24';

import Chapter25Virtue from './chapter25';
import Chapter26Virtue from './chapter26';
import Chapter27Virtue from './chapter27';
import Chapter28Virtue from './chapter28';
import Chapter29Virtue from './chapter29';
import Chapter30Virtue from './chapter30';
import Chapter31Virtue from './chapter31';
import Chapter32Virtue from './chapter32';
import Chapter33Virtue from './chapter33';
import Chapter34Virtue from './chapter34';
import Chapter35Virtue from './chapter35';
import Chapter36Virtue from './chapter36';
import Chapter37Virtue from './chapter37';

import Chapter38Virtue from './chapter38';

import Chapter39Wealth from './chapter39';
import Chapter40Wealth from './chapter40';
import Chapter41Wealth from './chapter41';
import Chapter42Wealth from './chapter42';
import Chapter43Wealth from './chapter43';
import Chapter44Wealth from './chapter44';
import Chapter45Wealth from './chapter45';
import Chapter46Wealth from './chapter46';
import Chapter47Wealth from './chapter47';
import Chapter48Wealth from './chapter48';
import Chapter49Wealth from './chapter49';
import Chapter50Wealth from './chapter50';
import Chapter51Wealth from './chapter51';
import Chapter52Wealth from './chapter52';
import Chapter53Wealth from './chapter53';
import Chapter54Wealth from './chapter54';
import Chapter55Wealth from './chapter55';
import Chapter56Wealth from './chapter56';
import Chapter57Wealth from './chapter57';
import Chapter58Wealth from './chapter58';
import Chapter59Wealth from './chapter59';
import Chapter60Wealth from './chapter60';
import Chapter61Wealth from './chapter61';
import Chapter62Wealth from './chapter62';
import Chapter63Wealth from './chapter63';

import Chapter64Wealth from './chapter64';
import Chapter65Wealth from './chapter65';
import Chapter66Wealth from './chapter66';
import Chapter67Wealth from './chapter67';
import Chapter68Wealth from './chapter68';
import Chapter69Wealth from './chapter69';
import Chapter70Wealth from './chapter70';
import Chapter71Wealth from './chapter71';
import Chapter72Wealth from './chapter72';
import Chapter73Wealth from './chapter73';

import Chapter74Wealth from './chapter74';
import Chapter75Wealth from './chapter75';

import Chapter76Wealth from './chapter76';

import Chapter77Wealth from './chapter77';
import Chapter78Wealth from './chapter78';

import Chapter79Wealth from './chapter79';
import Chapter80Wealth from './chapter80';
import Chapter81Wealth from './chapter81';
import Chapter82Wealth from './chapter82';
import Chapter83Wealth from './chapter83';
import Chapter84Wealth from './chapter84';
import Chapter85Wealth from './chapter85';
import Chapter86Wealth from './chapter86';
import Chapter87Wealth from './chapter87';
import Chapter88Wealth from './chapter88';
import Chapter89Wealth from './chapter89';
import Chapter90Wealth from './chapter90';
import Chapter91Wealth from './chapter91';
import Chapter92Wealth from './chapter92';
import Chapter93Wealth from './chapter93';
import Chapter94Wealth from './chapter94';
import Chapter95Wealth from './chapter95';

import Chapter96Wealth from './chapter96';
import Chapter97Wealth from './chapter97';
import Chapter98Wealth from './chapter98';
import Chapter99Wealth from './chapter99';
import Chapter100Wealth from './chapter100';
import Chapter101Wealth from './chapter101';
import Chapter102Wealth from './chapter102';
import Chapter103Wealth from './chapter103';
import Chapter104Wealth from './chapter104';
import Chapter105Wealth from './chapter105';
import Chapter106Wealth from './chapter106';
import Chapter107Wealth from './chapter107';
import Chapter108Wealth from './chapter108';

import Chapter109Wealth from './chapter109';
import Chapter110Wealth from './chapter110';
import Chapter111Wealth from './chapter111';
import Chapter112Wealth from './chapter112';
import Chapter113Wealth from './chapter113';
import Chapter114Wealth from './chapter114';
import Chapter115Wealth from './chapter115';

import Chapter116Wealth from './chapter116';
import Chapter117Wealth from './chapter117';
import Chapter118Wealth from './chapter118';
import Chapter119Wealth from './chapter119';
import Chapter120Wealth from './chapter120';
import Chapter121Wealth from './chapter121';
import Chapter122Wealth from './chapter122';
import Chapter123Wealth from './chapter123';
import Chapter124Wealth from './chapter124';
import Chapter125Wealth from './chapter125';
import Chapter126Wealth from './chapter126';
import Chapter127Wealth from './chapter127';
import Chapter128Wealth from './chapter128';
import Chapter129Wealth from './chapter129';
import Chapter130Wealth from './chapter130';
import Chapter131Wealth from './chapter131';
import Chapter132Wealth from './chapter132';
import Chapter133Wealth from './chapter133';

class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'திருக்குறள்',
    headerBackTitle: null,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text style={defaultStyle.titleText}>தமிழ்</Text>
        
        <View style={{width: 50, height: 50}} />

        <Image 
          style={{width: '50%', height:'50%'}}
          source={require('./img/thiruvalluvar4.jpg')}
        />
        <Text style={defaultStyle.titleText}>கற்க கசடற</Text>
        <View style={{width: 50, height: 50}} />

        <Button
          title="குறள்கள்"
          onPress={() => this.props.navigation.navigate('Details')}
        />

      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: MyComponent,
    Division1: Division1Virtue,
    Division2: Division2Wealth,
    Division3: Division3Love,

    Section11: Section11Payiram,
    Section12: Section12Illaram,
    Section13: Section13Thuravaram,
    Section14: Section14Ooliyal,

    Section21: Section21Arasiyal,
    Section22: Section22Amaichiyal,
    Section23: Section23Araniyal,
    Section24: Section24Koozhiyal,
    Section25: Section25Padaiyil,
    Section26: Section26Natpiyal,
    Section27: Section27Kudiyiyal,

    Section31: Section31Kalaviyal,
    Section32: Section32Karpiyal,

    Chapter1: Chapter1Virtue,
    Chapter2: Chapter2Virtue,
    Chapter3: Chapter3Virtue,
    Chapter4: Chapter4Virtue,
    Chapter5: Chapter5Virtue,
    Chapter6: Chapter6Virtue,
    Chapter7: Chapter7Virtue,
    Chapter8: Chapter8Virtue,
    Chapter9: Chapter9Virtue,
    Chapter10: Chapter10Virtue,
    Chapter11: Chapter11Virtue,
    Chapter12: Chapter12Virtue,
    Chapter13: Chapter13Virtue,
    Chapter14: Chapter14Virtue,
    Chapter15: Chapter15Virtue,
    Chapter16: Chapter16Virtue,
    Chapter17: Chapter17Virtue,
    Chapter18: Chapter18Virtue,
    Chapter19: Chapter19Virtue,
    Chapter20: Chapter20Virtue,
    Chapter21: Chapter21Virtue,
    Chapter22: Chapter22Virtue,
    Chapter23: Chapter23Virtue,
    Chapter24: Chapter24Virtue,

    Chapter25: Chapter25Virtue,
    Chapter26: Chapter26Virtue,
    Chapter27: Chapter27Virtue,
    Chapter28: Chapter28Virtue,
    Chapter29: Chapter29Virtue,
    Chapter30: Chapter30Virtue,
    Chapter31: Chapter31Virtue,
    Chapter32: Chapter32Virtue,
    Chapter33: Chapter33Virtue,
    Chapter34: Chapter34Virtue,
    Chapter35: Chapter35Virtue,
    Chapter36: Chapter36Virtue,
    Chapter37: Chapter37Virtue,

    Chapter38: Chapter38Virtue,

    Chapter39: Chapter39Wealth,
    Chapter40: Chapter40Wealth,
    Chapter41: Chapter41Wealth,
    Chapter42: Chapter42Wealth,
    Chapter43: Chapter43Wealth,
    Chapter44: Chapter44Wealth,
    Chapter45: Chapter45Wealth,
    Chapter46: Chapter46Wealth,
    Chapter47: Chapter47Wealth,
    Chapter48: Chapter48Wealth,
    Chapter49: Chapter49Wealth,
    Chapter50: Chapter50Wealth,
    Chapter51: Chapter51Wealth,
    Chapter52: Chapter52Wealth,
    Chapter53: Chapter53Wealth,
    Chapter54: Chapter54Wealth,
    Chapter55: Chapter55Wealth,
    Chapter56: Chapter56Wealth,
    Chapter57: Chapter57Wealth,
    Chapter58: Chapter58Wealth,
    Chapter59: Chapter59Wealth,
    Chapter60: Chapter60Wealth,
    Chapter61: Chapter61Wealth,
    Chapter62: Chapter62Wealth,
    Chapter63: Chapter63Wealth,

    Chapter64: Chapter64Wealth,
    Chapter65: Chapter65Wealth,
    Chapter66: Chapter66Wealth,
    Chapter67: Chapter67Wealth,
    Chapter68: Chapter68Wealth,
    Chapter69: Chapter69Wealth,
    Chapter70: Chapter70Wealth,
    Chapter71: Chapter71Wealth,
    Chapter72: Chapter72Wealth,
    Chapter73: Chapter73Wealth,

    Chapter74: Chapter74Wealth,
    Chapter75: Chapter75Wealth,

    Chapter76: Chapter76Wealth,

    Chapter77: Chapter77Wealth,
    Chapter78: Chapter78Wealth,

    Chapter79: Chapter79Wealth,
    Chapter80: Chapter80Wealth,
    Chapter81: Chapter81Wealth,
    Chapter82: Chapter82Wealth,
    Chapter83: Chapter83Wealth,
    Chapter84: Chapter84Wealth,
    Chapter85: Chapter85Wealth,
    Chapter86: Chapter86Wealth,
    Chapter87: Chapter87Wealth,
    Chapter88: Chapter88Wealth,
    Chapter89: Chapter89Wealth,
    Chapter90: Chapter90Wealth,
    Chapter91: Chapter91Wealth,
    Chapter92: Chapter92Wealth,
    Chapter93: Chapter93Wealth,
    Chapter94: Chapter94Wealth,
    Chapter95: Chapter95Wealth,

    Chapter96: Chapter96Wealth,
    Chapter97: Chapter97Wealth,
    Chapter98: Chapter98Wealth,
    Chapter99: Chapter99Wealth,
    Chapter100: Chapter100Wealth,
    Chapter101: Chapter101Wealth,
    Chapter102: Chapter102Wealth,
    Chapter103: Chapter103Wealth,
    Chapter104: Chapter104Wealth,
    Chapter105: Chapter105Wealth,
    Chapter106: Chapter106Wealth,
    Chapter107: Chapter107Wealth,
    Chapter108: Chapter108Wealth,

    Chapter109: Chapter109Wealth,
    Chapter110: Chapter110Wealth,
    Chapter111: Chapter111Wealth,
    Chapter112: Chapter112Wealth,
    Chapter113: Chapter113Wealth,
    Chapter114: Chapter114Wealth,
    Chapter115: Chapter115Wealth,

    Chapter116: Chapter116Wealth,
    Chapter117: Chapter117Wealth,
    Chapter118: Chapter118Wealth,
    Chapter119: Chapter119Wealth,
    Chapter120: Chapter120Wealth,
    Chapter121: Chapter121Wealth,
    Chapter122: Chapter122Wealth,
    Chapter123: Chapter123Wealth,
    Chapter124: Chapter124Wealth,
    Chapter125: Chapter125Wealth,
    Chapter126: Chapter126Wealth,
    Chapter127: Chapter127Wealth,
    Chapter128: Chapter128Wealth,
    Chapter129: Chapter129Wealth,
    Chapter130: Chapter130Wealth,
    Chapter131: Chapter131Wealth,
    Chapter132: Chapter132Wealth,
    Chapter133: Chapter133Wealth

  },
  {
    initialRouteName: 'Home',
      //Adjusting header styles
      /* The header config from HomeScreen is now here */
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },

  }

);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}