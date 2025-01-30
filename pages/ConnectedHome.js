import React, {Component} from 'react';
import {View} from 'react-native';
import Bouton from "../components/Bouton";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";

export default class ConnectedHome extends Component {

    render() {
        const { navigation, route } = this.props;
        const user = route.params.username

        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Title
                    title="Vous êtes connecté"
                    textStyle={{
                        color: 'purple',
                        marginBottom: 10
                    }}/>

                <SubTitle
                    title={`Bievenue ${user} sur notre application d'inscription connexion`}
                    textStyle={{color: 'black'}}/>
                <Bouton
                    title="DÉCONNEXION"
                    onPress={() => navigation.navigate("Home")}
                    style={{
                        backgroundColor: 'transparent',
                        marginTop: 15,
                        borderWidth: 1,
                        borderColor: 'purple',
                    }}
                    textStyle={{
                        fontSize: 20,
                        color: 'purple'
                    }}/>
            </View>
        );
    }
}
