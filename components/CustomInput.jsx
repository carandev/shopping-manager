import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({ label, password, ...props }) => {
  return (
    <View>
      <Text
        style={styles.label}
      >
        {label}
      </Text>
      <TextInput
        style={styles.input}
        {...props}
        placeholderTextColor='#999'
        secureTextEntry={password}
      />
    </View>
  )
}

// TODO: styles

const styles = StyleSheet.create({
  label: {
    color: '#eee'
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginVertical: 10,
    borderColor: '#ccc',
    color: '#eee'
  }
})

export default CustomInput
