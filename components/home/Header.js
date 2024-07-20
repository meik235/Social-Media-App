import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { firebase} from '../../firebase'

const handleSignout = async () => {
  try {
    firebase.auth().signOut() 
    console.log('Signed out successfully!')
  } catch(error) {
    console.log(error)
  }
}

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ handleSignout } >
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')} 
        /> 
      </TouchableOpacity>   

      <View style={styles.iconsContainer}>
      <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Image 
            style={styles.icon} 
            source={require('../../assets/icons-add-new.png')} 
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            style={styles.icon} 
            source={require('../../assets/icons-heart.png')} 
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>3</Text>  
          </View>
          <Image 
            style={styles.icon} 
            source={require('../../assets/icons-messenger.png')} 
          />
        </TouchableOpacity>
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 17,
  },

  iconsContainer: {
    flexDirection: 'row',
  },

  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
  },

  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },

  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 25,
    bottom: 19,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },

  unreadBadgeText: {
    color: 'white',
    fontWeight: '600',
  },
})

export default Header