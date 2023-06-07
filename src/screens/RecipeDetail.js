import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import ImageBox from '../components/ImageBox'
import DetailsCard from '../components/DetailsCard'
import Content from '../components/Content'

const RecipeDetail = ({ route, navigation }) => {
    const RecipeItem = route.params

    return (
        <View style={styles.container}>
            <Header leftIcon={true} title={"Details"} leftIocnOnPress={() => navigation.goBack()} />

            <ScrollView>
                <ImageBackground source={{ uri: RecipeItem.ImageURL }} style={styles.image}>
                    <ImageBox style={{ marginTop: 16 }} title={"Preparation Time (Mins)"} time={RecipeItem.PrepTime} />
                    <ImageBox style={{ marginBottom: 16 }} title={"Cooking Time (Mins)"} time={RecipeItem.CookTime} />
                </ImageBackground>

                <View style={styles.detailsContainer}>
                    <Text style={styles.recipeName}>{RecipeItem.RecipeName}</Text>

                    <View style={styles.detailBox}>
                        <DetailsCard title={RecipeItem.Servings} iconSrc={require('../../assets/icons/serving.png')} />
                        <DetailsCard title={RecipeItem.Diet} iconSrc={require('../../assets/icons/diet.png')} />
                        <DetailsCard title={RecipeItem.Course} iconSrc={require('../../assets/icons/course.png')} />
                        <DetailsCard title={RecipeItem.Cuisine} iconSrc={require('../../assets/icons/cuisine.png')} />
                    </View>

                    <Content title={"Ingredients"} desc={RecipeItem.Ingredients} />
                    <Content title={"Preparation Method"} desc={RecipeItem.Instructions} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    image: {
        width: "100%",
        resizeMode: 'cover',
        flexDirection: 'column',
        backgroundColor: '#00000030'
    },

    detailsContainer: {
        padding: 16
    },

    recipeName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },

    detailBox: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default RecipeDetail
  