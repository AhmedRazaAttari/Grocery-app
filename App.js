import React from 'react';
import { StyleSheet, View, Text, StatusBar, YellowBox, TouchableOpacity } from 'react-native';
import LoadingPage from './src/Screens/LoadingPage';
import LoginPage from './src/Screens/Login';
import SignupPage from './src/Screens/Signup';
import CategorySearch from './src/Screens/CategorySearch';
import MyOrders from './src/Screens/MyOrders';
import ProductDetail from './src/Screens/ProductDetail';
import { createStackNavigator } from 'react-navigation-stack';
import _ from 'lodash';

import Navigate from './navigations';
YellowBox.ignoreWarnings(['Require cycle:']);

import VendorNavigation from './src/Screens/VendorView/navigations';

import {
  createAppContainer,
} from 'react-navigation';

const MainStackNavigator = createStackNavigator(
  {
    LoadingPage: {
      screen: LoadingPage,
      navigationOptions: {
        header: null,
      }
    },
    Drawer: {
      screen: Navigate,
      navigationOptions: {
        header: null,
      }
    },
    Login: {
      screen: LoginPage,
      navigationOptions: {
        header: null
      }
    },
    Signup: {
      screen: SignupPage,
      navigationOptions: {
        header: null
      }
    },
    MyRequest : {
      screen : MyOrders,
      navigationOptions: {
        title: "My Orders",
        headerTintColor: "black",
        headerStyle: {
          backgroundColor: "#f7f7f5",
        },
      }
    },
    ProductDetail : {
      screen : ProductDetail,
      navigationOptions : {
        header : null
      }
    },
    CategorySearch: {
      screen: CategorySearch,
      navigationOptions: {
        title: "Category Title",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
        },
        headerRight: (
          <View style={{ flexDirection: "row" }}>
            <View style={{ backgroundColor: '#e4ede6', borderRadius: 50, marginRight: 15, padding: 10 }}></View>
            <TouchableOpacity ><View style={{ backgroundColor: '#e4ede6', borderRadius: 50, marginRight: 10, padding: 10 }}></View></TouchableOpacity>
          </View>
        )
      }
    },
    VendorView: {
      screen : VendorNavigation,
      navigationOptions : {
        header : null
      }
    }
  }, {

}
)

const NavigationApp = createAppContainer(MainStackNavigator);

export default NavigationApp


// <StatusBar hidden={true} backgroundColor="#772ea2" barStyle="light-content" />