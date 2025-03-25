import { View, Button, Alert, ImageBackground } from 'react-native';
import React from 'react';
import HelloText from './HelloText';
import { styles } from './global';

const HomeScreen = () => {
    const showAlert = () => {
        Alert.alert('Hello World');
    };

    return (
        // We wrap the background image with ImageBackground
        <ImageBackground
            source={require('../assets/background.png')} // Local image used
            style={styles.background} // Style for full screen overlay
            imageStyle={{ opacity: 0.3 }} // To make the image dim
        >
            <View style={styles.container}>
                <HelloText />
                <View style={{ marginTop: 20 }}>
                    <Button title='Press Me!' onPress={showAlert} />
                </View>
            </View>
        </ImageBackground>
    );
};

export default HomeScreen;