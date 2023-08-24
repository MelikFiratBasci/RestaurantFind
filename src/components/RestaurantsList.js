import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { withNavigation } from "react-navigation";//child componentte navigation yapıldı // With Navigation Helper!
import RestaurantsDetail from './RestaurantsDetail'

const RestaurantsList = ({title, restaurants, navigation}) => {
    if(!restaurants.length){
        return null;
    }
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
                        <TouchableOpacity onPress={()=>navigation.navigate('RestaurantsShow',{id: item.id})}>
                        <RestaurantsDetail restaurant={item} />
                        </TouchableOpacity>
                        )//child componentte navigation yapıldı
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

export default withNavigation(RestaurantsList);//child componentte navigation yapıldı