import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
const screen = Dimensions.get("screen");

import One from '../../assets/images/items/Brand/one.jpg';
import Two from '../../assets/images/items/Brand/two.jpg';
import Three from '../../assets/images/items/Brand/three.jpg';
import Four from '../../assets/images/items/Brand/four.jpg';
import Fifth from '../../assets/images/items/Brand/fifth.jpg';

class GlobalBrand extends React.Component {

    constructor() {
        super();

        this.state = {
            images: [
                'https://source.unsplash.com/1024x768/?nature',
                'https://source.unsplash.com/1024x768/?water',
                'https://source.unsplash.com/1024x768/?girl',
                'https://source.unsplash.com/1024x768/?tree'
            ]
        }
    }


    JustForyou() {
        return <View style={{ width: screen.width, padding: 15 }}>
            <View style={{alignItems : "center"}}>
                <Text style={{ fontSize: 19 }}>*** Just For You ***</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 16, width: "100%" }}>
                <View style={{ width: 160, height: 265, backgroundColor: "white", margin: 2, borderRadius: 5, padding: 7 }}>
                    <Image source={Three} style={{ width: 150, height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <Text style={{ marginTop: 6 }}>Apple Watch Series 5 has a display that’s always on, </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Rs 1200</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 10, color: "grey" }}>107 sold</Text>
                        <Text style={{ marginBottom: 10 }}>...</Text>
                    </View>
                </View>
                <View style={{ width: 160, height: 265, backgroundColor: "white", margin: 2, borderRadius: 5, padding: 7 }}>

                    <Image source={Four} style={{ width: 150, height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <Text style={{ marginTop: 6 }}>Apple Watch Series 5 has a display that’s always on, </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Rs 1200</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 10, color: "grey" }}>107 sold</Text>
                        <Text style={{ marginBottom: 10 }}>...</Text>
                    </View>
                </View>
                <View style={{ width: 160, height: 265, backgroundColor: "white", margin: 2, borderRadius: 5, padding: 7 }}>
                    <Image source={Three} style={{ width: 150, height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <Text style={{ marginTop: 6 }}>Apple Watch Series 5 has a display that’s always on, </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Rs 1200</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 10, color: "grey" }}>107 sold</Text>
                        <Text style={{ marginBottom: 10 }}>...</Text>
                    </View>
                </View>
                <View style={{ width: 160, height: 265, backgroundColor: "white", margin: 2, borderRadius: 5, padding: 7 }}>
                    <Image source={Fifth} style={{ width: 150, height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <Text style={{ marginTop: 6 }}>Apple Watch Series 5 has a display that’s always on, </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Rs 1200</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 10, color: "grey" }}>107 sold</Text>
                        <Text style={{ marginBottom: 10 }}>...</Text>
                    </View>
                </View>
                <View style={{ width: 160, height: 265, backgroundColor: "white", margin: 2, borderRadius: 5, padding: 7 }}>
                    <Image source={One} style={{ width: 150, height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <Text style={{ marginTop: 6 }}>Apple Watch Series 5 has a display that’s always on, </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Rs 1200</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 10, color: "grey" }}>107 sold</Text>
                        <Text style={{ marginBottom: 10 }}>...</Text>
                    </View>
                </View>
                <View style={{ width: 160, height: 265, backgroundColor: "white", margin: 2, borderRadius: 5, padding: 7 }}>
                    <Image source={Three} style={{ width: 150, height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <Text style={{ marginTop: 6 }}>Apple Watch Series 5 has a display that’s always on, </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Rs 1200</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 10, color: "grey" }}>107 sold</Text>
                        <Text style={{ marginBottom: 10 }}>...</Text>
                    </View>
                </View>
                <View style={{ width: 160, height: 265, backgroundColor: "white", margin: 2, borderRadius: 5, padding: 7 }}>
                    <Image source={Three} style={{ width: 150, height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <Text style={{ marginTop: 6 }}>Apple Watch Series 5 has a display that’s always on, </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Rs 1200</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 10, color: "grey" }}>107 sold</Text>
                        <Text style={{ marginBottom: 10 }}>...</Text>
                    </View>
                </View>
                <View style={{ width: 160, height: 265, backgroundColor: "white", margin: 2, borderRadius: 5, padding: 7 }}>
                    <Image source={Three} style={{ width: 150, height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <Text style={{ marginTop: 6 }}>Apple Watch Series 5 has a display that’s always on, </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Rs 1200</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 10, color: "grey" }}>107 sold</Text>
                        <Text style={{ marginBottom: 10 }}>...</Text>
                    </View>
                </View>
                <View style={{ width: 160, height: 265, backgroundColor: "white", margin: 2, borderRadius: 5, padding: 7 }}>
                    <Image source={One} style={{ width: 150, height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <Text style={{ marginTop: 6 }}>Apple Watch Series 5 has a display that’s always on, </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Rs 1200</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 10, color: "grey" }}>107 sold</Text>
                        <Text style={{ marginBottom: 10 }}>...</Text>
                    </View>
                </View>
                <View style={{ width: 160, height: 265, backgroundColor: "white", margin: 2, borderRadius: 5, padding: 7 }}>
                    <Image source={Fifth} style={{ width: 150, height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <Text style={{ marginTop: 6 }}>Apple Watch Series 5 has a display that’s always on, </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Rs 1200</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 10, color: "grey" }}>107 sold</Text>
                        <Text style={{ marginBottom: 10 }}>...</Text>
                    </View>
                </View>
            </View>
        </View>
    }


    render() {
        return <View style={{ flex: 1, backgroundColor: "#f7f9fa" }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {this.Slider()}
                {this.JustForyou()}
            </ScrollView>
        </View>
    }
}

export default GlobalBrand