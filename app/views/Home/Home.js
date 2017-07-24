import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Slider, Button } from 'react-native-elements'
import LoaderSpin from 'react-native-spinkit'
import { red } from '../../utils/colors'
// TODO: user palette from material colors
// TODO: add status - e.g 'you must be hungry' for 1km distance

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  primaryTitle: {
    fontSize: 24,
    color: red,
    marginTop: 20,
  },
  sencondaryTitle: {
    fontSize: 18,
    color: red,
    marginTop: 20,
  },
  slider: {
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '60%',
    marginTop: 24,
  },
  distance: {
    alignSelf: 'center',
    marginTop: 24,
  },
  getFoodBtn: {
    marginTop: 150,
  },
})

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      distance: 4,
      isLoading: false,
    }
  }
  handleSliderChange = (distance) => {
    this.setState({ distance })
  }

  searchRestaurants = () => {
    // call fetch
    // push router with props of restaurants
    this.setState({ isLoading: true })
  }
  render() {
    const { distance, isLoading } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.primaryTitle}>
        Feed Me
      </Text>
        <Text style={styles.sencondaryTitle}>
        How far will you go?
      </Text>
        <View style={styles.slider}>
          <Slider
            minimumValue={1}
            maximumValue={20}
            value={distance}
            onValueChange={value => this.handleSliderChange(value)}
            step={1}
          />
          <Text style={styles.distance}>
            {distance} km
          </Text>
        </View>
        <View style={styles.getFoodBtn}>
          {!isLoading &&
          <Button
            raised
            backgroundColor={red}
            onPress={this.searchRestaurants}
            title="GET ME FOOD"
          />
        }
        </View>
        <LoaderSpin
          isVisible={this.state.isLoading}
          color={red}
          type="9CubeGrid"
          size={50}
        />
      </View>
    )
  }
}

export default Home
