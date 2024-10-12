import { Camera } from 'expo-camera'; // Đảm bảo import từ 'expo-camera'
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

const CheckInScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    console.log(Camera);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync(); // Đúng cách gọi hàm yêu cầu quyền
            setHasPermission(status === 'granted');
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Camera access is required for check-in.');
            }
        })();
    }, []);

    const handleFaceDetected = ({ faces }) => {
        if (faces.length > 0) {
            Alert.alert('Face Detected', 'Check-in successful!');
        }
    };

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                type={Camera.Constants.Type.front} // Sử dụng đúng cách
                onFacesDetected={handleFaceDetected}
                ref={ref => setCameraRef(ref)}
                faceDetectorSettings={{
                    mode: Camera.Constants.FaceDetection.Mode.fast,
                    detectLandmarks: Camera.Constants.FaceDetection.Landmarks.all,
                    runClassifications: Camera.Constants.FaceDetection.Classifications.all,
                }}
            />
            <View style={styles.overlay}>
                <Text style={styles.title}>Check In</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default CheckInScreen;
