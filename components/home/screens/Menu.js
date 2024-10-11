// Menu.js
import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Menu = ({ visible, onClose, onViewProfile, onSignIn, onSignOut }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.menuContainer}>
                    <TouchableOpacity onPress={onViewProfile} style={styles.menuItem}>
                        <Text style={styles.menuText}>View Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onSignIn} style={styles.menuItem}>
                        <Text style={styles.menuText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onSignOut} style={styles.menuItem}>
                        <Text style={styles.menuText}>Sign Out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    menuContainer: {
        width: 250,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    menuItem: {
        paddingVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    menuText: {
        fontSize: 18,
    },
    closeButton: {
        marginTop: 20,
        paddingVertical: 10,
    },
    closeButtonText: {
        color: 'red',
        fontSize: 16,
    },
});

export default Menu;
