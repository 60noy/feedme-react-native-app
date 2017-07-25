import React from 'react'
import { View, Text } from 'react-native'

const RestaurantCards = () => (
  <View>
    <CardsDector>
      {data.map((card) =>
        <Card
          name={card.name}
          imageUrl={card.imageUrl}
          rating={card.rating}
          p
      )}
    </CardsDector>
    <Text />
  </View>
  // <CardView
  //   image={cards.image}
  //   title={cards.title}
  //   desciption={cards.description}
  // />
)

export default RestaurantCards
