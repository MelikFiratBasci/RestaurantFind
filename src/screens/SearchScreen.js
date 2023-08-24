import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/searchBar';

const SearchScreen = () =>{
    const [term,setTerm] = useState('') // search term verileri için callback! 
    return(
        <View>
            <SearchBar term= {term} onTermChange = {newTerm => setTerm(newTerm)} />
            <Text>
                {term}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({});

export default SearchScreen ; 