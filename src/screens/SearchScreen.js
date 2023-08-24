import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
            />
            <RestaurantsList restaurants={filterRestaurantsByPrice('$$')} 
            title="Bit Pricier" 
            />
            <RestaurantsList restaurants={filterRestaurantsByPrice('$$$')} 
            title="Big Spender"
             />
            </ScrollView>
        </>//child componentte navigation yapıldı
    )
}
const styles = StyleSheet.create({});

export default SearchScreen; 