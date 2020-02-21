import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Alert, Dimensions, StatusBar, Keyboard, ScrollView } from 'react-native';
const screen = Dimensions.get("screen");
import Icons from 'react-native-vector-icons/FontAwesome';
import Antdesign from "react-native-vector-icons/AntDesign";
import MaterialsComm from "react-native-vector-icons/MaterialCommunityIcons";
// var FBLoginButton = require('./FBLoginButton');
import { LoginManager, AccessToken, } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
import ImagePicker from 'react-native-image-picker';


var options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class Signup extends React.Component {

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
      photo: false,
      FirstName: "",
      LastName: "",
      Email: "",
      Password: ""
    }
  }

  SignUpFormTop() {
    return <View style={{ width: screen.width + 70, height: (this.state.topHeight), borderBottomLeftRadius: (this.state.borderBottomLeftRadius), borderBottomRightRadius: (this.state.borderBottomRightRadius), backgroundColor: "skyblue", justifyContent: "center", alignItems: "center", flexDirection: (this.state.flexDirection), marginLeft: -40, elevation: this.state.elevation }}>
      <Icons name="shopping-cart" size={(this.state.IconSize)} color="white" style={{ marginRight: 15 }} />
      <Text style={{ fontSize: (this.state.titleSize), color: "white", fontWeight: "bold", fontFamily: "arial", marginRight: -18 }}>Grocery App</Text>
      <TouchableOpacity onPress={() => this.props.navigation.push("Login")} style={{ position: "absolute", left: 60, top: 30 }}><Antdesign name="back" size={35} /></TouchableOpacity>
    </View>
  }


  Signupform() {
    return <View style={{ width: screen.width, flexDirection: "column", padding: 30, justifyContent: "center", alignItems: "center", marginTop: 40 }}>
      <View style={{ alignItems: "flex-start" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ marginTop: 5, marginBottom: 5, fontWeight: "bold", fontSize: 18 }}>first name</Text>
            <TextInput placeholder="Enter Firstname" onChangeText={e => this.setState({ FirstName: e })} style={{ marginBottom: 15, height: 45, width: 120, borderBottomWidth: 1, borderColor: "#dbd7d0" }} />

          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ marginTop: 5, marginBottom: 5, fontWeight: "bold", fontSize: 18 }}>Last name</Text>
            <TextInput placeholder="Enter Last name" onChangeText={e => this.setState({ LastName: e })} style={{ marginBottom: 15, height: 45, width: 120, borderBottomWidth: 1, borderColor: "#dbd7d0" }} />
          </View>
        </View>
        <Text style={{ marginTop: 5, marginBottom: 5, fontWeight: "bold", fontSize: 18 }}>Email</Text>
        <TextInput placeholder="Enter email" onChangeText={e => this.setState({ Email: e })} style={{ marginBottom: 15, height: 45, width: 270, borderBottomWidth: 1, borderColor: "#dbd7d0" }} />
        <Text style={{ marginTop: 5, marginBottom: 5, fontWeight: "bold", fontSize: 18 }}>Password</Text>
        <TextInput placeholder="Enter password" onChangeText={e => this.setState({ Password: e })} style={{ marginBottom: 15, height: 45, width: 270, borderBottomWidth: 1, borderColor: "#dbd7d0" }} />
        <View style={{justifyContent : "center", alignItems : "center"}}>
          <TouchableOpacity onPress={() => this.UserSignup()}><View style={{ flexDirection: "row", borderRadius: 5, backgroundColor: "#237bd9", width: 120, height: 50, justifyContent: "center", alignItems: "center", marginTop: 20, elevation: 7 }}><Text style={{ color: "white", fontSize: 20, }}>Sign up</Text></View></TouchableOpacity>
        </View>
        {/* <Text style={{ marginBottom: 10, marginTop: 10 }}>Picture</Text>
        {this.state.photo ? <Image source={{ uri: this.state.avatarSource }} style={{ width: 70, height: 60, borderRadius: 10 }} /> : <TouchableOpacity onPress={() => this.ChoosePic()}>
          <View style={{ height: 50, width: 120, backgroundColor: "white", borderRadius: 8, justifyContent: "center", alignItems: "center", elevation: 4 }}>
            <Text>Choose Picture</Text>
          </View>
        </TouchableOpacity>} */}
      </View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}> ----- Sign up with ----- </Text>
      <TouchableOpacity onPress={() => this.UserSignup()}><View style={{ flexDirection: "row", borderRadius: 5, backgroundColor: "#237bd9", width: 230, height: 50, justifyContent: "center", alignItems: "center", marginTop: 20, elevation: 7 }}><Icons name="facebook-f" size={24} color="white" /><Text style={{ color: "white", fontSize: 20, }}>acebook</Text></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert("Login Succesfull")}><View style={{ flexDirection: "row", borderRadius: 5, backgroundColor: "#fff", width: 230, height: 50, justifyContent: "center", alignItems: "center", marginTop: 15, elevation: 5 }}><Icons name="google" size={24} color="black" /><Text style={{ color: "black", fontSize: 20 }}>oogle</Text></View></TouchableOpacity>
      <View style={{ marginTop: 50, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
        <Text style={{ fontSize: 17 }}>Already have an account</Text>
        <TouchableOpacity onPress={() => this.props.navigation.push("Login")}><View><Text style={{ color: "#ab7529", fontSize: 18, marginLeft: 5, marginTop: 1, fontWeight: "bold" }}>Login here</Text></View></TouchableOpacity>
      </View>
    </View>
  }

  ChoosePic() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // let source = { uri: response.uri };
        this.setState({ avatarSource: response.uri, photo: true })

        // You can also display the image using data:
        // let image_uri = { uri: 'data:image/jpeg;base64,' + response.data };

        // this.uploadImage(response.uri)
        //     .then(url => { alert('uploaded'); this.setState({ image_uri: url }) })
        //     .catch(error => console.log(error))

      }
    });

  }


  UserSignup() {
    firebase.auth().createUserWithEmailAndPassword(this.state.Email, this.state.Password)
      .then((userdata) => {
        var Userid = firebase.auth().currentUser.uid
        firebase.database().ref("users/" + Userid).set({
          Name : this.state.FirstName + this.state.LastName,
          Email : this.state.Email,
          uid : Userid,
          isVendor : false
        }).then(() => {
          this.props.navigation.push("Drawer")
        })
      })
      .catch(error => console.log(error))
  }

  async fblogin() {
    // Calling the following function will open the FB login dialogue:
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

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
      <View style={{ flex: 1 }}>
        {this.SignUpFormTop()}
        <StatusBar hidden={true} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.Signupform()}
        </ScrollView>
      </View>
    )
  }
}

export default Signup;