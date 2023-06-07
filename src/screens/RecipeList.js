import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import recipe from '../../assets/data/recipe.json'
import ListItem from '../components/LIstItem'

const RecipeList = ({ navigation }) => {

    return (
        <SafeAreaView>
            <Header title={"Recipes"} />

            <ScrollView>
                {
                    recipe.map((item, index) => (
                        <ListItem key={index} title={item.RecipeName} imgSrc={{ uri: item.ImageURL }} onPress={() => navigation.navigate('Details', item)} />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default RecipeList