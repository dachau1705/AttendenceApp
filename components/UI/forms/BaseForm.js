// components/forms/BaseForm.js

import React from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';

const BaseForm = ({ onSubmit, children }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.form}>
                {children}  {/* Render child components (inputs, etc.) */}
                <Button title="Submit" onPress={onSubmit} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    form: {
        width: '100%',
    },
});

export default BaseForm;
