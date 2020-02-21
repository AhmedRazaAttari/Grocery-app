import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
const screen = Dimensions.get("screen");

import Three from '../../assets/images/items/Brand/three.jpg';

import MyOrders from '../MyOrders';
import firstItem from '../../assets/images/items/first.jpg'
import secondItem from '../../assets/images/items/second.jpg'
import thirdItem from '../../assets/images/items/third.jpg'
import forthItem from '../../assets/images/items/forth.jpg'
import fifthItem from '../../assets/images/items/fifth.jpg'
import sixItem from '../../assets/images/items/six.jpg'



class CategorySearch extends React.Component {

    constructor() {
        super();

        this.state = {
            images: [
                'data:image/jpeg;base64,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',
                'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019_5/2019-best-apps-gluten-free-1296x728-header.jpg?w=1155',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-200oHSLhdsmT_Mr3_zDY7P3NcMkj6Pk43bWsZfXRxsHj78x&s'
            ]
        }
    }


    JustForyou() {
        return <View style={{ width: screen.width, padding: 15, marginTop: 15 }}>
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 19, fontWeight: "bold" }}>*** New Arrivals ***</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 16, width: "100%" }}>
                <TouchableOpacity onPress={() => this.props.navigation.push("ProductDetail")}>
                    <View style={{ width: 105, height: 150, backgroundColor: "white", margin: 2, borderRadius: 5 }}>
                        <Image source={firstItem} style={{ width: 105, height: 90, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                        <View style={{ flexDirection: "column", padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Rs 2000</Text>
                            <Text style={{ fontSize: 11, color: "grey" }}>Rs 2500</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ width: 105, height: 150, backgroundColor: "white", margin: 2, borderRadius: 5 }}>
                    <Image source={Three} style={{ width: 105, height: 90, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <View style={{ flexDirection: "column", padding: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Rs 2000</Text>
                        <Text style={{ fontSize: 11, color: "grey" }}>Rs 2500</Text>
                    </View>
                </View>
                <View style={{ width: 105, height: 150, backgroundColor: "white", margin: 2, borderRadius: 5 }}>
                    <Image source={forthItem} style={{ width: 105, height: 90, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <View style={{ flexDirection: "column", padding: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Rs 2000</Text>
                        <Text style={{ fontSize: 11, color: "grey" }}>Rs 2500</Text>
                    </View>
                </View>
                <View style={{ width: 105, height: 150, backgroundColor: "white", margin: 2, borderRadius: 5 }}>
                    <Image source={Three} style={{ width: 105, height: 90, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <View style={{ flexDirection: "column", padding: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Rs 2000</Text>
                        <Text style={{ fontSize: 11, color: "grey" }}>Rs 2500</Text>
                    </View>
                </View>
                <View style={{ width: 105, height: 150, backgroundColor: "white", margin: 2, borderRadius: 5 }}>
                    <Image source={sixItem} style={{ width: 105, height: 90, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <View style={{ flexDirection: "column", padding: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Rs 2000</Text>
                        <Text style={{ fontSize: 11, color: "grey" }}>Rs 2500</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: "center", marginTop: 20 }}>
                <Text style={{ fontSize: 19, fontWeight: "bold" }}>*** Best Sellers ***</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 16, width: "100%" }}>
                <View style={{ width: 105, height: 150, backgroundColor: "white", margin: 2, borderRadius: 5 }}>
                    <Image source={Three} style={{ width: 105, height: 90, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <View style={{ flexDirection: "column", padding: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Rs 2000</Text>
                        <Text style={{ fontSize: 11, color: "grey" }}>Rs 2500</Text>
                    </View>
                </View>
                <View style={{ width: 105, height: 150, backgroundColor: "white", margin: 2, borderRadius: 5 }}>
                    <Image source={Three} style={{ width: 105, height: 90, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <View style={{ flexDirection: "column", padding: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Rs 2000</Text>
                        <Text style={{ fontSize: 11, color: "grey" }}>Rs 2500</Text>
                    </View>
                </View>
                <View style={{ width: 105, height: 150, backgroundColor: "white", margin: 2, borderRadius: 5 }}>
                    <Image source={Three} style={{ width: 105, height: 90, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <View style={{ flexDirection: "column", padding: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Rs 2000</Text>
                        <Text style={{ fontSize: 11, color: "grey" }}>Rs 2500</Text>
                    </View>
                </View>
                <View style={{ width: 105, height: 150, backgroundColor: "white", margin: 2, borderRadius: 5 }}>
                    <Image source={Three} style={{ width: 105, height: 90, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <View style={{ flexDirection: "column", padding: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Rs 2000</Text>
                        <Text style={{ fontSize: 11, color: "grey" }}>Rs 2500</Text>
                    </View>
                </View>
                <View style={{ width: 105, height: 150, backgroundColor: "white", margin: 2, borderRadius: 5 }}>
                    <Image source={Three} style={{ width: 105, height: 90, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                    <View style={{ flexDirection: "column", padding: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Rs 2000</Text>
                        <Text style={{ fontSize: 11, color: "grey" }}>Rs 2500</Text>
                    </View>
                </View>
            </View>

        </View>
    }

    Slider() {
        return <View style={{ height: 150 }}>
            <SliderBox images={this.state.images}
                dotColor="#FFEE58"
                paginationBoxVerticalPadding={20}
                circleLoop
            />
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

export default CategorySearch