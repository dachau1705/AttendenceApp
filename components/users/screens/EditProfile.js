// EditProfile.js
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../../../redux/actions';
import BaseForm from '../../UI/forms/BaseForm';

const EditProfile = ({ navigation }) => {
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState('');
    const [age, setAge] = React.useState('');
    const [position, setPosition] = React.useState('');
    const [code, setCode] = React.useState('');
    const [dob, setDob] = React.useState('');

    const handleSave = () => {
        const profileData = {
            username,
            age: parseInt(age),
            position,
            code,
            dob,
        };
        dispatch(updateUserProfile(profileData));
        navigation.goBack();
    };

    return (
        <BaseForm onSubmit={handleSave}>
            <View>
                <Text>Username</Text>
                <TextInput
                    placeholder="Username"
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                />
                <Text>Age</Text>
                <TextInput
                    placeholder="Age"
                    style={styles.input}
                    value={age}
                    keyboardType="numeric"
                    onChangeText={setAge}
                />
                <Text>Position</Text>
                <TextInput
                    placeholder="Position"
                    style={styles.input}
                    value={position}
                    onChangeText={setPosition}
                />
                <Text>Employee Code</Text>
                <TextInput
                    placeholder="Employee Code"
                    style={styles.input}
                    value={code}
                    onChangeText={setCode}
                />
                <Text>Date of Birth</Text>
                <TextInput
                    placeholder="Date of Birth"
                    style={styles.input}
                    value={dob}
                    onChangeText={setDob}
                />
            </View>
        </BaseForm>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
});

export default EditProfile;
