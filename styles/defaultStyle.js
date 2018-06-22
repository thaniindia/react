import { StyleSheet } from 'react-native';
import { bold } from 'ansi-colors';

const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
 
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  buttonContainer: {
    margin: 20
  },

  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  style1: {
    color: 'black',
    fontSize: 30,
    
  },

  style2: {
    color: 'white',
    fontSize: 25,
    padding: 10,
  },

  style3: {
    color: 'white',
    fontSize: 20,
    padding: 10,
  },

  style4: {
    color: 'white',
    fontSize: 15,
    padding: 10,
  },
  

  bodyView: {
    flex:1,
  },

  subHeading: {
    width: '100%',
    height: 50,
    backgroundColor: 'cadetblue',

  },

  subheadingText: {
    color: 'white',
    fontSize: 20,
    padding: 10,
  },

  body: {
    width: '100%',
    height: '100%',
    flex:1,
    backgroundColor: 'powderblue',
  },

  bodyRows: {
  //  width: '100%',
    height: 50,
  //  backgroundColor: 'powderblue',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },

  bodyText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },

  kuralRows: {
    height: 60,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },

  kuralText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,

  },

  kuralColumn1: {
    width: '10%', 
    height: 200,
  },

  kuralColumn2: {
    //width: '90%', 
    height: 200,
  },

  //not in use
  lineStyle:{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    //borderWidth: 0.5,
    //borderColor:'black',
    //margin:10,
    //width: '100%',
  }

});

export default defaultStyle
