import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, StatusBar } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { Container, ListItem, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base';

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
        
        <Header style={[{ backgroundColor: '#3a455c', height: 90}], styles.adnriodHeader}>
          <Left style={{flex:1, flexDirection: 'row', alignItems:'center'}}>
            <Icon name='person' style={{ color: 'white' }} />
            <Text style={{marginLeft: 5, fontSize: 18, color:'white', fontStyle: 'italic'}}>Hello, Mohammed</Text> 
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
  },{
    drawerPosition: 'left',
    contentComponent: CustomeDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adnriodHeader: {
    ...Platform.select({
      andriod: {
        paddingTop: StatusBar.currentHeight,
      }
    })
  },
});
