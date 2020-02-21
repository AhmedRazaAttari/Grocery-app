import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, TextInput, Picker, ScrollView, Alert } from 'react-native';
import MaterialComm from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionic from 'react-native-vector-icons/Ionicons';
import Fontawes from 'react-native-vector-icons/FontAwesome';
import AntDes from 'react-native-vector-icons/AntDesign';
import FeatherIcons from 'react-native-vector-icons/Feather';
const screen = Dimensions.get("screen");
import firebase from 'react-native-firebase';

class BecomePartner extends React.Component {

    constructor() {
        super();

        this.state = {
            StoreName: "",
            CityName: "",
            Address: "",
            PhoneNo: "",
            Email : "",
            firstStep : false
        }
    }

    AuthenticationPage() {
        return <ScrollView showsVerticalScrollIndicator={false}><View style={{ width: screen.width, height: "100%", justifyContent: "center", padding: 40, paddingTop: 60 }}>
            <Text style={{ fontSize: 34, fontWeight: "bold", color: "white", marginBottom: 50 }}>Register Your Store</Text>
            <Text style={{ marginTop: 5, marginBottom: 5, fontWeight: "bold", fontSize: 19 }}>Store Name</Text>
            <TextInput placeholder="Enter Store name" onChangeText={e => this.setState({ StoreName: e })} style={{ marginBottom: 15, height: 45, width: 260, borderBottomWidth: 1, borderColor: "#dbd7d0" }} placeholderTextColor="white" />
            <Text style={{ marginTop: 5, marginBottom: 5, fontWeight: "bold", fontSize: 19 }}>Select City</Text>
            <Picker selectedValue={this.state.CityName} onValueChange={(itemValue, itemIndex) => this.setState({ CityName: itemValue })} style={{}}>
                <Picker.Item label="Karachi" value="Karachi" />
                <Picker.Item label="Lahore" value="Lahore" />
                <Picker.Item label="Faislabad" value="Faislabad" />
                <Picker.Item label="Multan" value="Multan" />
                <Picker.Item label="Islamabad" value="Islamabad" />
            </Picker>
            <Text style={{ marginTop: 10, marginBottom: 5, fontWeight: "bold", fontSize: 19 }}>Address</Text>
            <TextInput placeholder="Enter Store add..." onChangeText={e => this.setState({ Address: e })} style={{ marginBottom: 15, height: 45, width: 260, borderBottomWidth: 1, borderColor: "#dbd7d0" }} placeholderTextColor="white" />
            <Text style={{ marginTop: 10, marginBottom: 5, fontWeight: "bold", fontSize: 19 }}>Phone No</Text>
            <TextInput placeholder="Enter email add..." onChangeText={e => this.setState({ PhoneNo: e })} style={{ marginBottom: 15, height: 45, width: 260, borderBottomWidth: 1, borderColor: "#dbd7d0" }} placeholderTextColor="white" />
            <Text style={{ marginTop: 10, marginBottom: 5, fontWeight: "bold", fontSize: 19 }}>Email Add</Text>
            <TextInput placeholder="Enter Email add..." onChangeText={e => this.setState({ Email: e })} style={{ marginBottom: 15, height: 45, width: 260, borderBottomWidth: 1, borderColor: "#dbd7d0" }} placeholderTextColor="white" />
            <Text style={{ marginTop: 10, marginBottom: 5, fontWeight: "bold", fontSize: 19 }}>Password</Text>
            <TextInput placeholder="Enter Email add..." onChangeText={e => this.setState({ Password: e })} style={{ marginBottom: 15, height: 45, width: 260, borderBottomWidth: 1, borderColor: "#dbd7d0" }} placeholderTextColor="white" />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={() => this.RegisterStore()}><View style={{ flexDirection: "row", borderRadius: 5, backgroundColor: "#237bd9", width: 130, height: 50, justifyContent: "center", alignItems: "center", marginTop: 20, elevation: 7 }}><Text style={{ color: "white", fontSize: 20, }}>Next</Text></View></TouchableOpacity>
            </View>
        </View></ScrollView>
    }


    RegisterStore() {
        firebase.auth().createUserWithEmailAndPassword(this.state.Email, this.state.Password)
            .then((userdata) => {
                var Userid = firebase.auth().currentUser.uid
                firebase.database().ref("Stores/" + Userid).set({
                    Name: this.state.StoreName,
                    Email: this.state.Email,
                    Address: this.state.Address,
                    CityName : this.state.CityName,
                    PhoneNo : this.state.PhoneNo,
                    isVendor : true,
                }).then(() => {
                    Alert.alert("Congrats", "your store is registered succesfully");
                    this.props.navigation.push("VendorView")
                })
            })
            .catch(error => console.log(error))
    }

    DeliverySetting(){
        return <View style={{ width: screen.width, height: screen.height, justifyContent: "center", padding: 40, paddingTop: 60, alignItems : "center" }}>
            <Text style={{fontSize : 28, fontWeight : "bold", color : "white"}}>Delivery Setting</Text>
        </View>
    }

    render() {
        return <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "skyblue" }}>
            {this.AuthenticationPage()}
            {/* {this.DeliverySetting()} */}
        </View>
    }
}

export default BecomePartner;