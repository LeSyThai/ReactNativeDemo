import React, {useState} from "react";
import {View, Text, StyleSheet,Image, TouchableOpacity, Dimensions, StatusBar, FlatList} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo, Fontisto, Ionicons, Octicons, MaterialCommunityIcons, Feather, AntDesign, FontAwesome6} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { deleteAccountAction } from "../store/userAction";

const screen = Dimensions.get('screen');

export default function Settings(){
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const user= useSelector((state) => state.user);

    const handleDeleteAccount = () =>{
        dispatch(deleteAccountAction(user.user?.[0]?.id));
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <LinearGradient 
                style={styles.background}
                colors={['#833ab4','#fd1d1d','#fcb045']}
                >
            </LinearGradient>
            <StatusBar style='light'/>
            <View style={styles.body}>
                <View style={styles.bodypart}>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('UserInfor')}>
                        <Text style={{color: 'white'}}>User Info</Text>
                        <FontAwesome6 name="greater-than" size={17} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Text style={{color: 'white'}}>My Subscriptions</Text>
                        <FontAwesome6 name="greater-than" size={17} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Text style={{color: 'white'}}>Profile Tags</Text>
                        <FontAwesome6 name="greater-than" size={17} color="red" />
                    </TouchableOpacity>
                </View>
                <View style={styles.bodypart}>
                    <TouchableOpacity style={styles.item}>
                        <Text style={{color: 'white'}}>Terms & Conditions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Text style={{color: 'white'}}>Privacy policy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.item, {marginTop: 30}]} onPress={handleDeleteAccount()}>
                        <Text style={{color: 'red'}}>Delete account</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        height: screen.height*0.07,
    },
    body:{
        flex: 1,
        paddingVertical: 35,
        // paddingHorizontal: 35,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    bodypart:{
        
    },
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        backgroundColor: '#12355c',
        marginVertical: 5
    },
});