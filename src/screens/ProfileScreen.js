import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { firebase } from '../../config';
import { Pressable } from 'react-native';

const ProfileScreen = ({ navigation }) => {

  const Profleheader = () => {

   
    


    return (

      <View>
       
              <View style={Styleporfile.container}>

                <Image source={require('../img/ProfileScreen/profile.png')}></Image>
                <Text style={Styleporfile.textname} >NAme</Text>



                <View style={{ flexDirection: 'column', }}>
                  {/*number*/}
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../img/ProfileScreen/call.png')}></Image>
                    <Text style={Styleporfile.text}>number</Text>
                  </View>
                  {/*Email*/}
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../img/ProfileScreen/sms.png')}></Image>
                    <Text style={Styleporfile.text}>Email</Text>
                  </View>
                  {/*loaction*/}
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../img/ProfileScreen/location.png')}></Image>
                    <Text style={Styleporfile.text}>location</Text>
                  </View>

                </View>


              </View>
           



      </View>



    )
  }
  const Infomationview = () => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenInfomation')}
          style={{
            height: 60, width: 60,
            backgroundColor: '#FFAD7B',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Image source={require('../img/ProfileScreen/info.png')}></Image>
          <Text style={{ color: '#fff' }}>Info</Text>
        </TouchableOpacity>
      </View>
    )
  }
  const Activityview = () => {
    return (
      <View style={{ padding: 10, marginHorizontal: 20, }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#FD9A4D' }}>My Activities</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
          {/*Matching*/}
          <View style={{ flexDirection: 'row', marginHorizontal: 10 }} >
            <Image source={require('../img/ProfileScreen/matching.png')} style={{ width: 40, height: 40 }}></Image>
            <View style={{ marginHorizontal: 10 }}>
              <Text>0</Text>
              <Text style={{ fontWeight: 'bold', }}>Matching</Text>
            </View>

          </View>
          {/*Coop*/}
          <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
            <Image source={require('../img/ProfileScreen/flag.png')} style={{ width: 40, height: 40 }}></Image>
            <View style={{ marginHorizontal: 10 }}>
              <Text>0</Text>
              <Text style={{ fontWeight: 'bold', }}>Co-op</Text>
            </View>
          </View>


        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15, }}>
          {/*Course*/}
          <View style={{ flexDirection: 'row', marginHorizontal: 30 }} >
            <Image source={require('../img/ProfileScreen/cours.png')} style={{ width: 40, height: 40 }}></Image>
            <View style={{ marginHorizontal: 10 }}>
              <Text>0</Text>
              <Text style={{ fontWeight: 'bold', }}>Course</Text>
            </View>

          </View>
          {/*Certificate*/}
          <View style={{ flexDirection: 'row', marginHorizontal: 5, }}>
            <Image source={require('../img/ProfileScreen/certi.png')} style={{ width: 40, height: 40 }}></Image>
            <View style={{ marginHorizontal: 10 }}>
              <Text>0</Text>
              <Text style={{ fontWeight: 'bold', }}>Certificate</Text>
            </View>
          </View>

        </View>
      </View>
    )
  }
  const ImageCertificate = () => {
    return (
      <View style={{ padding: 30, marginTop: -30 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#FD9A4D' }}>Best Certificate</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Image source={require('../img/ProfileScreen/cer1.png')} style={styleceti.certi}></Image>
          <Image source={require('../img/ProfileScreen/cer2.png')} style={styleceti.certi}></Image>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>

      <ScrollView>

        <Profleheader />
        <Infomationview />
        <Activityview />
        <ImageCertificate />

      </ScrollView>



    </SafeAreaView>
  )
}

const Styleporfile = StyleSheet.create({
  container: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 1,
    marginHorizontal: 8
  },
  textname: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 1,
    color: '#FD9A4D'
  }
})
const styleceti = StyleSheet.create({
  certi: {
    marginHorizontal: 15,
    width: 180,
    height: 140,
    borderRadius: 20,
    elevation: 20
  }
})
const Stybackground = StyleSheet.create({
  gound: {
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 50,
    width: 50,
    height: 100,
    marginVertical: 10
  }
})

export default ProfileScreen