// UserProfile.js
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const UserProfile = ({ route, navigation }) => {
    const { username } = route.params || { username: 'Aliosa' }; // Get the username passed from HomeScreen

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Profile</Text>
            <Text style={styles.label}>Username: {username}</Text>
            {/* Add more user information as needed */}
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default UserProfile;
