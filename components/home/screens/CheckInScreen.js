import { Camera, CameraType } from 'expo-camera/legacy';
import * as MediaLibrary from 'expo-media-library'; // Import MediaLibrary
import { useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library

const CheckInScreen = () => {
    const [type, setType] = useState(CameraType.front);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const cameraRef = useRef(null); // Create a ref to access the Camera

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="Grant Permission" />
            </View>
        );
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            const asset = await MediaLibrary.createAssetAsync(photo.uri); // Save to media library
            Alert.alert("Photo Captured!", `Photo saved to library: ${asset.uri}`);
        }
    };

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={cameraRef}>
                <TouchableOpacity style={styles.iconButton} onPress={toggleCameraType}>
                    <Icon name="camera-reverse" size={20} color="white" />
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                        <Icon name="camera" size={36} color="black" />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
        justifyContent: 'center', // Add this line for spacing
    },
    iconButton: {
        position: 'absolute',
        top: 15,
        left: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for visibility
        borderRadius: 20, // Optional: rounded corners
        padding: 5, // Add padding for better touch area
    },
    captureButton: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        margin: 10,
        width: 70, // Set a fixed width
        height: 70, // Set a fixed height
        borderRadius: 35, // Half of width/height for a circular shape
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background for visibility
        justifyContent: 'center', // Center the text vertically
        alignItems: 'center', // Center the text horizontally
    },
});

export default CheckInScreen;
