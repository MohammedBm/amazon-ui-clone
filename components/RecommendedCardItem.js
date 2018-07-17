import React, { Component } from 'react';
import { View, Text, Image  } from 'react-native';
import { CardItem, Card, Right } from 'native-base'
import StarRating from 'react-native-star-rating'

class RecommendedCardItem extends Component {
  render() {
    return (
      <CardItem>

        <View>
          <Image style={{ height: 90, width: 60 }}
            source={this.props.imageUri} />
        </View>
        
        <Right style={{ flex: 1, alignItems: 'flex-start', height: 90, paddingHorizontal: 20 }}>
          <Text>{this.props.itemName}</Text>
          <Text style={{ color: 'grey', fontSize:11 }} >{this.props.itemCreator}</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#c4402f'}}>{this.props.itemPrice}</Text>
          <Text>
            <Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
              You Save: 
            </Text>
                 ${this.props.savings}
          </Text>

          <StarRating
            disabled={true}
            maxStars={5}
            rating={this.props.rating}
            starSize={12}
            fullStarColor='orange'
            emptyStarColor='orange'
          >
          </StarRating>
        </Right>

      </CardItem>
    );
  }
}

export default RecommendedCardItem;
