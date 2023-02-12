import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const CoperateListScreen = () => {
  const Viewheader = () => {
    return(
       <View style={{flex:1}}>
       <Text>Hello</Text>
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
         <View style={{ flex: 1, marginTop: 100, }}>
 
           <FlatList
             style={{ height: '100%' }}
             data={users}
             numColumns={1}
             renderItem={({ item }) => (
               <Pressable style={StyleSheet.container}>
                 <View style={styleList.ground}>
                   <TouchableOpacity style={styleList.box} >
                     <View style={styleList.boxImg}>
                       <Text>H</Text>
                     </View>
                     <View style={styleList.boxiner}>
                       <Text style={styleList.Textinner}>{item.name}</Text>
                       <Text>DetailS</Text>
                       <TouchableOpacity style={styleList.coop}>
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
     <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
       <Viewheader/>
       <Listview/>
     </SafeAreaView>
   )
}

export default CoperateListScreen

const styleList = StyleSheet.create({
  ground: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  box:{
    justifyContent:'flex-start',
    alignItems: 'center',
    flexDirection:'row',
    height:150,
    width:'70%',
    backgroundColor:'#FD9A4D',
    marginVertical:10,
    borderRadius:20,
    elevation:5
    
  },
  boxImg:{
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%',
    width:'40%',
    borderRadius:20,
    backgroundColor:'#fff',
    opacity:0.1,
  },
  boxiner:{
    marginHorizontal:15
  },
  Textinner:{
    width:'40%'
  },
  coop:{
    width:100,
    height:30,
    backgroundColor:'#3E3E3E',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10
  },
  textcoop:{
    color:'#fff',
    fontSize:14,
    fontWeight:'bold',

  }
})