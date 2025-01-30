import {Component} from 'react';
import {Alert, View} from 'react-native';
import Input from '../components/Input';
import Bouton from "../components/Bouton";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import {emailValidator, validator} from "../core/utils";
import {connect} from "react-redux";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }

    handleTextChange = (name) => {
        this.setState({name})
    }

    handleEmailChange = (email) => {
        this.setState({email});
    };

    handlePasswordChange = (password) => {
        this.setState({password});
    };

    onSignUpPressed() {
        console.log("click");
        console.log(this.props);

        const nameError = validator(this.state.name);
        const emailError = emailValidator(this.state.email);
        const passwordError = validator(this.state.password);

        console.log(nameError)
        console.log(emailError)
        console.log(passwordError)
        console.log(this.state)
        if (emailError || passwordError || nameError) {
            return Alert.alert(
                "Erreur",
                "Erreur lors de l'inscription",
                [
                    {text: "Ok", onPress: () => console.log("Ok")}
                ]
            );
        } else {
            const action = {
                type: "ADD_USER",
                value: {name: this.state.name, email: this.state.email, password: this.state.password}
            }
            this.props.dispatch(action)
            console.log(this.props)
            this.props.navigation.navigate('Connect')
        }

    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Title title="Inscription" textStyle={{color: 'purple', marginBottom: 10}}/>

                <Input
                    placeholder="Nom"
                    returnKeyType="next"
                    value={this.state.text}
                    onChangeText={this.handleTextChange}
                    style={{width: 250}}
                    inputStyle={{borderColor: 'black'}}
                />

                <Input
                    placeholder="Email"
                    returnKeyType="next"
                    value={this.state.email}
                    onChangeText={this.handleEmailChange}
                    keyboardType="email-address"
                    style={{width: 250}}
                    inputStyle={{borderColor: 'black'}}
                />

                <Input
                    placeholder="Password"
                    returnKeyType="next"
                    value={this.state.password}
                    onChangeText={this.handlePasswordChange}
                    secureTextEntry={true}
                    style={{width: 250}}
                    inputStyle={{borderColor: 'black'}}
                />

                <Bouton title="Inscription" onPress={() => this.onSignUpPressed()}
                        style={{backgroundColor: 'purple', marginTop: 25}}
                        textStyle={{fontSize: 20}}/>

                <SubTitle
                    title="Déja Inscrit ?"
                    subTitle=" Connectez Vous"
                    onPress={() => navigate('Loginscreen')}
                    textStyle={{color: 'black'}}
                />

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

export default connect(mapStateToProps)(Register)
