import { View, Text, StyleSheet } from 'react-native'
import { A } from '@expo/html-elements'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'

import colors from '../../colors'
import CustomButton from '../CustomButton'

const Summary = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
      >
        Gracias por usar nuestra aplicación. Si tienes algún problema
        nos puedes contactar por los siguientes medios
      </Text>
      <View
        style={styles.linkContainer}
      >
        <A href='mailto: carlos@carandev.me' style={styles.link}>
          <AntDesign color='black' name='mail' size={40} />
        </A>
        <A href='https://twitter.com/carandev' style={styles.link}>
          <AntDesign color='black' name='twitter' size={40} />
        </A>
        <A href='tel: +573185371949' style={styles.link}>
          <AntDesign color='black' name='phone' size={40} />
        </A>
      </View>
      <CustomButton text='Iniciar Sesión' onPress={handleNext} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: colors.darkBlue,
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  text: {
    color: colors.white,
    fontSize: 20,
    textAlign: 'center'
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  link: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    marginVertical: 40
  }
})

export default Summary
