import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const id = navigation.getParam('id')
    // goes into the state of the array of blogPost objects and finds the object 
    // whos 'id' property is a value of the navigation parameter
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') } )}>
            <FontAwesome name="pencil" size={30}/>
        </TouchableOpacity>
    };
}

const styles = StyleSheet.create({})

export default ShowScreen;