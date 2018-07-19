import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Platform, StatusBar  } from 'react-native';
import Swiper from 'react-native-swiper';

class Swipers extends Component {
  render() {
    return (
      <View>
        <Swiper
          style={{ height: 100 }}
        >
          <View style={{ flex: 1 }}>
            <Image style={styles.swipers}
              source={require('../assets/fabric1.jpg')} />
          </View>

          <View style={{ flex: 1 }}>
            <Image style={styles.swipers}
              source={require('../assets/fabric2.jpg')} />
          </View>

          <View style={{ flex: 1 }}>
            <Image style={styles.swipers}
              source={require('../assets/fabric1.jpg')} />
          </View>
        </Swiper>
      </View>
    );
  }
}

export default Swipers;


const styles = StyleSheet.create({
  swipers: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain'
  },
  adnriodHeader: {
    ...Platform.select({
      andriod: {
        paddingTop: StatusBar.currentHeight,
      }
    })
  }
});
