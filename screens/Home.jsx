import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import colors from '../colors'
import { readShops } from '../firebase/firestore'
import { CustomButton, ShopCard, WelcomeSvg } from '../components'
import { auth } from '../firebase'

const Home = ({ navigation }) => {
  const [shops, setShops] = useState([])
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    readShops(setShops)
    const userShop = shops.find(shop => shop.user === auth.currentUser.uid)

    if (userShop) {
      setShowWelcome(false)
    }
  }, [shops, setShops])

  const goToCreateShop = () => {
    navigation.navigate('CreateShop')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tiendas</Text>
      {
        showWelcome &&
        <View style={styles.welcomeContainer}>
        <WelcomeSvg />
        <View style={styles.welcomeMessageContain}>
          <Text style={styles.welcomeMessageText}>
            Bienvenido, estas son los negocios que puedes visitar para conocer
            todos los productos que ofrecen.
          </Text>
          <CustomButton small text='Añadir mi tienda' onPress={goToCreateShop} />
        </View>
      </View>
      }
      <ScrollView
        contentContainerStyle={styles.shopsContainer}
      >
        {
          shops.map(shop => <ShopCard key={shop.id} shop={shop} />)
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    padding: 20
  },
  title: {
    color: colors.white,
    fontSize: 40
  },
  welcomeMessageText: {
    color: colors.white,
    textAlign: 'center'
  },
  welcomeMessageContain: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20
  },
  shopsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%'
  },
  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 50,
    paddingHorizontal: 60
  }
})

export default Home
