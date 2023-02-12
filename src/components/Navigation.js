import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Image } from "react-native-elements";


const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOption={{
                style: {
                    height: 65,
                    justifyContent: 'center',
                    paddingVertical: 15,
                    backgroundColor: '#eff4f0',
                    elevation: 2
                }
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size}) => (
                        <Image source={require("../img/bottomtab/home.png")}
                            style={{ height: 20, width: 20 }}
                        ></Image>
                    )
                }}
            />
             <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size}) => (
                        <Image source={require("../img/bottomtab/profile.png")}
                            style={{ height: 20, width: 20 }}
                        ></Image>
                    )
                }}
            />


        </Tab.Navigator>
    )
}

const Stack = createBottomTabNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeScreenStackNavigatior = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="home " component={BottomTabNavigator}/>
            <Stack.Screen name="home " component={BottomTabNavigator}/>
        </Stack.Navigator>
    )

}

export default HomeScreenStackNavigatior