import { View, Text, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ label, password, ...props }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        {...props}
        placeholderTextColor='#999'
        secureTextEntry={password}
      />
    </View>
  )
}

// TODO: styles

export default CustomInput
