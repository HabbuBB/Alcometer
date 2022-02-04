import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';

export default function RadioButton({options,onPress,defaultValue}) {
    const [value, setValue] = useState(defaultValue);

    const handlePress = (selected) => {
        setValue(selected)
        onPress(selected);
    }

    return (
    <>
    {options.map((item) => (
    <View style={styles.buttonContainer} key={item.value}>
        <Text style={styles.label}>{item.label}</Text>
        <Pressable style={styles.circle} onPress={() => handlePress(item.value)}>
            {value === item.value && <View style={styles.checkedCircle} />}
        </Pressable>
    </View>
    ))}
    </>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 20,
        paddingLeft: 5,
        paddingRight: 5, 
    },
    label: {
        marginRight: 10,
        fontSize: 15,
    },
    circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#000'
    }
})
