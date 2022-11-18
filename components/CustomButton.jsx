import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const CustomButton = ({ text, onPress, children, small }) => {
  let styleContainer = { ...styles.container, ...styles.containerNormal }

  if (small) {
    styleContainer = { ...styles.container, ...styles.containerSmall }
  }

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <View style={styleContainer}>
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
    backgroundColor: '#111'
  },
  containerNormal: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20
  },
  containerSmall: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  text: {
    color: '#eee',
    textAlign: 'center',
    marginRight: 10
  }
})

export default CustomButton
