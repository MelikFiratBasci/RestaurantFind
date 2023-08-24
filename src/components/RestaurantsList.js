import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import RestaurantsDetail from './RestaurantsDetail'

const RestaurantsList = ({title, restaurants}) => {
    return(
        <View>
            <Text style={styles.titleStyle} >
                {title}
            </Text>
            <FlatList 
                horizontal = {true}
                data = {restaurants}   
                keyExtractor={(restaurant)=>restaurant.id}//key extractor flatlistte key-value yapısını sağlar
                renderItem = {
                    ({item})=>{
                        return <RestaurantsDetail restaurant={item} />
                    }
                }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize :18,
        fontWeight: 'bold',
    }
})

export default RestaurantsList;