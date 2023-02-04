import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { green } from './Constant';


const Todo = () => {
    
    const [list,setList] = useState([]);
    const [txt, setTxt] = useState('')

    let del = (i) => {
        console.log(i)
        list.splice(i,1)
        setList([...list])
    }

    let add = () => {
        console.log("Add Function Start")
        setList([...list,txt])
    }

  return <>
     <View style={styles.container}>

        <Text style={styles.heading}>Todo App</Text>
        <View style={{flexDirection:'column'}}>
        <TextInput  onChangeText={(e) => setTxt(e)} style={styles.input} placeholder='Enter Todo' />
        <Button title='Add' onPress={add} color='orange' />
        </View>
        <Text>{txt}</Text>
        {list.map((x,i)=>(
         <View key={i}>
            <Text style={{color: 'white', fontSize: 25}}>{x}</Text>
             <Button title='Delete' color='black' onPress={() =>del(i)}/>
         </View>
        ))}
     </View> 

  </>
}

export default Todo;


const styles = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: green,
        height: "100%",
    },
    heading : {
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
    },
    input:{
        width: '100%',
        padding: 12,
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'white',
        marginVertical: 10
    }
})