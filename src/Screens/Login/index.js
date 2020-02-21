import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Alert, Dimensions, StatusBar, Keyboard } from 'react-native';
const screen = Dimensions.get("screen");
import Icons from "react-native-vector-icons/FontAwesome";
import Antdesign from "react-native-vector-icons/AntDesign";
import MaterialsComm from "react-native-vector-icons/MaterialCommunityIcons";
import { LoginManager, AccessToken, } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            topHeight: 160,
            borderBottomLeftRadius: 230,
            borderBottomRightRadius: 200,
            IconSize: 60,
            titleSize: 30,
            flexDirection: "column",
            elevation: 27,
            name : true
        }
    }

    UNSAFE_componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }
    
    // UNSAFE_componentWillUnmount() {
    //     this.keyboardDidShowListener.remove();
    //     this.keyboardDidHideListener.remove();
    // }

    _keyboardDidShow = () => {
        this.setState({
            topHeight: 80,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            flexDirection: "row",
            IconSize: 28,
            titleSize: 28,
            elevation: 2,
            name : false
        })
    }
    _keyboardDidHide = () => {
        this.setState({
            topHeight: 170,
            borderBottomLeftRadius: 180,
            borderBottomRightRadius: 150,
            IconSize: 60,
            titleSize: 30,
            flexDirection: "column",
            elevation: 20,
            name : true
        })
    }

    LoginFormTop() {
        return <View style={{ width: screen.width + 70, height: (this.state.topHeight), borderBottomLeftRadius: (this.state.borderBottomLeftRadius), borderBottomRightRadius: (this.state.borderBottomRightRadius), backgroundColor: "skyblue", justifyContent: "center", alignItems: "center", flexDirection: (this.state.flexDirection), marginLeft: -40, elevation: this.state.elevation }}>
            <Icons name="shopping-cart" size={(this.state.IconSize)} color="white" style={{ marginRight: 15 }} />
            <Text style={{ fontSize: (this.state.titleSize), color: "white", fontWeight: "bold", fontFamily: "arial", marginRight: -18 }}>Grocery App</Text>
            {/* <Antdesign name={this.state.name} size={30} style={{position : "absolute", left : 60, top : 30}}/> */}
            {this.state.name ? <TouchableOpacity onPress={() => this.props.navigation.push("Drawer")} style={{position : "absolute", left : 60, top : 30}}><Antdesign name="back" size={35}/></TouchableOpacity> : <TouchableOpacity style={{position : "absolute", left : 60, top : 30}}><MaterialsComm name="keyboard-backspace" size={40} style={{position : "absolute", left : 60, top : 20}}/></TouchableOpacity>}
        </View>
    }

    Loginform() {
        return <View style={{ width: screen.width, flexDirection: "column", padding: 30, justifyContent: "center", alignItems: "center" }}>
            <View style={{ alignItems: "flex-start" }}>
                <Text style={{ marginTop: 5, marginBottom: 5, fontWeight: "bold", fontSize: 18 }}>Username</Text>
                <TextInput placeholder="Enter Username" style={{ marginBottom: 15, height: 45, width: 270, borderBottomWidth: 1, borderColor: "#dbd7d0" }} />
                <Text style={{ marginTop: 5, marginBottom: 5, fontWeight: "bold", fontSize: 18 }}>Password</Text>
                <TextInput placeholder="Enter password" style={{ marginBottom: 15, height: 45, width: 270, borderBottomWidth: 1, borderColor: "#dbd7d0" }} />
            </View>
            <TouchableOpacity onPress={() => Alert.alert("Login Succesfull")}><View style={{ borderRadius: 12, backgroundColor: "skyblue", width: 170, height: 50, justifyContent: "center", alignItems: "center", marginTop: 10 }}><Text style={{ color: "white", fontSize: 20 }}>Sign in</Text></View></TouchableOpacity>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <TouchableOpacity onPress={() => this.fblogin()}><View style={{ flexDirection : "row", borderRadius: 25, backgroundColor: "#237bd9", width: 150, height: 50, justifyContent: "center", alignItems: "center", marginRight: 20, elevation : 7 }}><Icons name="facebook-f" size={24} color="white"/><Text style={{ color: "white", fontSize: 20, }}>acebook</Text></View></TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert("Login Succesfull")}><View style={{ flexDirection : "row", borderRadius: 25, backgroundColor: "#fff", width: 150, height: 50, justifyContent: "center", alignItems: "center", elevation : 6 }}><Icons name="google" size={24} color="black"/><Text style={{ color: "black", fontSize: 20 }}>oogle</Text></View></TouchableOpacity>
            </View>
            <View style={{marginTop : 30, alignItems : "center", justifyContent : "center", flexDirection : "row"}}>
                <Text style={{fontSize : 17}}>Don't have an account</Text>
                <TouchableOpacity onPress={() => this.props.navigation.push("Signup")}><View><Text style={{ color: "#ab7529", fontSize : 17, marginLeft : 5, marginTop : 2 }}>Create Account</Text></View></TouchableOpacity>
            </View>
        </View>
    }

    async fblogin() {
        // Calling the following function will open the FB login dialogue:
          try {
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    
            if (result.isCancelled) {
              // handle this however suites the flow of your app
              throw new Error('User cancelled request');
            }
    
            console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
    
            // get the access token
            const data = await AccessToken.getCurrentAccessToken();
    
            if (!data) {
              // handle this however suites the flow of your app
              throw new Error('Something went wrong obtaining the users access token');
            }
    
            // create a new firebase credential with the token
            const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
    
            // login with credential
            const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
    
            console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()))
          } catch (e) {
            console.error(e);
          }
        }




    render() {
        return (
            <View>
                <StatusBar hidden={true} />
                {this.LoginFormTop()}
                {this.Loginform()}
            </View>
        )
    }
}

export default Login;