import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar, Image } from 'react-native';
import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper';

import RecommendedCardItem from './RecommendedCardItem'

class cardInfo extends Component {
  render() {
    return (
      <View>

        <Card style={{marginLeft: 5, marginRight: 5}}>

            <CardItem header style={styles.cardItem}>
            <Text>Your Recomendations</Text>
            </CardItem>

            <RecommendedCardItem
            itemName="Uncharted 4: A Thief's End - PlayStation 4"
            itemCreator='Naughty Dog'
            itemPrice="19.99$"
            savings="1.98"
            imageUri={require("../assets/recom1.jpg")}
            rating={4.5}
            />

            <RecommendedCardItem
            itemName="Oathbringer: Book Three of the Stormlight Archive"
            itemCreator='Brandon Sanderson'
            itemPrice="24.67$"
            savings="10.32"
            imageUri={require("../assets/recom2.jpg")}
            rating={5}
            />

            <RecommendedCardItem
            itemName="Portable Charger Anker PowerCore 20100mAh"
            itemCreator='Anker'
            itemPrice="30.79$"
            savings="17.20"
            imageUri={require("../assets/recom3.jpg")}
            rating={4.5}
            />

            <RecommendedCardItem
            itemName="XDDESIGN Bobby Compact Anti-Theft Backpack"
            itemCreator='XDDesign'
            itemPrice="$99.00"
            savings="11.20"
            imageUri={require("../assets/recom4.jpg")}
            rating={4.5}
            />

        </Card>
      </View>

    );
  }
}

export default cardInfo

const styles = StyleSheet.create({
  cardItem: { 
    borderBottomWidth: 1, 
    borderBottomColor: '#dee0e7' 
  }
});
