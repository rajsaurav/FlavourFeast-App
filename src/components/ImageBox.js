import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageBox = ({ style, title, time }) => {
    return (
        <View style={[styles.imgBoxContainer, style]}>
            <Text style={styles.imgBoxTitle}>{title}</Text>
            <Text style={styles.imgBoxTime}>{time}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imgBoxContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#00000080',
        alignSelf: 'flex-end',
        padding: 8,
        borderRadius: 15,
        width: 100,
        marginRight: 16,
        margin: 8
    },

    imgBoxTitle: {
        color: '#fff',
        textAlign: 'center'
    },

    imgBoxTime: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default ImageBox