import { StyleSheet } from 'react-native';

const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },

  titleText: {
    fontSize: 20,
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
  }

});

export default defaultStyle
