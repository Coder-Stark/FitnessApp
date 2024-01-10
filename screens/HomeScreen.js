import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.home}>HOME WORKOUT</Text>
        <View style={styles.inner}>
          <View>
            <Text style={styles.count}>0</Text>
            <Text style={styles.countName}>WORKOUTS</Text>
          </View>
          <View>
            <Text style={styles.count}>0</Text>
            <Text style={styles.countName}>KCAL</Text>
          </View>
          <View>
            <Text style={styles.count}>0</Text>
            <Text style={styles.countName}>MINS</Text>
          </View>
        </View>
        <View style={styles.imgContainer}>
          <Image  style={styles.img} source={require('../assets/img2.jpg')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    padding: 10,
    height: 200,
    width: '100%',
  },
  home: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  count: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  countName:{
    color:'gray',
    fontSize:17,
    marginTop:6
  },
  imgContainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  img:{
    width:'90%',
    height:120,
    marginTop:20,
    borderRadius:7,
  }
});
