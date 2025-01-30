import React from 'react';
import {StyleSheet, Alert, TextInput, Button, View} from 'react-native';
import {emailValidator, passwordValidator} from '../core/utils';
import {theme} from '../core/theme';
import Title from "../components/Title";

export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            newpassword: ""
        };
    }

    render() {
        function alert() {
            Alert.alert(
                'Erreur',
                'Email ou mot de passe incorrect',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
            );
        }

        function onSendPressed(state) {
            const emailError = emailValidator(state.email);
            const newpasswordError = passwordValidator(state.newpassword)

            if (emailError || newpasswordError) {
                alert()

            }
        }

/*
        const {navigate} = this.props.navigation;
*/
        return (
            <View>
                <Title title="Reinitialiser son mot de passe"/>

                <TextInput
                    label="E-mail address"
                    returnKeyType="next"
                    value={this.state.email}
                    onChangeText={text => this.setState({email: text})}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10}}
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
                <View class={styles.view}></View>

                <TextInput
                    label="New password"
                    returnKeyType="done"
                    value={this.state.newpassword}
                    onChangeText={text => this.setState({newpassword: text})}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10}}
                />
                <View class={styles.view}></View>

                <Button onPress={() => onSendPressed(this.state)} style={styles.button} title="Valider"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    back: {
        width: '100%',
        marginTop: 12,
    },
    button: {
        marginTop: 12,
    },
    label: {
        color: theme.colors.secondary,
        width: '100%',
    },
    input: {
        backgroundColor: "#ffffff",
    },
    view: {
        height: 40
    }
});

