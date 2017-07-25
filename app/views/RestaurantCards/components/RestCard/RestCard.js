import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Card } from 'react-native-elements'
import PropTypes from 'prop-types'
import TagsList from '../../components/TagsList'

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
})

const RestCard = ({ name, types, imageUrl }) => (
  <View>
    <Card
      title={name}
      image={{ uri: imageUrl }}
    >
      <Text style={styles.title}> {name} </Text>
      {types &&
        <TagsList tags={types} />
      }
    </Card>
  </View>
)

RestCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}
export default RestCard
