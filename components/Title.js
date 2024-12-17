import {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';


export default class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, textStyle} = this.props;
        return (
            <View style={styles.header}>
                <Text style={[styles.title, textStyle]}>{title}</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
