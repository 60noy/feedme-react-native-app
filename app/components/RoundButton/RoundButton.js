import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'

const RoundButton = ({ color, icon }) => (
  <View>
    <Button
      raised
      color={color}
      icon={{ name: icon }}
      containerViewStyle={{ borderRadius: 100 }}
      borderRadius={100}
    />
  </View>
)

RoundButton.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
export default RoundButton
