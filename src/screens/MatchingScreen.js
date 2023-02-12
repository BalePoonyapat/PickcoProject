import {
  View, Text, SafeAreaView, StyleSheet,
  ScrollView, TextInput, Image,
  TouchableOpacity,
  FlatList,
  Pressable
} from 'react-native'
import React, { useState, useEffect } from 'react';
import { firebase } from '../../config';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const MatchingScrren = ({ navigation }) => {

  const Viewheader = () => {
    return (
      <View style={{ justifyContent: 'center', height: 30, width: '100%', marginTop:30}}>
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


  const Listview = () => {

    const [users, setUsers] = useState([]);
    const pickcodemo1Ref = firebase.firestore().collection('cor');
    

   




    useEffect(async () => {
      pickcodemo1Ref
        .onSnapshot(
          querySnapshot => {
            const users = []
            querySnapshot.forEach((doc) => {
              const { name, address } = doc.data()
              users.push({
                id: doc.id,
                name,
                address
              })
            })
            setUsers(users)
          }
        )
    }, [])
    return (
      <ScrollView horizontal={false}>
        <View style={{ flex: 1, }}>

          <FlatList
            style={{ height: '100%' }}
            keyExtractor={(item) => item.id}
            data={users}
            numColumns={1}
            renderItem={({ item }) => (
              <Pressable style={StyleSheet.container}>
                <View style={styleList.ground}>
                  <TouchableOpacity style={styleList.box}
                    onPress={() => navigation.navigate('cor',
                      {
                        coperateId: item.id,
                      })
                    }>
                    <View style={styleList.boxImg}>
                      <Text>PICKCO</Text>
                    </View>
                    <View style={styleList.boxiner}>
                      <Text style={styleList.Textinner}>{item.name}</Text>
                      <Text style={styleList.textdetails}>{item.address}</Text>

                      {/**Get Coop.. Getdata to Coop page */}

                      <TouchableOpacity style={styleList.coop} >
                        <Text style={styleList.textcoop}>Get to Co-op</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>

                </View>
              </Pressable>
            )}
          />

        </View>
      </ScrollView>

    )
  }




  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <Viewheader />
      <Searchbar />
      <Buttonbar />
      <Listview />
    </SafeAreaView>
  )
}

export default MatchingScrren

const styleList = StyleSheet.create({
  ground: {
    justifyContent: 'center',
    alignItems: 'center',


  },
  box: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    height: 150,
    width: '80%',
    backgroundColor: '#FD9A4D',
    marginVertical: 10,
    borderRadius: 20,
    elevation: 5

  },
  boxImg: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '40%',
    borderRadius: 20,
    backgroundColor: '#fff',
    opacity: 0.1,
  },
  boxiner: {
    marginHorizontal: 15
  },
  Textinner: {
    width: '60%',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff'
  },
  coop: {
    width: 100,
    height: 30,
    backgroundColor: '#3E3E3E',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  textcoop: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textdetails: {
    marginTop: 5,
    width: '30%',
    fontSize: 8,
    color: '#fff'
  }
})

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