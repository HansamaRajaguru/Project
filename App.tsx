/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

const App = ()=>{
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Enter Passcode</Text>
      <Text style={styles.errorText}>Wrong Passcode</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA'
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color:'#5A7FD6'
  },
  errorText:{
    fontFamily: 'Roboto',
    fontSize: 12,
    color:'#E15646'
  },
  pinContainer:{
    marginBottom:12,
    flexDirection:'row'
  },

})

export default App;