import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import MaterialComm from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionic from 'react-native-vector-icons/Ionicons';
import Fontawes from 'react-native-vector-icons/FontAwesome';
import AntDes from 'react-native-vector-icons/AntDesign';
import FeatherIcons from 'react-native-vector-icons/Feather';
const screen = Dimensions.get("screen");

class MyOrders extends React.Component {
    render() {
        return <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 30 }}>
            <MaterialComm name="database-search" size={200} color="skyblue" />
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>No Order yet</Text>
            <View style={{alignItems : "center", marginTop : 30}}>
                <Text style={{fontSize : 17, textAlign : "center", color : "grey"}}>You don't have any order yet. Try one of our awesome product and place your order</Text>
            </View>
        </View>
    }
}

export default MyOrders;