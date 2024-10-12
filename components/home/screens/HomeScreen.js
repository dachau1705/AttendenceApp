import { Ionicons } from '@expo/vector-icons';
import React, { useLayoutEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Menu from './Menu';

const HomeScreen = ({ navigation, route }) => {
    const { username } = route.params || { username: 'Aliosa' };
    const avatarUri = 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/431794025_1608410533322248_3666548364355920027_n.jpg?stp=cp6_dst-jpg_s160x160&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=1ZoHfiTRPhcQ7kNvgHrytrI&_nc_ht=scontent.fhan2-5.fna&_nc_gid=A62KJzu7vLGj_EOsM5l5V4k&oh=00_AYDMluF5_-4aLfN7NpPv1NLm_BF8EZvSLTw2gnX0moe1fg&oe=670F6114';
    const backgroundUri = 'https://i.pinimg.com/enabled_hi/564x/15/7f/14/157f1437d0da775fb6f478fb9c48160e.jpg'; // Replace with your background image URL

    const [menuVisible, setMenuVisible] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => null, // Remove the back button
            headerTitle: () => (
                <View style={styles.header}>
                    <View style={styles.leftHeader}>
                        <Image
                            source={{ uri: avatarUri }}
                            style={styles.avatar}
                        />
                        <Text style={styles.greeting}>Hi {username}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => setMenuVisible(true)}
                        style={styles.menuButton}
                    >
                        <Ionicons name="menu" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            ),
            headerStyle: {
                backgroundColor: '#4CAF50',
            },
        });
    }, [navigation, username]);

    const handleViewProfile = () => {
        navigation.navigate('UserProfile', { username });
        setMenuVisible(false);
    };

    const handleSignOut = () => {
        console.log('Sign Out Pressed');
        setMenuVisible(false);
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: backgroundUri }} // Background image source
                style={styles.background} // Apply full-screen background style
                resizeMode="cover" // Cover the entire screen
            >
                <Text style={styles.title}>Attendance App</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('CheckIn')}
                    >
                        <Ionicons name="checkmark-done-circle" size={40} color="#4CAF50" />
                        <Text style={styles.buttonText}>Timekeeping</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('AttendanceSheetScreen')}
                    >
                        <Ionicons name="document-text" size={40} color="#4CAF50" />
                        <Text style={styles.buttonText}>View work board</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('CreateRequest')}
                    >
                        <Ionicons name="create" size={40} color="#4CAF50" />
                        <Text style={styles.buttonText}>Create slip</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('ViewRequests')}
                    >
                        <Ionicons name="folder-open" size={40} color="#4CAF50" />
                        <Text style={styles.buttonText}>Slips created</Text>
                    </TouchableOpacity>
                </View>

                <Menu
                    visible={menuVisible}
                    onClose={() => setMenuVisible(false)}
                    onViewProfile={handleViewProfile}
                    onSignOut={handleSignOut}
                />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background for content
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 10,
        marginBottom: 10,
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    greeting: {
        fontSize: 18,
        color: '#fff',
    },
    menuButton: {
        padding: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        padding: 10,
        width: 150,
        height: 150,
        backgroundColor: '#E8F5E9',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
    },
});

export default HomeScreen;
