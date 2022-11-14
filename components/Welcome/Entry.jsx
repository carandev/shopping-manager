import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

import colors from '../../colors'
import EntrySvg from '../EntrySvg'
import CustomButton from '../CustomButton'

const Entry = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Summary')
  }

  return (
    <View style={styles.container}>
      <EntrySvg style={styles.img} />
      <Text
        style={styles.title}
      >
        Empieza a vender online, fácil y rápido.
      </Text>
      <Text
        style={styles.text}
      >
        Expande tu empresa vendiendo online,
        que tus clientes vean todos tus productos con un solo click
      </Text>
      <View style={{ width: Dimensions.get('screen').width, paddingHorizontal: 20 }}>
        <CustomButton text='Empecemos' onPress={handleGetStarted} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.darkBlue
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: colors.white
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: colors.white
  },
  img: {
    marginTop: 60
  }
})

export default Entry
