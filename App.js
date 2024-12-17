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

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator id="main" initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={{title: "Accueil"}}/>
                    <Stack.Screen name="Connect" component={Login} options={{ title: "Se Connecter"}}/>
                    <Stack.Screen name="Register" component={Register} options={{ title: "S'inscrire"}}/>
                    <Stack.Screen name="ConnectedHome" component={ConnectedHome} options={{ title: "Accueil"}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
