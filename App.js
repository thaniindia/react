import React from 'react';
import { StyleSheet, Text, View, Image, Button,TouchableHighlight, Alert } from 'react-native';


export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  constructor(props) {
    super(props)
    this.state = {
      page: 'Home'
    }
  }
  
  navigate(number) {
    this.setState({ page: number })
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={{width: 50, height: 20}} />

        <View style={{width: '100%', height: 50, backgroundColor: 'white'}}> 
          <Text style={styles.style1}>திருக்குறள்</Text>
        </View>

        { this.state.page === 'Home' &&
          <React.Fragment>
            <Text style={styles.titleText}>திருக்குறள்</Text>

            <Image 
              style={{width: '50%', height:'50%'}}
              source={require('./img/thiruvalluvar4.jpg')}
            />
            
            <Text style={styles.titleText}>கற்க கசடற</Text>

        
              
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => this.navigate('0')}
                title="Click To View"
                
              />
              </View>  
            </React.Fragment> 
        }



        { this.state.page === '0' &&
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
                  <Text style={styles.style3}>பால்</Text>
                </View>
              </View>

              <TouchableHighlight onPress={() => this.navigate('1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>1. அறத்துப்பால்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('2')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>2. பொருட்பால்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('3')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>3. காமத்துப்பால்</Text>
                </View>
              </TouchableHighlight>
            </React.Fragment>
        }

       { this.state.page === '1' &&
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
                  <Text style={styles.style3}>அறத்துப்பால்</Text>
                </View>
              </View>

              <TouchableHighlight onPress={() => this.navigate('1.1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>1. பாயிரவியல்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1.2')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>2. இல்லறவியல்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1.3')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>3. துறவறவியல்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>4. ஊழியல்</Text>
                </View>
              </TouchableHighlight>

            </React.Fragment>
        }

      { this.state.page === '1.1' &&
            <React.Fragment>

              <View style={{ flex: 1, flexDirection: 'row', maxHeight: 50, height: 50, backgroundColor: 'skyblue'}}>
                <View style={{ width: 100, height: 50, backgroundColor: 'cornflowerblue'}} >
                  <TouchableHighlight onPress={() => this.navigate('1')}>
                    <View style={{ width: '100%', height: '100%' }}>
                      <Text style={styles.style3}>Back</Text>
                    </View>
                  </TouchableHighlight>
                </View>

                <View style={{ flex: 1, height: 50, backgroundColor: 'cadetblue'}} >
                  <Text style={styles.style3}>அறத்துப்பால் : பாயிரவியல்</Text>
                </View>
              </View>

              <TouchableHighlight onPress={() => this.navigate('1.1.1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>1. கடவுள் வாழ்த்து</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1.1.2')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>2. வான்சிறப்பு</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1.1.3')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>3. நீத்தார் பெருமை</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>4. அறன் வலியுறுத்தல்</Text>
                </View>
              </TouchableHighlight>

            </React.Fragment>
        }

      { this.state.page === '1.2' &&
            <React.Fragment>

              <View style={{ flex: 1, flexDirection: 'row', maxHeight: 50, height: 50, backgroundColor: 'skyblue'}}>
                <View style={{ width: 100, height: 50, backgroundColor: 'cornflowerblue'}} >
                  <TouchableHighlight onPress={() => this.navigate('1')}>
                    <View style={{ width: '100%', height: '100%' }}>
                      <Text style={styles.style3}>Back</Text>
                    </View>
                  </TouchableHighlight>
                </View>

                <View style={{ flex: 1, height: 50, backgroundColor: 'cadetblue'}} >
                  <Text style={styles.style3}>அறத்துப்பால் : இல்லறவியல்</Text>
                </View>
              </View>

              <TouchableHighlight onPress={() => this.navigate('1.1.1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>1. இல்வாழ்க்கை</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1.1.2')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>2. வாழ்க்கைத் துணைநலம்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1.1.3')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>3. மக்கட்பேறு</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>4. அன்புடைமை்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>5. விருந்தோம்பல்</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>6. இனியவை கூறல்</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>7. செய்ந்நன்றியறிதல்</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>8. நடுவு நிலைமை</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>9. அடக்கம் உடைமை</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>10. ஒழுக்கம் உடைமை</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>11. பிறனில் விழையாமை</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>12. பொறையுடைமை</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>13. அழுக்காறாமை</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>14. வெஃகாமை</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>15. புறங்கூறாமை</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>16. பயனில சொல்லாமை</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>17. தீவினையச்சம்</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>18. ஒப்புரவறிதல்</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>19. ஈ.கை</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>20. புகழ்</Text>
                </View>
              </TouchableHighlight>

              
            </React.Fragment>
        }        

      { this.state.page === '1.3' &&
            <React.Fragment>

              <View style={{ flex: 1, flexDirection: 'row', maxHeight: 50, height: 50, backgroundColor: 'skyblue'}}>
                <View style={{ width: 100, height: 50, backgroundColor: 'cornflowerblue'}} >
                  <TouchableHighlight onPress={() => this.navigate('1')}>
                    <View style={{ width: '100%', height: '100%' }}>
                      <Text style={styles.style3}>Back</Text>
                    </View>
                  </TouchableHighlight>
                </View>

                <View style={{ flex: 1, height: 50, backgroundColor: 'cadetblue'}} >
                  <Text style={styles.style3}>அறத்துப்பால் : துறவறவியல்</Text>
                </View>
              </View>

              <TouchableHighlight onPress={() => this.navigate('1.1.1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>1. அருளுடைமை</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1.1.2')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>2. புலால் மறுத்தல்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1.1.3')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>3. தவம்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>4. கூடா ஒழுக்கம்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>5. 	கள்ளாமை</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>6. வாய்மை்</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>7. வெகுளாமை</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>8. இன்னா செய்யாமை</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>9. கொல்லாமை</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>10. நிலையாமை</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>11. துறவு</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>12. மெய்யுணர்தல்</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1.1.4')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>13. அவா அறுத்தல்</Text>
                </View>
              </TouchableHighlight>
                     
            </React.Fragment>
        }        

      { this.state.page === '1.4' &&
            <React.Fragment>

              <View style={{ flex: 1, flexDirection: 'row', maxHeight: 50, height: 50, backgroundColor: 'skyblue'}}>
                <View style={{ width: 100, height: 50, backgroundColor: 'cornflowerblue'}} >
                  <TouchableHighlight onPress={() => this.navigate('1')}>
                    <View style={{ width: '100%', height: '100%' }}>
                      <Text style={styles.style3}>Back</Text>
                    </View>
                  </TouchableHighlight>
                </View>

                <View style={{ flex: 1, height: 50, backgroundColor: 'cadetblue'}} >
                  <Text style={styles.style3}>அறத்துப்பால் : ஊழியல்</Text>
                </View>
              </View>

              <TouchableHighlight onPress={() => this.navigate('1.1.1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>1. ஊழ்</Text>
                </View>
              </TouchableHighlight>

            </React.Fragment>
        }

      { this.state.page === '1.1.1' &&
            <React.Fragment>

              <View style={{ flex: 1, flexDirection: 'row', maxHeight: 50, height: 50, backgroundColor: 'skyblue'}}>
                <View style={{ width: 100, height: 50, backgroundColor: 'cornflowerblue'}} >
                  <TouchableHighlight onPress={() => this.navigate('1.1')}>
                    <View style={{ width: '100%', height: '100%' }}>
                      <Text style={styles.style4}>Back</Text>
                    </View>
                  </TouchableHighlight>
                </View>

                <View style={{ flex: 1, height: 50, backgroundColor: 'cadetblue'}} >
                  <Text style={styles.style3}>அறத்துப்பால் : பாயிரவியல் : கடவுள் வாழ்த்து</Text>
                </View>
              </View>

              <TouchableHighlight onPress={() => this.navigate('1.1.1.1')}>
                <View style={{width: '100%', height: 100, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>அகர முதல எழுத்தெல்லாம் ஆதி</Text>
                  <Text style={styles.style3}>பகவன் முதற்றே உலகு</Text>
                </View>
              </TouchableHighlight>


            </React.Fragment>
        }


       { this.state.page === '2' &&
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
                  <Text style={styles.style3}>பொருட்பால்</Text>
                </View>
              </View>

              <TouchableHighlight onPress={() => this.navigate('1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>2.1 அரசியல்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>2.2 அமைச்சியல்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>2.3 அரணியல்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>2.4 கூழியல்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>2.5 படையியல்</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>2.6 நட்பியல்</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.navigate('1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>2.7 குடியியல்</Text>
                </View>
              </TouchableHighlight>

            </React.Fragment>
        }



       { this.state.page === '3' &&
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
                  <Text style={styles.style3}>காமத்துப்பால்</Text>
                </View>
              </View>

              <TouchableHighlight onPress={() => this.navigate('1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>3.1 களவியல்</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.navigate('1')} style={{width: '100%'}}>
                <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}} >
                  <Text style={styles.style3}>3.2 கற்பியல்</Text>
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
