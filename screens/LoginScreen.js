import React, {Component} from "react";
import {View, Button} from 'react-native';

export default class LoginScreen extends Component {
    signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behaviour: "web",
        androidClientId:
          "263159953768-9umudlu8f7lnl52f30t8eeetqb21utki.apps.googleusercontent.com",
        iosClientId:
          "263159953768-fmmchh3ls9sonamufo49v835tcclrtdj.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });
    }
}

    render(){
        return(
        <View 
            style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}>
            <Button
                title ="Sign in with Google"
                onPress={()=>this.signInWithGoogleAsync()}>
            </Button>
        </View>  
      )  
    }
}
