import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import firebase from 'react-native-firebase'
import Home from '../src/Screens/Home';
import BecomePartner from '../src/Screens/BecomePartner';
import MyOrder from '../src/Screens/MyOrders';


const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home,
    },
    "My Orders": {
        screen: MyOrder,
    },
    "Become a Partner": {
        screen: BecomePartner,
    },
},
    {
        contentComponent: (props) => (


            // <SafeAreaView style={{ flex: 1 }}>
            //     <View style={{ height: 150, alignItems: 'center', justifyContent: 'center', padding: 10, backgroundColor: "skyblue" }}>
            //         <Image style={{ borderRadius: 100, height: 70, width: 70 }} />
            //         <TouchableOpacity onPress={() => props.navigation.push("Login")}><Text style={{ fontSize: 20, color: "white" }}>Log in /Create Account</Text></TouchableOpacity>
            //     </View>
            //     <DrawerNavigatorItems {...props} />
            // </SafeAreaView>


            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 150, alignItems: 'center', justifyContent: 'center', padding: 10, backgroundColor: "skyblue" }}>
                    <Image style={{ borderRadius: 100, height: 70, width: 70 }} />
                    <TouchableOpacity onPress={() => props.navigation.push("Login")}><Text style={{ fontSize: 20, color: "white" }}>Log in /Create Account</Text></TouchableOpacity>
                </View>
                <DrawerNavigatorItems {...props} />
            </SafeAreaView>
        )
    })

const MyApp = MyDrawerNavigator;

export default MyApp;