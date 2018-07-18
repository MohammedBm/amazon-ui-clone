import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar, Image } from 'react-native';
import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper';

import RecommendedCardItem from '../components/RecommendedCardItem'

class HomeScren extends Component {
  render() {
    return (
      <Container>

        <Header style={[styles.header, styles.adnriodHeader]}>
          <Left style={styles.leftComp}>
            <Icon onTouch={() => this.props.navigation.navigate('DrawerOpen')} 
            name='md-menu' style={styles.menuIcon} />
            <FAIcon name='amazon' style={styles.amazonIcon} />
          </Left>
          <Right>
            <Icon name='md-cart' style={styles.cartIcon} />
          </Right>
        </Header>

        <View style={styles.secondryBar}>

          <TouchableOpacity>
            <View style={styles.dropdownMenu}>
              <Text style={{ fontSize: 12 }}>
                Shop By
              </Text>
              <Text style={{ fontWeight: 'bold'}}>
                Category
              </Text>
              </View>
          </TouchableOpacity>

          <View style={styles.searchbar}>
            <Item style={styles.searchbarBorder}>
              <Icon name='search' style={styles.searchbarIcon} />
              <Input palceholder='Search' />
            </Item>
          </View>

        </View>

        <Content style={styles.content}>

          <View style={styles.userInfo}>
            <Text>Hello, Mohammed</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text>Your Account </Text>
              <Icon name='arrow-forward' style={{
                fontSize: 18
              }} />
            </View>
          </View>

          <Swiper style={{ height: 100}} >
              <View style={{ flex: 1}}>
                <Image style={styles.swiperImage}
                source={require('../assets/fabric1.jpg')} />
              </View>

              <View style={{ flex: 1}}>
                <Image style={styles.swiperImage}
                source={require('../assets/fabric2.jpg')} />
              </View>

              <View style={{ flex: 1}}>
                <Image style={styles.swiperImage}
                source={require('../assets/fabric1.jpg')} />
              </View>
          </Swiper>

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

        </Content>

      </Container>
    );
  }
}

export default HomeScren;

const styles = StyleSheet.create({
  adnriodHeader: {
    ...Platform.select({
      andriod: {
        paddingTop: StatusBar.currentHeight,
      }
    })
  },
  header: {
    backgroundColor: '#3a455c',
    height: 90, borderBottomColor: '#757575'
  },
  leftComp: {
    flexDirection: 'row'
  },
  menuIcon: {
    color: "white",
    'marginRight': 15
  },
  amazonIcon: {
    fontSize: 32,
    color: 'white'
  },
  cartIcon: {
    color: 'white'
  },
  secondryBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 90,
    height: 70,
    backgroundColor: '#3a455c',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  dropdownMenu: {
    width: 100,
    backgroundColor: '#e7e7eb',
    height: 50,
    borderRadius: 4,
    padding: 10
  },
  searchbar: {
    flex: 1,
    height: "100%",
    marginLeft: 5,
    justifyContent: 'center'
  },
  searchbarBorder: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 5
  },
  searchbarIcon: {
    fontSize: 20,
    padding: 5
  },
  content: {
    backgroundColor: '#d5d5d6',
    marginTop: 70
  },
  userInfo: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  swiperImage: { 
    flex: 1, 
    height: null, 
    width: null, 
    resizeMode: 'contain' 
  },
  cardItem: { 
    borderBottomWidth: 1, 
    borderBottomColor: '#dee0e7' 
  }
});
