import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <Text
        style={styles.text}
      >
        {text}
      </Text>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#eee',
    backgroundColor: '#111',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20
  }
})

export default CustomButton
