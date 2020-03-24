import React from 'react'
import { View , Text, Button , ActivityIndicator } from 'react-native'
import firebase from '../../constants/firebase'
const Todo = ({route , navigation}) => {
    const {email , loading} = route.params
    return (
        <View>
            <Text>welcome {email}</Text>
            <Button title = "log out" onPress = {() => {
                firebase.auth().signOut();
                navigation.navigate('home');
            }}/>
        </View>
    )
}

export default Todo
