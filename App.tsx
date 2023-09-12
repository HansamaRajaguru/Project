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
      <View style={styles.pinContainer}>
        const count=4;
        for (let index = 0; index < count; index++) {
          <View style={styles.pinDot}></View>
        }
      </View>
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
    fontSize: 24,
    color:'#5A7FD6',
    marginBottom:10,
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
  pinDot:{
    width: 17,
    height:17,
    borderRadius:8,
    marginHorizontal:10,
    backgroundColor:'white',
    borderWidth:2,
    borderColor:'#5A7FD6'
  },
  dotFilled:{
    width: 17,
    height:17,
    borderRadius:8,
    marginHorizontal:10,
    backgroundColor:'#E15646'
  },

})

export default App;