import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import SignupForm from '../components/signupScreen/SignupForm'

const RATHETELE_LOGO = 'https://img.icons8.com/bubbles/50/000000/chat.png'

const SignupScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={{ uri: RATHETELE_LOGO, height: 100, width: 100 }} />
        </View>
        <SignupForm navigation={navigation} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },

    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
})

export default SignupScreen