import React from 'react';
import { View,Image,TouchableOpacity,Text, StyleSheet } from 'react-native';

export default function Header() {
 return (
   <View style={styles.header}>
     <TouchableOpacity>
      <Image 
     source={require('../../img/logo.png')}
     style={styles.logo}
     />
     </TouchableOpacity>
     <TouchableOpacity>
      <Image 
     source={require('../../img/send.png')}
     style={styles.send}
     />
     </TouchableOpacity>
     
   </View>
  );
}

const styles = StyleSheet.create({
  header:{
    height: 55,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderBottomWidth:0.2,
    elevation:1,
    shadowColor:'gray'

  },
  logo:{
    marginLeft:15,
  },
  send:{
    height: 23,
    width: 23,
    marginRight:15,

  }
});