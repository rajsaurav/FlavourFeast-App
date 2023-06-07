import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const ListItem = ({ title, onPress, imgSrc }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.listItemContainer}>
            <Image source={imgSrc} style={styles.listItemIcon} />
            <Text ellipsizeMode='tail' style={styles.listItemText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItemContainer:{
        borderBottomColor:"#00000030",
        backgroundColor:"#ffffff",
        borderBottomWidth:0.25,
        paddingVertical:16,
        paddingHorizontal:16,
        flexDirection:'row',
        width:"100%",
        alignItems:'center'
    },

    listItemIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#00000030",
        borderRadius: 18,
        borderColor: "#00000030",
        borderWidth: 0.25
    },

    listItemText: {
        fontSize: 18,
        marginHorizontal: 16,
        width: "80%",
        color: "#505050"
    }
})

export default ListItem