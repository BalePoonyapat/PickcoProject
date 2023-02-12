import {
    KeyboardAvoidingView, StyleSheet, Text, TextInput,
    View, TouchableOpacity, Image, ImageBackground
} from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat';
import { SafeAreaView } from 'react-native-safe-area-context';



const LoginScreens = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            alert(error.message)
        }
    }


    

    return (
        <SafeAreaView style={styles.container}>


            

                <Image source={require('../img/logins/Vector2.png')} style={Stylebg.headBg} />


                <View style={Stylehead.container}>

                    <Image source={require('../img/logins/login.png')} />
                    <Text style={Stylehead.Text}>PICKCO</Text>
                    <Text style={Stylehead.Textdetail}>PICK YOUR SUITED COOPERATE</Text>
                </View>


                <View style={{ marginTop: 40 }}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Email'
                        onChangeText={(email) => setEmail(email)}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Password'
                        onChangeText={(password) => setPassword(password)}
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => loginUser(email, password)}
                    style={styles.button}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#FF895C' }}>Login</Text>
                </TouchableOpacity>
           




        </SafeAreaView>


    )

}

export default LoginScreens

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 60
    },
    inputContainer: {
        width: '80%'
    },
    TextInput: {
        paddingTop: 20,
        paddingBottom: 10,
        width: 220,
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
        borderRadius: 30,
        elevation: 10,
        backgroundColor: '#fff'
    },
    button: {
        marginTop: 20,
        height: 60,
        width: 160,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    }

})

const Stylehead = StyleSheet.create({
    container: {
        marginTop: -10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#4F2878'
    },
    Textdetail: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FE8E58'
    }
})

const Stylebg = StyleSheet.create({
    headBg: {
        marginTop: -120,
        marginRight: 200,
        width: 220,
        height: 140
    },
    footer: {
        width: 420,
        height: 480,
        marginTop: -250
    }
})