/* eslint-disable camelcase, no-debugger */
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'
import { Slider, Button } from 'react-native-elements'
import LoaderSpin from 'react-native-spinkit'
import { red } from '../../utils/colors'
import { NEARBY_PLACES_BASE_URL, PLACE_PHOTO_BASE_URL } from '../../utils/constants'
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
      distance: 10,
      isLoading: false,
      test: 'test',
      latitude: 0,
      longitude: 0,
      error: null,
      data: [],
    }
  }
  componentWillMount() {
    this.getLocationToState()
  }

  getLocationToState = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        })
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    )
  }


  getNearbyRestsDataPromise = () => {
    const { distance, latitude, longitude } = this.state
    const radius = distance * 1000 // 1km = 1000m
    const url = `${NEARBY_PLACES_BASE_URL}&radius=${radius}&location=${latitude},${longitude}`
    this.setState({ isLoading: true })
    return axios.get(url)
    .then(response =>
      // debugger
       response.data.results.map(item =>
        // const image = this.photoDataToImage(item.photos[0].image).then((im) => {})
        ({
          id: item.place_id,
          // photo: this.photoDataToImage(item.photos[0].image),
          // photo: this.photoDataToImage(item.photos[0].image),
          // TODO: return the data from image promise after uncommit
          imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOQeNnuchvBNedMBGv8qysC__il-UYEZFWI23WQ=s1600-w400',
          name: item.name,
          rating: item.rating,
          types: item.types,
        }),
    ))
    .catch((error) => { console.error(error) })
  }

  searchRests = () => {
    const restsData = this.getNearbyRestsDataPromise()
    restsData.then((data) => {
      this.setState({ data, isLoading: false })
      Actions.cards({ data })
    })
  // debugger // eslint-disable-line no-debugger
  // imageUrl: this.photoDataToImagePromise(rest.photos[0]),
  }

  // photo data object to image
  photoDataToImagePromise = (photo) => {
    const { width, height, photo_reference } = photo
    const url = `${PLACE_PHOTO_BASE_URL}&maxwidth=${width}&maxheight=${height}&photoreference=${photo_reference}`
    return axios.get(url)
    .catch((err) => { this.setState({ error: `error fetching image${err}` }) })
  }
  // updates distance state on slider value change
  handleSliderChange = (distance) => {
    this.setState({ distance })
  }
  render() {
    const { distance, isLoading } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.primaryTitle}>
        Feed Me
      </Text>
        <Text>
          {this.state.test}
        </Text>
        <Text>
          latitude : {this.state.latitude} longitude: {this.state.longitude} {this.state.error}
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
          <Text>
            {this.state.error}
          </Text>
        </View>
        <View style={styles.getFoodBtn}>
          {!isLoading &&
          <Button
            raised
            backgroundColor={red}
            onPress={this.searchRests}
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
