import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './global';
const HelloText = () => {
    return (
        <View>
            <Text style={[{ marginBottom: 10 }, { fontSize: 30 }]}>
                I <Text style={styles.bold}>LOVE</Text> React Native!
            </Text>
        </View>
    );
};

export default HelloText;