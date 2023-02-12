import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CourseList = () => {
  return (
    <SafeAreaView>
        <View style={Styles.container}>
            <View style={Stylehead.container}>
                <Text>head</Text>
            </View>
            <View style={StyleSearch.container}>
              <Text>Search</Text>
            </View>
            <View style={Stylebutton.container}>
              <Text>button</Text>
            </View>
          <ScrollView horizontal={false}>
            <View style={Stylelist.container}>
              <Text>List</Text>
            </View>
          </ScrollView>
            
        </View>
    </SafeAreaView>
  )
}

export default CourseList

const Styles = StyleSheet.create({
    container:{
      felex:1,
    }
  })
  
  const Stylehead = StyleSheet.create({
    container:{
      width:'100%',
      height:50,
      backgroundColor:'gray',
    }
  })
  
  const StyleSearch = StyleSheet.create({
    container:{
      width:'100%',
      height:80,
      backgroundColor:'gray',
      opacity:0.5,
      justifyContent:'center',
      alignItems:'center',
    },
    
  })
  
  const Stylebutton = StyleSheet.create({
    container:{
      width:'100%',
      height:120,
      backgroundColor:'gray',
      justifyContent:'center',
      alignItems:'center',
    },
    
  })
  
  const Stylelist = StyleSheet.create({
    container:{
      width:'100%',
      height:200,
      opacity:0.5,
      justifyContent:'center',
      alignItems:'center',
    },
    
  })