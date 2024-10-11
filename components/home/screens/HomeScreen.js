import { Ionicons } from '@expo/vector-icons';
import React, { useLayoutEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Menu from './Menu';

const HomeScreen = ({ navigation, route }) => {
    const { username } = route.params || { username: 'Aliosa' };
    const avatarUri = 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/431794025_1608410533322248_3666548364355920027_n.jpg?stp=cp6_dst-jpg_s160x160&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=1ZoHfiTRPhcQ7kNvgHrytrI&_nc_ht=scontent.fhan2-5.fna&_nc_gid=A62KJzu7vLGj_EOsM5l5V4k&oh=00_AYDMluF5_-4aLfN7NpPv1NLm_BF8EZvSLTw2gnX0moe1fg&oe=670F6114';

    const [menuVisible, setMenuVisible] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
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
        navigation.navigate('UserProfile', { username }); // Navigate to UserProfile and pass username
        setMenuVisible(false); // Close the menu
    };

    const handleSignIn = async () => {
        // Implement your sign-in logic here

        if (username === 'haudd1705' && password === '123456') {
            // Navigate to Home if sign-in is successful
            navigation.navigate('Home', { username });
        } else {
            Alert.alert('Error', 'Please enter both username and password.');
        }
    };


    const handleSignOut = () => {
        console.log('Sign Out Pressed');
        setMenuVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Attendance App</Text>
            <Button
                title="Check In"
                onPress={() => navigation.navigate('CheckIn')}
            />
            <Button
                title="Check Out"
                onPress={() => navigation.navigate('CheckOut')}
            />
            <Menu
                visible={menuVisible}
                onClose={() => setMenuVisible(false)}
                onViewProfile={handleViewProfile}
                onSignIn={handleSignIn}
                onSignOut={handleSignOut}
            />
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 15,
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
    },
    menuButton: {
        padding: 5,
    },
});

export default HomeScreen;
