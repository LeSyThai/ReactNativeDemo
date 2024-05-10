import React, {useState} from "react";
import { View, Image, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Alert} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions} from 'react-native';
import Checkbox from 'expo-checkbox';
import { Fontisto, AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Login from "./Login";
import { signupAction } from "../store/userAction";

const screen = Dimensions.get('screen');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup(){
    const navigation = useNavigation();
    const [isChecked, setChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');

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
    
    const handleSignup = () => {
        if(validateInputs()){
            if(!isChecked){
                Alert.alert('Please check the Term & Conditions and Privacy Policy')
            }else 
                dispatch(signupAction(fName, lName, email, password));
            // if(user.isSignedIn)
            //     navigation.navigate('Welcome');
            console.log(user)
        }
    }

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
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, paddingBottom: 25}}>Register</Text>
                <View style={styles.textInput}>
                    <MaterialCommunityIcons name="account" size={24} color="white" />
                    <TextInput 
                        placeholder="First name" 
                        placeholderTextColor='#4a607d' 
                        style={{paddingLeft:10, color: 'white'}}
                        onChangeText={(val)=> setFName(val)}/>    
                </View>
                <View style={styles.textInput}>
                    <MaterialCommunityIcons name="account" size={24} color="white" />
                    <TextInput 
                        placeholder="Last name" 
                        placeholderTextColor='#4a607d' 
                        style={{paddingLeft:10, color: 'white'}}
                        onChangeText={(val)=> setLName(val)}/>    
                </View>
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
                <View style={styles.checkview}>
                    <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                    />
                    <View>
                        <Text style={{color: 'white'}}>
                            by clicking on "Register" you agree to our 
                        <TouchableOpacity>
                            <Text style={{color: '#ff0000', marginBottom: -5}}> Term & Conditions </Text>
                        </TouchableOpacity>
                        and
                        <TouchableOpacity>
                            <Text style={{color: '#ff0000',  marginBottom: -5}}> Privacy Policy</Text>
                        </TouchableOpacity>
                        </Text>
                    </View>
                </View>

                <TouchableOpacity style={[styles.button, {marginTop: screen.height*0.15}]} onPress={handleSignup}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Register</Text>
                </TouchableOpacity>


                <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', paddingHorizontal: 50}}>
                    <Text style={{color: 'white'}}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{color: '#ff4f9e', fontWeight: 'bold'}}>Log In</Text>
                    </TouchableOpacity>
                </View>
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
    checkview:{
        alignItems: 'center',
        flexDirection: 'row',
        height: screen.height * 0.05,
    },
    checkbox:{
        margin: 8,
        borderRadius: 5,
    }
    
});