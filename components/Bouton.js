import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class Bouton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onPress, title, style, textStyle} = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
                <Text style={[styles.text, textStyle]}>{title}</Text>
            </TouchableOpacity>
        );
    };
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        width: 250,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

