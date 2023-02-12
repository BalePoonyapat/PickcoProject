import {
    View, Text, SafeAreaView, StyleSheet,
    ScrollView, TextInput, Image,
    TouchableOpacity,
    FlatList,
    Pressable
} from 'react-native'
import React, { useState, useEffect } from 'react';
import { firebase } from '../../config';

const CoopScreen = () => {

    const Viewheader = () => {
        return (
            <View style={{ justifyContent: 'center', height: 30, width: '100%',marginTop:30 }}>
                <Text style={{ color: '#FD9A4D', fontWeight: 'bold', fontSize: 20, marginHorizontal: 10, }}>PICKCO</Text>
            </View>
        )
    }

    const Searchbar = () => {
        return (
            <View style={styleSearchbar.container}>
                <View style={styleSearchbar.box}>
                    <TextInput placeholder='seacrh' style={styleSearchbar.search} />
                    <Image source={require('../img/matching/search.png')}></Image>
                </View>
            </View>
        )
    }

    const Buttonbar = () => {
        return (
            <View style={Stylebutton.container}>
                <View style={Stylebutton.box1}>

                    <TouchableOpacity style={Stylebutton.boxinner}
                        onPress={() => navigation.navigate('MatchingScreen')}
                    >
                        <Image source={require('../img/matching/mat.png')} />
                        <Text>Matching</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Stylebutton.boxinner}
                        onPress={() => navigation.navigate('CoopScreen')}
                    >
                        <Image source={require('../img/matching/flag.png')} />
                        <Text>Co-op</Text>
                    </TouchableOpacity>




                </View>
            </View>
        )
    }



    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <Viewheader />
            <Searchbar />
            <Buttonbar/>
        </SafeAreaView>
    )
}

export default CoopScreen


const styleSearchbar = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        height: 35,
        width: '60%'
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#F5F4F4',
        width: '60%',
        height: 35,
        borderRadius: 20
    }

})

const Stylebutton = StyleSheet.create({
    container: {
        height: 75,
        width: '100%',
        alignItems: 'center',
        elevation: 10,

    },
    box1: {
        width: 60,
        height: 60,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxinner: {
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        elevation: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 5
    }
})