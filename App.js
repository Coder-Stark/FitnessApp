import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.container}>Fitness App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    fontSize: 40,
  }
})