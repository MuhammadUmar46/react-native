import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './Background';
import { darkGreen } from './Constant'
import Field from './Field';
import Btn from './Btn';

const Login = (props) => {
  return (
    <Background>
        <View style={{ alignItems:"center", width: 400}}>
           <Text style={{ color: "white", fontSize: 60, fontWeight: 'bold', marginVertical: 10 }}>Login</Text>
           <View style={{ backgroundColor: 'white', height: 800, width: 460, 
                          borderTopLeftRadius: 175, paddingTop: 100, alignItems: 'center'
            }}>
              <Text style={{ fontSize: 40, color: darkGreen , fontWeight: "bold" }}>Welcome Back</Text>
              <Text style={{ color: "grey", fontSize: 18, fontWeight: "bold", marginBottom: 20}}>Login to your account</Text>
              <Field placeholder="Email / Username" />
              <Field placeholder="Password" secureTextEntry={true}/>
              <View style={{ alignItems: "flex-end", width:"78%", paddingRight: 16, marginBottom: 200}}>
                 <Text style={{ color : darkGreen, fontWeight: "bold", fontSize: 16}}>
                    Forget Password ?
                 </Text>
              </View>
              <Btn textColor= 'white' bgColor={darkGreen} btnLabel="Login" Press={() => props.navigation.navigate("Todo") }/>
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Don't have an account ? </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
                    <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16}}>Signup</Text>
                </TouchableOpacity>
              </View>
           </View>
        </View>
    </Background>
  )
}

export default Login;