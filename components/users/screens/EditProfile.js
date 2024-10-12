// EditProfile.js
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../../../redux/actions';

const EditProfile = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { username, age, position, code, dob } = route.params;

    const [newUsername, setNewUsername] = useState(username);
    const [newAge, setNewAge] = useState(age);
    const [newPosition, setNewPosition] = useState(position);
    const [newCode, setNewCode] = useState(code);
    const [newDob, setNewDob] = useState(dob);

    const handleSaveProfile = () => {
        dispatch(updateUserProfile({ username: newUsername, age: newAge, position: newPosition, code: newCode, dob: newDob }));
        navigation.goBack(); // Navigate back after saving
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Username"
                value={newUsername}
                onChangeText={setNewUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Age"
                value={String(newAge)}
                onChangeText={text => setNewAge(Number(text))}
                style={styles.input}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Employee Code"
                value={newCode}
                onChangeText={setNewCode}
                style={styles.input}
            />
            <TextInput
                placeholder="Job Position"
                value={newPosition}
                onChangeText={setNewPosition}
                style={styles.input}
            />
            <TextInput
                placeholder="Date of Birth"
                value={newDob}
                onChangeText={setNewDob}
                style={styles.input}
            />
            <Button title="Save" onPress={handleSaveProfile} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
});

export default EditProfile;
