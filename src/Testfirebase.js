import { View, Text,useEf, FlatList, Pressable,StyleSheet } from 'react-native'
import React from 'react'
import {firebase} from '../config'
import { useState, useEffect } from 'react'


const Testfirebase = () => {

    const [users, setUsers] = useState([]);
    const pickcodemo1Ref = firebase.firestore().collection('corporations');

    useEffect(async () => {
        pickcodemo1Ref
        .onSnapshot(
            querSnapshot => {
                const users = []
                querSnapshot.forEach((doc) => {
                    const { cp_name, cp_address} = doc.data()
                    users.push({
                        id: doc.id,
                        cp_name,
                        cp_address
                    })
                })
                setUsers(users)
            }
        )

    }, [])


  return (
    <View style={{flex:1 , marginTop:100}}>
        <FlatList 
        style={{height:'100%'}}
        data={users}
        numColumns={1}
        renderItem={({item}) =>(
            <Pressable style={StyleSheet.container}>
                <View style={StyleSheet.innercontainer}> 
                <Text style={StyleSheet.itemHeading}>{item.cp_name}</Text>
                </View>
            </Pressable>
        )}
        />
    </View>
  )
}

export default Testfirebase

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        padding:15,
        borderRadius:15,
        margin:5,
        marginHorizontal:10
    },
    innercontainer:{
        alignItems:'center',
        flexDirection:'column'
    },
    itemHeading:{
        fontSize:18
    }
})