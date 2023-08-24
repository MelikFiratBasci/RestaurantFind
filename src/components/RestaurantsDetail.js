import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native'

const RestaurantsDetail = ({restaurant}) =>{
    return(
        <View>
            <Image style = {styles.imageStyle} source={{uri: restaurant.image_url}} />
            <Text style= {styles.name}>{restaurant.name}</Text>
            <Text>{restaurant.rating} Stars,  {restaurant.review_count} Reviews</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    imageStyle :{
        width :250,
        height : 120,
        borderRadius :4,
    },
    name:{
        fontWeight: 'bold',
        fontSize : 12.5
    }
})

export default RestaurantsDetail