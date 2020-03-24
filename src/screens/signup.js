import React, { useState } from 'react'
import {View , Text , TouchableWithoutFeedback , TextInput,StyleSheet , Button, Alert,} from 'react-native'

// import {  } from 'react-native-gesture-handler'
import firebase, {db , auth} from '../../constants/firebase'
const SignUp = ({navigation}) => {
    const [data , setData] = useState({
        email : '',
        pass1 : '',
        pass2 : '',
    })
    const[loading , setLoad] = useState(true)
    const signUp = (email , pass) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(user => {
            navigation.navigate('todo' , {
                email : email,
                loading
            })
        })
        .then(() => setLoad(false))
        .catch(function(error) {
            Alert.alert(error.message)
          });
    }
    return (
        <TouchableWithoutFeedback>
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
                                pass1 : pass
                            })
                            
                        }}
                        placeholder = "password"
                        secureTextEntry = {true}
                        />
                        <TextInput style = {styles.txtInp} onChangeText = {(pass) => {
                            setData({
                                ...data,
                                pass2 : pass
                            })
                            
                        }}
                        placeholder = "coniform password"
                        secureTextEntry = {true}
                        />
                        <Button title = "signup" onPress = {() => {
                            if(data.pass1 !== data.pass2) {
                                Alert.alert('some thing with coniformpassword')
                            } else {
                                signUp(data.email + "" , data.pass1 + "");
                                setData({
                                    email : '',
                                    pass :''
                                })
                            }
                        }} />
                </View>
                <View style = {styles.btnContainer}>
                    <Button title = "login" onPress = {
                                () =>  navigation.navigate('home')
                            }
                    />  
                    <Button title = "forgetPass" onPress = {
                                () =>  navigation.navigate('forget')
                            }
                    />
            </View>
            </View>
        </TouchableWithoutFeedback>
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
export default SignUp
