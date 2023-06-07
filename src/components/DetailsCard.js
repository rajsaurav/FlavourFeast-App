import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsCard = ({ iconSrc, title }) => {
    return (
        <View style={styles.detailContainer}>
            <Image style={styles.detailIcon} source={iconSrc} />
            <Text style={styles.detailsText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    detailContainer: {
        flexDirection: 'row',
        flexBasis: '45%',
        marginVertical: 8,
        alignItems: 'center'
    },

    detailIcon: {
        height: 30,
        width: 30,
        marginRight: 8
    },

    detailsText: {
        fontSize: 16
    }
})

export default DetailsCard