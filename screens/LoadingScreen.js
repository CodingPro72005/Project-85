import React, {Component} from "react";
import {View, ActivityIndicator} from 'react-native';
import firebase from "firebase";


export default class LoadingScreen extends Component {
   componentDidMount(){
       this.checkIfloggedIn()
   }

   checkIfloggedIn = () => {
       firebase.auth().onAuthStateChanged((user) =>{
           if(user){
               this.props.navigation.navigate('DasboardScreen')
           } else {
               this.props.navigation.navigate('LoginScreen')
           }
       })
   }
   
    render(){
        return(
        <View 
            style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}>
            <ActivityIndicator size = "large"/>
        </View>  
      )  
    }
}
