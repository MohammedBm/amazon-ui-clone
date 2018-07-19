import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen'

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const CustomeDrawerContentComponent = (props) => {
    return (
      <Container>
        <Header style={[styles.header, styles.adnriodHeader ]}>
          <Left style={styles.infoBox}>
            <Icon name='person' style={{ color: 'white' }} />
            <Text style={styles.userName}>Hello, Mohammed</Text> 
          </Left>
        </Header>

        <Content>
          <FlatList 
            style={{ borderTopWidth: 0.5, borderTopColor: '#f0f0f0' }}
            data={[
              'Home', 'Shop by Category', "Today's Deals"
            ]}
            renderItem={({item}) => (
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            )}
          />

          <FlatList 
            style={{ borderTopWidth: 0.5, borderTopColor: '#f0f0f0' }}
            data={[
              'Home', 'Shop by Category', "Today's Deals"
            ]}
            renderItem={({item}) => (
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            )}
          />

          <FlatList 
            style={{ borderTopWidth: 0.5, borderTopColor: '#f0f0f0' }}
            data={[
              'Home', 'Shop by Category', "Today's Deals"
            ]}
            renderItem={({item}) => (
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            )}
          />

        </Content>

      </Container>
    )
}

const AppDrawerNavigator = new createDrawerNavigator({
  HomeScreen: { screen: HomeScreen }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#3a455c', 
    height: 90
  },
  adnriodHeader: {
    ...Platform.select({
      andriod: {
        paddingTop: StatusBar.currentHeight,
      }
    })
  },
  infoBox: { 
    flex:1, 
    flexDirection: 'row', 
    alignItems:'center'
  },
  userName: {
    marginLeft: 5, 
    fontSize: 18, 
    color:'white', 
    fontStyle: 'italic' 
  } 
});
