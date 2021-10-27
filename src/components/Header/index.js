import React from 'react';
import { View,Image,TouchableOpacity,Text, StyleSheet } from 'react-native';

export default function Header() {
 return (
   <View style={styles.header}>
     <TouchableOpacity>
      <Text>Sou um botão</Text>
     </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  header:{
    height: 55,
    backgroundColor:'black',
    
  },
  logo:{

  }
});