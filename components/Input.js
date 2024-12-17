import React, {Component} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {placeholder, value, onChangeText, style, inputStyle, secureTextEntry, keyboardType} = this.props;
        return (
            <View style={[styles.container, style]}>
                <TextInput
                    style={[styles.input, inputStyle]}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
    },
});
