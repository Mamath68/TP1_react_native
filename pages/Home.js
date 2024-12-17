import React, {Component} from 'react';
import {View} from 'react-native';
import Bouton from "../components/Bouton";
import Title from "../components/Title";

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props;
        return (
            <View
                style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Title
                    title="Connexion/Inscription"
                    textStyle={{color: 'purple'}}
                />

                <Bouton title="CONNEXION"
                        onPress={() => navigation.navigate('Connect')}
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
                        onPress={() => navigation.navigate('Register')}
                        textStyle={{fontSize: 20, color: 'purple'}}/>
            </View>
        );
    }
}
