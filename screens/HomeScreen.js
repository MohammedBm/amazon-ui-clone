import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Left, Right, Icon, Item, Input } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome'

class HomeScren extends Component {
  render() {
    return (
      <Container>

        <Header style={styles.header}>
          <Left style={styles.leftComp}>
            <Icon name='md-menu' style={styles.menuIcon} />
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

        </Content>

      </Container>
    );
  }
}

export default HomeScren;

const styles = StyleSheet.create({
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
  }
});
