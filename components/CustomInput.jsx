import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'

const CustomInput = ({ label, password, ...props }) => {
  const [showPassword, setShowPassword] = useState(password)

  const handlePassword = () => {
    setShowPassword(lastValue => !lastValue)
  }

  return (
    <View>
      <Text
        style={styles.label}
      >
        {label}
      </Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          {...props}
          placeholderTextColor='#999'
          secureTextEntry={showPassword}
        />
        {
          password &&
            <TouchableWithoutFeedback onPress={handlePassword}>
              {
              showPassword
                ? <FontAwesome color='white' name='eye-slash' size={20} style={styles.icon} />
                : <FontAwesome color='white' name='eye' size={20} style={styles.icon} />
              }
            </TouchableWithoutFeedback>
        }
      </View>
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
    color: '#eee',
    width: '100%'
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 15
  }
})

export default CustomInput
