import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Iprops = {
  username: string;
}

const DemoComponent = (props :Iprops) : React.JSX.Element => {
  const {username} = props;
  const [name, setName] = useState('');
  
  return (
    <View style={style.main}>
      <Text style={style.TextColor}>Hi I am {username}</Text>
      <TouchableOpacity onPress={()=>{Alert.alert('Hi, Welcome to my app')}}>
    <Text style={style.button}>Click Me</Text>
      </TouchableOpacity>
      <Text style={style.TextColor}>{name}</Text>
      <TextInput
      placeholder='Enter your name'
      style={style.input}
      onChangeText={(text)=>{
        setName(text)
      }}
      />
    
    </View>
  );
};

export default DemoComponent;


const style = StyleSheet.create({

  main:{
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor:Colors.dark,
    padding:20,shadowColor: '#ca1010',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    
  },
  TextColor:{
    color:Colors.white,
    fontSize:24,
    
  },
  button:{
    padding:10,
    backgroundColor:'#ca1010',
    borderRadius:10,
    marginTop:10,
    alignItems:'center',
  
  },
  input:{
    marginTop:10,
    padding:10,
    borderRadius:10,
    backgroundColor:'#ca1010',
    color:Colors.white,
  }

});
