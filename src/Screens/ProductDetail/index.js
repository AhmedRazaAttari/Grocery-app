import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import MaterialComm from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionic from 'react-native-vector-icons/Ionicons';
import Fontawes from 'react-native-vector-icons/FontAwesome';
import AntDes from 'react-native-vector-icons/AntDesign';
import FeatherIcons from 'react-native-vector-icons/Feather';
const screen = Dimensions.get("screen");

class ProductDetail extends React.Component {
    render() {
        return <View style={{ flex: 1 }}>
            <Image source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-200oHSLhdsmT_Mr3_zDY7P3NcMkj6Pk43bWsZfXRxsHj78x&s'}} style={{width : screen.width, height : 300}}/>

        </View>
    }
}

export default ProductDetail;