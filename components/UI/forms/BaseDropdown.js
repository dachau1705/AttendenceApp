// components/forms/BaseDropdown.js

import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BaseDropdown = ({ label, value, options, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (item) => {
        onChange(item);
        setIsOpen(false);
    };

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
                <Text style={styles.dropdownText}>{value ? value : placeholder}</Text>
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.dropdownList}>
                    <FlatList
                        data={options}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.dropdownItem}
                                onPress={() => handleSelect(item.value)}
                            >
                                <Text style={styles.dropdownItemText}>{item.label}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
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
    dropdown: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    dropdownText: {
        fontSize: 16,
        color: 'gray',
    },
    dropdownList: {
        position: 'absolute',
        top: 45, // Khoảng cách giữa dropdown và danh sách
        left: 0,
        right: 0,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        maxHeight: 150, // Chiều cao tối đa của danh sách
        zIndex: 1, // Để danh sách nằm trên các thành phần khác
    },
    dropdownItem: {
        padding: 10,
    },
    dropdownItemText: {
        fontSize: 16,
    },
});

export default BaseDropdown;
