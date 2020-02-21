import React from 'react';
import { View, Text, StatusBar, Image, ImageBackground, Dimensions } from 'react-native';
import Logo from '../../assets/images/GROCERY2.png';
import Back1 from '../../assets/images/back1.jpg'
const screen = Dimensions.get("screen")
import firebase from 'react-native-firebase';

class LoadingPage extends React.Component {

    constructor() {
        super();

        this.state = {
            render: false,
            HomePage: true,
        }
    }

    Loading() {
        return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image source={Logo} />
            {/* <Text style={{fontSize : 27, color : "white"}}>Grocery App</Text> */}
        </View>
    }


    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                console.log(user)
                var _ = this;
                firebase.database().ref("users/" + user.uid).once("value").then(function(snapshot){
                    if(snapshot.exists()){
                        _.props.navigation.push("Drawer")
                    }
                    else{
                        _.props.navigation.push("VendorView")
                    }
                    // console.log(snapshot)
                })
            }
            else {
                setTimeout(function () {
                    this.setState({ render: true })
                }.bind(this), 5000)
            }
        });
        
    }

    rendering() {
        const { HomePage, render } = this.state;
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                {!render && this.Loading()}
                {render && this.props.navigation.push('Drawer')}
            </View>
        );
    }


    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ImageBackground style={{width : screen.width, height : screen.height}} source={Back1}>
                    <StatusBar hidden={true} backgroundColor="white" barStyle="dark-content" />
                    {this.rendering()}
                </ImageBackground>
            </View>
        )
    }
}
export default LoadingPage;