import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CheckInScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Check In Successful!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default CheckInScreen;
