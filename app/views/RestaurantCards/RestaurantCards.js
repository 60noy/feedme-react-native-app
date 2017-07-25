import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import SwipeCards from './components/SwipeCards'

class RestaurantCards extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <View>
        {/* <Text> */}
        {/* {this.props.data.length} */}
        {/* </Text> */}
        <SwipeCards data={this.props.data} />

      </View>
    )
  }

}
RestaurantCards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired).isRequired,
}

export default RestaurantCards


// { /* {data.map((card) =>
//         <Card
//           name={card.name}
//           imageUrl={card.imageUrl}
//           rating={card.rating}
//           p
//       )}
// </CardsDector> */ }
