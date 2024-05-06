import * as React from "react";

import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Welcome from "../screens/Welcome";
import Menu from "../screens/Menu";
import Rewards from "../screens/Rewards";
import Settings from "../screens/Settings";
import UserInfor from "../screens/UserInfor";

const Stack= createNativeStackNavigator();

export default function AppNavigation(){
  const user = useSelector((state) => state?.user)
  console.log(user,'<<')
  return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          {!user.isSignedIn ? ( 
            <>
                <Stack.Screen
                name="Login"
                component={Login}
                />
                <Stack.Screen
                name="Register"
                component={Signup}
            />
            </>
        ) : (
            <>
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                />
                <Stack.Screen
                    name="Menu"
                    component={Menu}
                />
                <Stack.Screen
                    name="Rewards"
                    component={Rewards}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        headerShown: true,
                        headerStyle:{
                            backgroundColor: '#15345c'
                        },
                        headerTintColor: 'white',
                        title: "Settings",
                        headerTitleAlign: 'center',
                        headerBackTitle: 'Back'
                    }}
                />
                <Stack.Screen
                    name="UserInfor"
                    component={UserInfor}
                    options={{
                        headerShown: true,
                        headerStyle:{
                            backgroundColor: '#15345c'
                        },
                        headerTintColor: 'white',
                        title: "User info",
                        headerTitleAlign: 'center',
                        headerBackTitle: 'Back'
                    }}
                />
            </>
          )}
         
          
        </Stack.Navigator>
      </NavigationContainer>

  );
}
