import React, { useState } from 'react'
import {View, Text , TouchableWithoutFeedback , TextInput , StyleSheet, Button,Keyboard, Alert,} from 'react-native'
import  firebase  from '../../constants/firebase';

const ForgePass = ({navigation}) => {
    const [email ,setEmail] = useState('');
    const [massage , setMassage] = useState(false)
    const Massage = () => {
        return <Text style = {{backgroundColor : ''}}>
            password sent
        </Text>
    }
    const restEmail = () => {
        firebase.auth().sendPasswordResetEmail(email).then(function() {
            
          }).catch(function(error) {
            Alert.alert(error.message)
          });
    }
    return (
        <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
            <View>
                <View style = {styles.formContainer}>
                    <TextInput style = {styles.txtInp} onChangeText = {email => setEmail(email)} value = {email}/>
                    {(massage ? <Massage /> : null)}
                    <Button title = "reset Password" onPress = {() => {
                        if(email === '') {
                            alert('invalid email')
                        } else {
                            restEmail();
                            setEmail('')
                            setMassage(true)
                            setTimeout(() => {
                                setMassage(false)
                            } , 5000)
                        }
                    }}/>
                </View>
                <View style = {styles.btnContainer}>
                    <Button title = "sign up" onPress = {
                                () =>  navigation.navigate('Signup')
                            }
                    />  
                    <Button title = "login" onPress = {
                                () =>  navigation.navigate('home')
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
export default ForgePass
