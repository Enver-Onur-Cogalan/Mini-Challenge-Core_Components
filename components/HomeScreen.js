import { View, Button, Alert, ImageBackground } from 'react-native';
import React from 'react';
import HelloText from './HelloText';
import { styles } from './global';

const HomeScreen = () => {
    const showAlert = () => {
        Alert.alert('Hello World');
    };

    return (
        <ImageBackground
            source={{
                uri: 'https://images.unsplash.com/photo-1517817748498-6e9c0c6ffb8e?auto=format&fit=crop&w=800&q=60',
            }}
            style={styles.background}
            imageStyle={{ opacity: 0.3 }}
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