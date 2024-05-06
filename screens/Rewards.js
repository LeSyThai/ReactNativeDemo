import React, {useState} from "react";
import {View, Text, StyleSheet,Image, TouchableOpacity, Dimensions, StatusBar, ProgressBarAndroid} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo, Fontisto, Ionicons, Octicons, MaterialCommunityIcons, Feather, AntDesign} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import * as Progress from 'react-native-progress';

const screen = Dimensions.get('screen');

export default function Rewards(){
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <LinearGradient 
                style={styles.background}
                colors={['#833ab4','#fd1d1d','#fcb045']}
                >
            </LinearGradient>
            <StatusBar style='light'/>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> navigation.navigate('Menu')}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <View style={{flexDirection: 'row', padding: 8, borderRadius: 50, backgroundColor: '#ff4f9e', alignItems: 'center'}}>
                    <Image style={{width: 20, height: 20}} source={require('../assets/images/reward.png')}/>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>9 Points</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.title}>
                    <Image style={styles.profile_image} source={require('../assets/images/Valar, Vaalmonican Hallow Hymn.png')}/>
                    <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
                        Rewards
                    </Text>
                    <Text style={{fontSize: 15, color: 'white'}}>
                        Collect points and get savings for the next month
                    </Text>
                </View>
                <View style={styles.menuList}>
                    <View style={styles.item}>
                        <View>
                            <Text style={{color: 'white'}}>Listen - 1 day</Text>
                            <Text style={{color: '#777899'}}>Achieved <AntDesign name="check" size={17} color="grey" /></Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={{width: 20, height: 20}} source={require('../assets/images/reward.png')}/>
                            <Text style={{color: 'red'}}> 1</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View>
                            <Text style={{color: 'white'}}>Listen for the first 7 consecutive days</Text>
                            <Text style={{color: '#777899'}}>Achieved <AntDesign name="check" size={17} color="grey" /></Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={{width: 20, height: 20}} source={require('../assets/images/reward.png')}/>
                            <Text style={{color: 'red'}}> 7</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View>
                            <Text style={{color: 'white'}}>Listen for the first 28 consecutive days</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: '#777899', marginRight: 10}}>14/28</Text>
                                <Progress.Bar progress={0.5} width={200} color="#ff4f9e"/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={{width: 20, height: 20}} source={require('../assets/images/reward.png')}/>
                            <Text style={{color: 'red'}}> 28</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View>
                            <Text style={{color: 'white'}}>Write one review</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={{width: 20, height: 20}} source={require('../assets/images/reward.png')}/>
                            <Text style={{color: 'red'}}> 50</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View>
                            <Text style={{color: 'white'}}>Refer a friend or accept a referral</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={{width: 20, height: 20}} source={require('../assets/images/reward.png')}/>
                            <Text style={{color: 'red'}}> 10</Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{marginHorizontal: 20, padding: 15, borderRadius: 25, backgroundColor: '#ff4f9e', alignItems: 'center'}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                    100 points - 5% off  |  150 points - 10% off
                </Text>
            </TouchableOpacity>
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
    header_image:{
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 25
    },
    body:{
        paddingVertical: 35,
        paddingHorizontal: 35,
    },
    profile_image:{
        width: 70,
        height: 70,
        borderRadius: 50,
        borderColor: '#9e9595',
        borderWidth: 3
    },
    title:{
        flexDirection: 'column',
        alignItems: 'center'
    },
    menuList:{
        marginVertical: 10
    },
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 15,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        backgroundColor: '#0f2c4f',
        marginVertical: 5
    },
    
});