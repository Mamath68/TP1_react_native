import {Component} from 'react';
import {Alert, View} from 'react-native';
import Input from '../components/Input';
import Bouton from "../components/Bouton";
import Title from "../components/Title";
import {emailValidator, validator} from "../core/utils";
import {connect} from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }


    handleEmailChange = (email) => {
        this.setState({email});
    };


    handlePasswordChange = (password) => {
        this.setState({password});
    };

    onLoginPressed() {
        console.log("click");
        console.log(this.props);

        const emailError = emailValidator(this.state.email);
        const passwordError = validator(this.state.password);

        if (emailError || passwordError) {
            return alert("Login Error");
        }

        const {users} = this.props;
        console.log(users)
        let userConnect = false;

        for (let i = 0; i < users?.length; i++) {
            if (users[i].email === this.state.email && users[i].password === this.state.password) {
                userConnect = true;
                this.props.navigation.navigate('ConnectedHome', {username: users[i].name});
            }
        }
        if (userConnect === false) {
            Alert.alert(
                "Erreur",
                "L'email ou le mot de pass est incorrect",
                [
                    {text: "OK", onPress: () => console.log("OK Pressed")},
                ],
                {cancelable: false},
            );
        }
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Title title="Connexion" textStyle={{color: 'purple', marginBottom: 10}}/>

                <Input
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={this.handleEmailChange}
                    keyboardType="email-address"
                    style={{width: 250}}
                    inputStyle={{borderColor: 'black'}}
                />

                <Input
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={this.handlePasswordChange}
                    secureTextEntry={true}
                    style={{width: 250}}
                    inputStyle={{borderColor: 'black'}}
                />

                <Bouton title="CONNEXION" onPress={() => this.onLoginPressed()}
                        style={{backgroundColor: 'purple', marginTop: 25}}
                        textStyle={{fontSize: 20}}/>

                <Title title="S'inscrire" textStyle={{color: 'purple', marginBottom: 10}}/>

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        users: state.UserReducer.users
    };
}

export default connect(mapStateToProps)(Login)
