import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Header = ({ title, leftIcon, leftIocnOnPress }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.leftContainer}>
                {
                    leftIcon
                        ?
                        <TouchableOpacity activeOpacity={0.8} onPress={leftIocnOnPress}>
                            <Image style={styles.icon} source={require("../../assets/icons/back.png")} />
                        </TouchableOpacity>
                        :
                        <></>
                }
                <Text style={styles.title}>{title}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16
    },

    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    icon: {
        height: 25,
        width: 25,
        marginEnd: 16
    },

    title: {
        paddingVertical: 16,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#00000099'
    }
})

export default Header