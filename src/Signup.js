import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './Background';
import { darkGreen } from './Constant'
import Field from './Field';
import Btn from './Btn';

const Signup = (props) => {
  return (
    <Background>
        <View style={{ alignItems:"center", width: 400}}>
           <Text style={{ color: "white", fontSize: 60, fontWeight: 'bold', marginTop: 20 }}>Register</Text>
           <Text style={{ color: 'white', fontSize: 19, marginBottom: 20, fontWeight: 'bold'}}>
             Create a New Account
           </Text>
           <View style={{ backgroundColor: 'white', height: 700, width: 460, 
                          borderTopLeftRadius: 175, paddingTop: 70, alignItems: 'center'
            }}>
              <Field placeholder="First Name" />
              <Field placeholder="Last Name" />
              <Field placeholder="Email" keyboardType={"email-address"}/>
              <Field placeholder="Contact Number" />
              <Field placeholder="Password" secureTextEntry={true}/>
              <Btn textColor= 'white' bgColor={darkGreen} btnLabel="Signup" Press={() => {
                alert("Account Created")
                props.navigation.navigate('Login')
                }}/>
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Already have an account ? </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                    <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16}}>Login</Text>
                </TouchableOpacity>
              </View>
           </View>
        </View>
    </Background>
  )
}

export default Signup;