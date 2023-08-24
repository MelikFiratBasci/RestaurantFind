import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'//icon kütüphanesi

const SearchBar = ({term, onTermChange, onTermSubmit}) => {//to pass parent Component
    return (
        <View style={styles.backgroundStyle}> 
            <Ionicons name="search-sharp" style = {styles.searchIconStyle} />
            <TextInput 
            autoCorrect = {false}
            autoCapitalize='none'
            value ={term}
            onChangeText={onTermChange}
            style={styles.inputStyle} 
            onEndEditing={onTermSubmit}
            placeholder='Search'/> 
        </View>
    )
}
const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#DFDFDF',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection :'row',
        marginBottom: 8.5,
    },
    inputStyle:{
        flex : 1,
        fontSize :19

    },
    searchIconStyle : {
        fontSize: 35 ,
        color: "black",
        alignSelf : 'center',
        marginHorizontal :8
    }
});

export default SearchBar; 