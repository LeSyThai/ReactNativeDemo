import React, { useState } from "react";
import { View, Image, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Alert} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {Dimensions} from 'react-native';
import { Fontisto, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/userAction";

const screen = Dimensions.get('screen');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login(){
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const validateInputs = () => {
        if (!emailRegex.test(email)) {
          Alert.alert('Invalid Email', 'Please enter a valid email address.'); // Cảnh báo nếu email không đúng định dạng
          return false;
        }
    
        if (password.length < 6) {
          Alert.alert('Weak Password', 'Password should be at least 6 characters.'); // Cảnh báo nếu mật khẩu quá ngắn
          return false;
        }
    
        return true;
      };

    const user = useSelector((state) => state.user)

    const handleLogin = async () => {
        if(validateInputs()){
             await dispatch(loginAction(email, password));
            // if(user.isSignedIn)
                navigation.navigate('Welcome');
        }
      };

    return (
        <View style={styles.container}>
            <LinearGradient 
                style={styles.background}
                colors={['#833ab4','#fd1d1d','#fcb045']}
                >
            </LinearGradient>
            <StatusBar style='light'/>
            <View style={styles.header}>
                <Image style={styles.header_image} source={require('../assets/images/upnow.png')}/>
                <View>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>UpNow</Text>
                    <Text style={{color: '#3f7ad9'}}>Digital Hypnoterapy</Text>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, paddingBottom: 15}}>Log In</Text>
                <View style={styles.textInput}>
                    <Fontisto name="email" size={24} color="white" />
                    <TextInput 
                        placeholder="Email" 
                        placeholderTextColor='#4a607d' 
                        style={{paddingLeft:10, color: 'white'}}
                        onChangeText={(val)=> setEmail(val)}/>
                </View>
                <View style={styles.textInput}>
                    <AntDesign name="lock" size={24} color="white" />
                    <TextInput 
                        placeholder="Password" 
                        secureTextEntry={true} 
                        placeholderTextColor='#4a607d' 
                        style={{paddingLeft:10, color: 'white'}}
                        onChangeText={(val) =>setPassword(val)}/>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity>
                        <Text style={{right: 0, color: 'white'}}>Forget password ?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Log In</Text>
                </TouchableOpacity>
                <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', paddingHorizontal: 50}}>
                    <Text style={{color: 'white'}}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.push('Register')}>
                        <Text style={{color: '#ff4f9e', fontWeight: 'bold'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: screen.height*0.05}}>
                    <View style={styles.separator}/>
                    <Text style={{color: 'white'}}>Or Log in with</Text>
                    <View style={styles.separator}/>
                </View>
                <TouchableOpacity style={styles.fbButton}>
                    <MaterialIcons name="facebook" size={30} color="white" style={{marginRight: 30}}/>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Log in with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.apButton}>
                    <MaterialIcons name="apple" size={24} color="white" style={{marginRight: 50}} />
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18, }}>Log in with Apple</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        // fontFamily: 'Arial',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#15345c',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000,
        opacity: 0.2,
    },
    header:{
        borderBottomWidth: 2,
        borderBottomColor: '#3f7ad9',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 25,
        paddingTop: 35,
        height: screen.height*0.15,
    },
    header_image:{
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 25
    },
    body:{
        paddingVertical: 35,
        paddingHorizontal: 35,
    },
    textInput:{
        borderRadius: 50,
        backgroundColor: '#233f63',
        flexDirection: 'row',
        height: screen.height * 0.06,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#ff4f9e',
        marginVertical: 25,
    },
    separator:{
        flex: 1,
        backgroundColor: '#324161',
        height: screen.height*0.001,
        marginHorizontal: 10
    },
    fbButton:{
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 50,
        height: screen.height*0.06,
        marginVertical: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#3B5998',
    },
    apButton:{
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 50,
        height: screen.height*0.06,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#000000',
    }
    
});