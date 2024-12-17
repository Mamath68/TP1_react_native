import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';


export default class SubTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, subTitle, textStyle, onPress} = this.props;
        return (
            <View style={styles.header}>
                <Text style={[styles.title, textStyle]}>{title}</Text>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.subTitle}>
                        {subTitle}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        textAlign: 'center',
    },
    title: {
        fontSize: 15,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 15,
        color: 'purple',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
