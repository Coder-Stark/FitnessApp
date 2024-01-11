import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import fitness from '../data/fitness';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const FitnessCards = () => {
  const FitnessData = fitness;
  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable key={key} style={styles.press}>
          <Image style={styles.img} source={{uri: item.image}} />
          <Text style={styles.name}>{item.name}</Text>
          <Icon style={styles.icon} name="lightning" size={30} color="black" />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({
  press:{
    alignItems:'center',
    justifyContent:'center',
  },
  img:{
    width:'95%',
    height:120,
    marginTop:20,
    borderRadius:7,
  },
  name:{
    position:'absolute',
    color:'white',
    fontWeight:'bold',
    fontSize:18,
    left:20,
    top:25,
  },
  icon:{
    position:'absolute',
    color:'white',
    bottom:15,
    left:20
  }
});
