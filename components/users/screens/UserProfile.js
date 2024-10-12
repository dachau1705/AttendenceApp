// UserProfile.js
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

const UserProfile = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { username, age, position, code, dob } = { username: 'Aliosa', age: 25, position: 'TTS', code: 'TTS001', dob: '17/05/2002' };

    const handleEditProfile = () => {
        navigation.navigate('EditProfile', { username, age, position, code, dob });
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/431794025_1608410533322248_3666548364355920027_n.jpg?stp=cp6_dst-jpg_s160x160&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=1ZoHfiTRPhcQ7kNvgHrytrI&_nc_ht=scontent.fhan2-5.fna&_nc_gid=A62KJzu7vLGj_EOsM5l5V4k&oh=00_AYDMluF5_-4aLfN7NpPv1NLm_BF8EZvSLTw2gnX0moe1fg&oe=670F6114' }}
                    style={styles.avatar}
                />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{username}</Text>
                    <Text style={styles.age}>Age: {age}</Text>
                    <Text style={styles.age}>Employee Code: {code}</Text>
                    <Text style={styles.age}>Job Position: {position}</Text>
                    <Text style={styles.age}>Date Of Birth: {dob}</Text>
                </View>
            </View>
            <Button title="Edit Profile" onPress={handleEditProfile} />
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
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginRight: 20,
    },
    userInfo: {
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    age: {
        fontSize: 16,
        color: 'gray',
    },
});

export default UserProfile;
