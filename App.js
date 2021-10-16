import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './AppStyles'
const App = () => {
  return (
    <View
      style={
        styles.container
      }>
      <Text
        style={
          styles.text_big
        }>
        Muchammad 'Irfan Chanif Rusydi 1103190001
      </Text>
      <Image source={require('./images/reactthumbnail.png')} style={{
        width:300,height:300,resizeMode:'contain'
      }}/>
    </View>
  );
};

export default App;
