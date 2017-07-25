import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Badge } from 'react-native-elements'
import PropTypes from 'prop-types'
// import randomColor from 'randomcolor'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  badgeStyle: {
    backgroundColor: 'grey',
  },
  badgeTextStyle: {
    fontSize: 16,
    color: 'white',
  },
})
const TagsList = ({ tags }) => (
  <View style={styles.container}>
    {tags.map(tag =>
      (<Badge
        containerStyle={styles.badgeStyle}
        key={tag}
      >
        <Text style={styles.badgeTextStyle}>{tag}</Text>
      </Badge>),
    )}
  </View>
)

TagsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}
export default TagsList
