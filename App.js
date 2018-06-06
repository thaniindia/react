import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      page: '0'
    }
  }
  
  navigate(number) {
    this.setState({ page: number })
  }

  render() {
    console.log('(*) this.state.page =>', this.state.page)
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        <View style={{width: 50, height: 20}} />

        <View style={{width: '100%', height: 50, backgroundColor: 'white'}}> 
          <Text style={styles.style1}>திருக்குறள்</Text>
        </View>

        <View style={{width: '100%', height: 50, backgroundColor: 'skyblue'}} >
          <Text style={styles.style2}>திருக்குறள் : பால்</Text>
        </View>

        { this.state.page === '0' &&
            <React.Fragment>
              <TouchableHighlight onPress={() => this.navigate('1')}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>1. அறத்துப்பால்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('2')}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>2. பொருட்பால்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('3')}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>3. காமத்துப்பால்</Text>
                </View>
              </TouchableHighlight>
            </React.Fragment>
        }
        
        {
          this.state.page === '1' &&
          <React.Fragment>
            <View style={{ flex: 1, flexDirection: 'row', maxHeight: 50, height: 50, backgroundColor: 'skyblue'}}>
              <View style={{ width: 100, height: 50, backgroundColor: 'cornflowerblue'}} >
                <TouchableHighlight onPress={() => this.navigate('0')}>
                  <View style={{ width: '100%', height: '100%' }}>
                    <Text style={styles.style3}>Back</Text>
                  </View>
                </TouchableHighlight>
              </View>

              <View style={{ flex: 1, height: 50, backgroundColor: 'cadetblue'}} >
                <Text style={styles.style3}>1. அறத்துப்பால்</Text>
              </View>
            </View>

            <TouchableHighlight onPress={() => this.navigate('1-1')}>
              <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                <Text style={styles.style3}>1.1 அறத்துப்பால்</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.navigate('1-2')}>
              <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                <Text style={styles.style3}>1.2 பொருட்பால்</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.navigate('1-3')}>
              <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                <Text style={styles.style3}>1.3 காமத்துப்பால்</Text>
              </View>
            </TouchableHighlight>
          </React.Fragment>
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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

});