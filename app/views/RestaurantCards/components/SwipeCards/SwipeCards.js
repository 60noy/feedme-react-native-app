import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
// import { Action } from 'react-native-router-flux'
import { SwipeDeck } from 'react-native-elements'
import PropTypes from 'prop-types'
import RestCard from '../RestCard'
import RoundButton from '../../../../components/RoundButton'

const styles = StyleSheet.create({
  buttonsStyle: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
})
class SwipeCards extends Component {
  onSwipeRight = () => {
    // Action.restaurant(card)
  }
  onSwipeLeft = () => {
    // alert(`swiped left ${card}`)
  }
  renderCard = card => (
    <RestCard
      key={card.name}
      name={card.name}
      imageUrl="https://i.imgflip.com/1j2oed.jpg"
      types={card.types}
    />
  )
  renderNoMoreCards =() => (
    <RestCard
      name="No More Cards"
      imageUrl="https://i.imgflip.com/1j2oed.jpg"
      // imageStyle={{ borderRadius: 10, width: SCREEN_WIDTH * 0.915, height: SCREEN_HEIGHT - 165 }}
    />
  )
  render() {
    return (
      <View>
        <SwipeDeck
          data={this.props.data}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={this.onSwipeRight}
          onSwipeLeft={this.onSwipeLeft}
        />
        <View style={styles.buttonsStyle}>
          <RoundButton
            color="green"
            icon="done"
          />
        </View>
      </View>
    )
  }
}
SwipeCards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired).isRequired,
}
export default SwipeCards
