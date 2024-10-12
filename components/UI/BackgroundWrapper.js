import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const BackgroundWrapper = ({ children }) => {
    const backgroundUri = 'https://i.pinimg.com/enabled_hi/564x/15/7f/14/157f1437d0da775fb6f478fb9c48160e.jpg'; // Replace with your background image URL

    return (
        <ImageBackground
            source={{ uri: backgroundUri }}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                {children}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Transparent overlay to make content more readable
    },
});

export default BackgroundWrapper;
