import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function KeyBoard() {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.keys}><Text style={styles.textKeys}>C</Text></View>
                <View style={styles.keys}><Text style={styles.textKeys}>E</Text></View>
                <View style={styles.keys}><Text style={styles.textKeys}>%</Text></View>
                <View style={styles.keys}><Text style={styles.textKeys}>/</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.keys}><Text style={styles.textKeys}>7</Text></View>
                <View style={styles.keys}><Text style={styles.textKeys}>8</Text></View>
                <View style={styles.keys}><Text style={styles.textKeys}>9</Text></View>
                <View style={styles.keys}><Text style={styles.textKeys}>+</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.keys}><Text style={styles.textKeys}>4</Text></View>
                <View style={styles.keys}><Text style={styles.textKeys}>5</Text></View>
                <View style={styles.keys}><Text style={styles.textKeys}>6</Text></View>
                <View style={styles.keys}><Text style={styles.textKeys}>-</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.keys}><Text style={styles.textKeys}>1</Text></View>
                <View style={styles.keys}><Text style={styles.textKeys}>2</Text></View>
                <View style={styles.keys}><Text style={styles.textKeys}>3</Text></View>
                <View style={styles.keys}><Text style={styles.textKeys}>+</Text></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    keys: {
        width: '25%',
        height: 80,
        backgroundColor: 'rgb(58, 58, 58)',
        color: 'red',
        justifyContent:'center',
        alignItems: 'center'
    },
    textKeys: {
        color: 'white'
    }
})

export default KeyBoard;