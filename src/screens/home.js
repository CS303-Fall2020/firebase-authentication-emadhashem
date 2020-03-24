import React, { useState } from 'react'
import 
    {View, Text, Button , TextInput, StyleSheet
    , TouchableWithoutFeedback, Keyboard, Alert 
} from 'react-native'
import firebase, {db , auth} from '../../constants/firebase'
const Home = ({navigation}) => {
    const [data , setData] = useState({
        email : '',
        pass : ''
    });
    const[loading , setLoad] = useState(true)
    const logIn = (email , pass) => {
        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(user => {
            navigation.navigate('todo' , {
                email : email,
                loading,
            })

        })
        .then(() => setLoad(false))
        .catch((error) => {
            Alert.alert(error.message)
        });
    }
    return (
        <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
            <View>
                <View style = {styles.formContainer}>
                    <TextInput style = {styles.txtInp} onChangeText = {(email) => {
                        setData({
                            ...data,
                            email
                        })
                    }}
                        placeholder = "email@..."
                        value = {data.email}
                    />
                    <TextInput style = {styles.txtInp} onChangeText = {(pass) => {
                        setData({
                            ...data,
                            pass
                        })
                        
                    }}
                    placeholder = "password"
                    secureTextEntry = {true}
                    value = {data.pass}
                    />
                    <Button title = "login" onPress = {() => {
                        logIn(data.email + "" , data.pass + "");
                        setData({
                            email : '',
                            pass :''
                        })
                    }} />
                </View>
           
           
            <View style = {styles.btnContainer}>
                <Button title = "sign up" onPress = {
                            () =>  navigation.navigate('Signup')
                        }
                />  
                <Button title = "forgetPass" onPress = {
                            () =>  navigation.navigate('forget')
                        }
                />
            </View>
            </View>
       </TouchableWithoutFeedback >
    )
}
const styles = StyleSheet.create({
    txtInp : {
        width : '80%',
        // height : 20,
        padding : 15,
        // justifyContent : "center",
        marginBottom : 15,
        borderWidth : 1
    },
    formContainer : {
        alignItems : "center",
        marginTop : 15
    },
    btnContainer : {
        justifyContent : "space-around",
        height : '30%',
        marginTop : 20
    }
})
export default Home
