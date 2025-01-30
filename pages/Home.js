import React, {Component} from 'react';
import {View} from 'react-native';
import Bouton from "../components/Bouton";
import Title from "../components/Title";

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View
                style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Title
                    title="Connexion/Inscription"
                    textStyle={{color: 'purple'}}
                />

                <Bouton title="CONNEXION"
                        onPress={() => navigate('Loginscreen')}
                        style={{backgroundColor: 'purple'}}
                        textStyle={{fontSize: 20}}
                />

                <Bouton title="INSCRIPTION"
                        style={{
                            backgroundColor: 'transparent',
                            borderWidth: 1,
                            borderColor: 'purple',
                            marginTop: 15,
                            marginBottom: 15
                        }}
                        onPress={() => navigate('Registerscreen')}
                        textStyle={{fontSize: 20, color: 'purple'}}/>
            </View>
        );
    }
}
