import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import AppNavigation from "./AppNavigation";

export default function App(){

  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
}
 