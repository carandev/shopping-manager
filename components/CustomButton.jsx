import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const CustomButton = ({ text, onPress, children }) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text
          style={styles.text}
        >
          {text}
        </Text>
        {children}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20
  },
  text: {
    color: '#eee',
    textAlign: 'center',
    marginRight: 10
  }
})

export default CustomButton
