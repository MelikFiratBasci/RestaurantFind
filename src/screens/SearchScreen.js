import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/searchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/RestaurantsList';



const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('') // search term verileri için callback! 
    const [searchApi, restaurants, errorMessage] =useRestaurants(); // UseRestaurants hookstan return!! 

    const filterRestaurantsByPrice = (price) =>{
        return restaurants.filter(restaurant =>{
            return restaurant.price === price;
        })

    }
//ekrana düzgün yayılması için flex
    return (
        <>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
          
            <ScrollView>
            <RestaurantsList restaurants={filterRestaurantsByPrice('$')} 
            title ="Cost Effective" 
            navigation ={navigation}
            />
            <RestaurantsList restaurants={filterRestaurantsByPrice('$$')} 
            title="Bit Pricier" 
            navigation ={navigation}
            />
            <RestaurantsList restaurants={filterRestaurantsByPrice('$$$')} 
            title="Big Spender"
            navigation ={navigation}
             />
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({});

export default SearchScreen; 