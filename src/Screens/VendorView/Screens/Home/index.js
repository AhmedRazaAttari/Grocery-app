import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, TextInput, StatusBar, ScrollView } from 'react-native';
import MaterialComm from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionic from 'react-native-vector-icons/Ionicons';
import Fontawes from 'react-native-vector-icons/FontAwesome';
import AntDes from 'react-native-vector-icons/AntDesign';
import FeatherIcons from 'react-native-vector-icons/Feather';
const screen = Dimensions.get("screen");
import firebase from 'react-native-firebase';


class VendorHome extends React.Component {

    constructor() {
        super();

        this.state = {
            StoreName : "",
        }
    }


    header() {
        return <View style={{ height: 70, flexDirection: "column", width: '100%', alignItems: "center", backgroundColor: "white" }}>
            <View style={{ flexDirection: "row", padding: 15, paddingTop: 20, justifyContent: "space-evenly", alignItems: "center" }}>
                <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()} >
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ width: 20, borderWidth: 1, margin: 2, borderColor: "skyblue" }}></View>
                        <View style={{ width: 14, borderWidth: 1, margin: 2, borderColor: "skyblue" }}></View>
                        <View style={{ width: 8, borderWidth: 1, margin: 2, borderColor: "skyblue" }}></View>
                    </View>
                </TouchableOpacity>
                <View style={{ width: 260, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 22 }}>{this.state.StoreName}</Text>
                </View>
                <View style={{ width: 40 }}>
                <Ionic name="ios-notifications-outline" size={29} color="skyblue" />
                </View>
            </View>
            
        </View>
    }

    Items(){
        return <View style={{flex : 1, justifyContent : "center", alignItems : "center"}}>
            <Text>My Items</Text>
        </View>
    }

    BottomNav() {
        return <View style={{ height: 70, padding: 10, justifyContent: "space-between", alignItems: "center", flexDirection: "row", backgroundColor: "#fff", width: '100%', elevation: 4, shadowOffset: { width: 5, height: 5 }, shadowColor: "grey", shadowOpacity: "0.5", shadowRadius: "10" }}>
            <View>
                <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", width: 65 }} onPress={() => this.props.navigation.push("MyRequest")}>
                    <MaterialComm name="table-edit" size={28} color="skyblue" />
                    <Text style={{ fontSize: 12 }}>Request</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", width: 65 }}>
                    <Ionic name="md-chatbubbles" size={27} color="skyblue" />
                    <Text style={{ fontSize: 12 }}>Messages</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 75, width: 75, borderRadius: 100, backgroundColor: "white", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={() => this.props.navigation.push("Drawer")}>
                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", height: 60, width: 60, borderRadius: 100, backgroundColor: "#3480d1",  marginBottom: 50, elevation: 6 }}>
                        <Fontawes name="home" size={29} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <MaterialComm name="table-edit" size={28} color="skyblue" />
                <Text style={{ fontSize: 12 }}>Delivery</Text>
            </View>
            <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", width: 50 }}>
                <Ionic name="ios-person" size={29} color="skyblue" />
                <Text style={{ fontSize: 12 }}>Profile</Text>
            </View>
        </View>
    }

    componentDidMount(){
        var Userid = firebase.auth().currentUser.uid;
        var _ = this;
        firebase.database().ref("Stores/" + Userid).once("value").then(function(snapshot){
            _.setState({
               StoreName : snapshot.val().Name
            }) 
        })
    }

    render() {
        return <View style={{ flex: 1, backgroundColor: "#f7f9fa" }}>
        <StatusBar hidden={true} />
        {this.header()}
        <ScrollView showsVerticalScrollIndicator={false}>
            {this.Items()}
        </ScrollView>
        {this.BottomNav()}
    </View>
    }
}

export default VendorHome;