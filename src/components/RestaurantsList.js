import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import RestaurantsDetail from './RestaurantsDetail'

const RestaurantsList = ({title, restaurants, navigation}) => {
    return(
        <View style={styles.container} >
            <Text style={styles.titleStyle} >
                {title}
            </Text>
            <FlatList 
                horizontal = {true}
                showsHorizontalScrollIndicator ={false}
                data = {restaurants}   
                keyExtractor={(restaurant)=>restaurant.id}//key extractor flatlistte key-value yapısını sağlar
                renderItem = {({item})=>{
                        return (
                        <TouchableOpacity onPress={()=>navigation.navigate('RestaurantsShow')}>
                        <RestaurantsDetail restaurant={item} />
                        </TouchableOpacity>
                        )
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
        marginLeft :15,  
        marginBottom:5,
    },
    container :{
        marginBottom :10,
    }
})

export default RestaurantsList;