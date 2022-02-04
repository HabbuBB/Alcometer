import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import React from 'react';

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        padding: 10
    },
    heading: {
        textAlign: 'center',
        color: '#00ccff',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 30,
    },
    inputHeading: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
        marginTop: 5,
    },
    textInput: {
        marginLeft: 0,
        padding: 5,
        fontSize: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    inputSelection: {
        marginLeft: 0,
    },
    result: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#00b8e6',
        marginBottom: 30,
        marginTop: 30,
        padding: 10,
        width: 350,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
    }
})
