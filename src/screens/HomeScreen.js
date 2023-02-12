import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useState, useEffect } from 'react'




const HomeScreen = ({ navigation }) => {



  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, [])




  return (
    <SafeAreaView style={styleground.container}>

      <View style={stylelogo.container}>
        <Image source={require('../img/homescreens/Profile.png')} style={stylelogo.img} />
        <Text style={stylelogo.name}>Name</Text>

        <View style={stylebutton.container}>
          <Text style={{ paddingTop: 10, fontWeight: 'bold', color: '#494949' }}>Select menu</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 10 }}>

            <TouchableOpacity
              onPress={() => navigation.navigate('CourseScreen')}
              style={stylebutton.course}

            >
              <Image source={require('../img/homescreens/vector1.png')} style={{ width: 35, height: 35, }}></Image>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff', textAlign: 'center' }}>Course</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Matchingscreen')}
              style={stylebutton.mat}
            >
              <Image source={require('../img/homescreens/vector2.png')} style={{ width: 35, height: 35, }}></Image>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff', textAlign: 'center' }}>Matching</Text>
            </TouchableOpacity>
          </View>

          <View style={styleintro.container}>
            <Text style={{ paddingTop: 10, fontWeight: 'bold', color: '#494949' }}>Courseintroduction</Text>

            <ScrollView horizontal={true} >

              <View style={styleintro.ground}>

                <TouchableOpacity style={styleintro.Card}
                  onPress={() => navigation.navigate('DetailCourse')}
                >
                  <View style={styleintro.cardtop}>
                    <Text>img</Text>
                  </View>
                  <View style={styleintro.cardbot}>
                    <Text style={{ marginHorizontal: 10 }}>พัฒนาแอพ Cross Platform ด้วย Google Flutter</Text>
                    <TouchableOpacity style={styleintro.view}>
                      <Text>View more</Text>

                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styleintro.Card}>
                  <View style={styleintro.cardtop}>
                    <Text>img</Text>
                  </View>
                  <View style={styleintro.cardbot}>
                    <Text style={{ marginHorizontal: 10 }}>พัฒนาแอพ Cross Platform ด้วย Google Flutter</Text>
                    <TouchableOpacity style={styleintro.view}>
                      <Text>View more</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

              
                <TouchableOpacity 
                onPress={() => navigation.navigate('ProfileScreen')}
                style={{height:20,width:20, backgroundColor:'red'}}
                >
              
                </TouchableOpacity>

              </View>
            </ScrollView>

          </View>


        </View>



      </View>

    </SafeAreaView>
  )
}

export default HomeScreen


const styleground = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
})

const stylelogo = StyleSheet.create({
  container: {
    color: '#FF895C',
    width: '100%',
    height: '30%',
    alignItems: 'center',
    paddingTop: 40
  },
  name: {
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold'
  },
  img: {
    height: 180,
    width: 180
  }
})

const stylebutton = StyleSheet.create({
  container: {
    width: '100%',
    height: '40%',
  },
  course: {
    height: 60,
    width: '40%',
    backgroundColor: '#9862B0',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row'
  },
  mat: {
    height: 60,
    width: '40%',
    backgroundColor: '#6248A1',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row'
  }
})

const styleintro = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
  },
  ground: {
    justifyContent: 'center',
    width: 240,
    height: 200,
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 80,


  },
  Card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA966',
    width: '70%',
    height: 240,
    borderRadius: 20,
    marginHorizontal: 5
  },
  cardtop: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 140,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20

  },
  cardbot: {
    justifyContent: 'center',
    backgroundColor: '#303030',
    width: '100%',
    height: '42%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    opacity: 0.7,


  },
  view: {
    backgroundColor: '#fff',
    width: 80,
    height: 25,
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'

  }

})