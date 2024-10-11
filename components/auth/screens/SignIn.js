import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignInScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const loadCredentials = async () => {
            const storedUsername = await AsyncStorage.getItem('username');
            if (storedUsername) {
                setUsername(storedUsername);
                setRememberMe(true);
                navigation.navigate('Home', { username: storedUsername }); // Automatically navigate to Home if credentials exist
            }
        };
        loadCredentials();
    }, [navigation]);

    const handleSignIn = async () => {
        // Add your sign-in logic here
        if (username && password) {
            // Simulate a successful sign-in
            if (rememberMe) {
                await AsyncStorage.setItem('username', username); // Store username if remember me is checked
            } else {
                await AsyncStorage.removeItem('username'); // Remove stored username if not
            }
            navigation.navigate('Home', { username }); // Navigate to Home
        } else {
            Alert.alert('Error', 'Please enter both username and password.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
                <Text style={styles.rememberMe}>{rememberMe ? '✔ Remember Me' : '✖ Remember Me'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
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
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        width: '80%',
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        width: '80%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    rememberMe: {
        marginBottom: 10,
        color: 'blue',
    },
});

export default SignInScreen;
