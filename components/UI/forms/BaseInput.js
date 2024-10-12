// components/forms/BaseInput.js

import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const BaseInput = ({ label, value, onChangeText, placeholder, secureTextEntry = false }) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>} {/* Hiển thị nhãn nếu có */}
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry} // Sử dụng cho mật khẩu
                autoCapitalize="none" // Chuyển đổi chữ hoa
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333', // Màu chữ nhãn
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
});

export default BaseInput;
