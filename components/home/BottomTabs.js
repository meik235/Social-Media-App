import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: require('../../assets/icons-homea.png'),
        inactive: require('../../assets/icons-home.png'),
    },
    {
        name: 'Search',
        active: require('../../assets/icons-searcha.png'),
        inactive: require('../../assets/icons-search.png'),
    },
    {
        name: 'Reels',
        active: require('../../assets/icons-reelsa.png'),
        inactive: require('../../assets/icons-reels.png'),
    },
    {
        name: 'Activity',
        active: require('../../assets/icons-hearta.png'),
        inactive: require('../../assets/icons-heart.png'),
    },
    {
        name: 'Profile',
        active: require('../../assets/icons-robota.png'),
        inactive: require('../../assets/icons-robot.png'),
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')
  
    const Icon = ({ icon }) => (
      <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image 
            source={ activeTab === icon.name ? icon.active : icon.inactive } 
            style={[
                styles.icon, 
                icon.name === 'Profile' ? styles.profilePic() : null,
                activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab) : null,
            ]} 
        />
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        zIndex: 999,
        backgroundColor: '#000',
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },

    icon: {
        width: 30,
        height: 30,
    },

    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor: 'white',
    }),
})

export default BottomTabs