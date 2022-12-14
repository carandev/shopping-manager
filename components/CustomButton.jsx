import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const CustomButton = ({ text, onPress, children, small, large }) => {
  let styleContainer = { ...styles.container, ...styles.containerNormal }

  if (small) {
    styleContainer = { ...styles.container, ...styles.containerSmall }
  } else if (large) {
    styleContainer = { ...styles.container, ...styles.containerLarge }
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
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 15
  },
  containerLarge: {
    paddingVertical: 15,
    paddingHorizontal: 40,
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
