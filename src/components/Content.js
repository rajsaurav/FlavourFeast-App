import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Content = ({title, desc}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:20,
        marginVertical:16
    },

    desc:{
        fontSize:18,
        color:'#00000099'
    }
})

export default Content