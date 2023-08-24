import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/searchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/RestaurantsList';



const SearchScreen = () => {
    const [term, setTerm] = useState('') // search term verileri için callback! 
    const [searchApi, restaurants, errorMessage] =useRestaurants(); // UseRestaurants hookstan return!! 

    const filterRestaurantsByPrice = (price) =>{
        return restaurants.filter(restaurant =>{
            return restaurant.price === price;
        })

    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>
                we have found {restaurants.length} results
            </Text>
            <RestaurantsList restaurants={filterRestaurantsByPrice('$')} title ="Cost Effective" />
            <RestaurantsList restaurants={filterRestaurantsByPrice('$$')} title="Bit Pricier" />
            <RestaurantsList restaurants={filterRestaurantsByPrice('$$$')} title="Big Spender" />

        </View>
    )
}
const styles = StyleSheet.create({});

export default SearchScreen; 