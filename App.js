import React from 'react';
import './gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ConnectedHome from "./pages/ConnectedHome";
import {Provider} from "react-redux";
import Store from './store/configStore'
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator id="main" initialRouteName="Homescreen">
                    <Stack.Screen
                        name="Homescreen"
                        component={Home}
                    />
                    <Stack.Screen name="Loginscreen" component={Login}/>
                    <Stack.Screen name="Registerscreen" component={Register}/>
                    <Stack.Screen name="ForgotPasswordscreen" component={ForgotPassword}/>
                    <Stack.Screen name="Dashboard" component={ConnectedHome}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
        ;
}
