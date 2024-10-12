import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/enabled_hi/564x/15/7f/14/157f1437d0da775fb6f478fb9c48160e.jpg' }} // Thay thế với URL của hình ảnh bạn muốn sử dụng
            style={styles.background}
            resizeMode="cover" // Đảm bảo hình ảnh được bao phủ toàn bộ màn hình
        >
            <View style={styles.container}>
                <Text style={styles.title}>Sign In</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your username"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.checkboxContainer} onPress={() => setRememberMe(!rememberMe)}>
                    <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
                    <Text style={styles.rememberMeText}>Remember Me</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Màu nền trắng với độ trong suốt để tạo hiệu ứng
        borderRadius: 10,
        padding: 20,
        margin: 20,
        width: '90%', // Tùy chỉnh chiều rộng để tránh vươn ra ngoài màn hình
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%', // Thay đổi chiều rộng để sử dụng toàn bộ chiều rộng của container
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        color: '#333', // Màu chữ của nhãn
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: '100%', // Thay đổi chiều rộng để sử dụng toàn bộ chiều rộng của container
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        width: '100%', // Thay đổi chiều rộng để sử dụng toàn bộ chiều rộng của container
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%', // Thay đổi chiều rộng để sử dụng toàn bộ chiều rộng của container
    },
    checkbox: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginRight: 10,
        backgroundColor: 'white',
    },
    checkboxChecked: {
        backgroundColor: '#4CAF50',
    },
    rememberMeText: {
        fontSize: 16,
        color: '#333',
    },
});

export default SignInScreen;
