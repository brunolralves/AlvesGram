import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function List(props) {
  const [like, setLike] = useState(false);
  const [imgLike, setImgLike] = useState(require('../../img/like.png'));
  function likear(liked) {
    like === false ? setLike(true) : setLike(false)
    
    mudaLike()
  }

  function mudaLike() {
    like === false ? setImgLike(require('../../img/likeada.png')) : setImgLike(require('../../img/like.png'))
  }
  return (
    <ScrollView style={styles.list}>
      <View style={styles.feed}>
        <View style={styles.post}>
          <Image
            style={styles.fotoPerfil}
            source={{ uri: props.data.imgperfil }}
          />
          <Image
            style={styles.imgPublicacao}
            source={{ uri: props.data.imgPublicacao }}
          />

          <View style={styles.interacoes}>
            <TouchableOpacity onPress={() => likear(props.data.liked)}>
              <Image
                style={styles.like}
                source={imgLike}
              />
            </TouchableOpacity>

           

          </View>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,

  },
  feed: {
    alignItems: 'center'
  },
  post: {
    width: 400,
    height: 400,
    borderColor: 'black',
    margin: 20,

  },
  fotoPerfil: {
    width: 45,
    height: 45,
    borderRadius: 1000,
    marginLeft: 10

  },
  imgPublicacao: {
    height: 300,
    margin: 10
  },
  interacoes: {
    flexDirection: 'row',

  },
  like: {
    width: 23,
    height: 23,
    marginLeft: 10
  }
});