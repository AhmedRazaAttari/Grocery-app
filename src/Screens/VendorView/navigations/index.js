import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import firebase from 'react-native-firebase'
import Home from '../Screens/Home';


const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home,
    },
},
    {
        contentComponent: (props) => (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 150, alignItems: 'center', justifyContent: 'center', padding: 10, backgroundColor: "skyblue" }}>
                    <Image style={{ borderRadius: 100, height: 70, width: 70 }} />
                    <TouchableOpacity><Text style={{ fontSize: 20, color: "white" }}>{firebase.auth().currentUser.displayName}</Text></TouchableOpacity>
                </View>
                <DrawerNavigatorItems {...props} />
            </SafeAreaView>
        )
    })

const MyApp = MyDrawerNavigator;

export default MyApp;