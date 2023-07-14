// @app
import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, View } from 'react-native';

const Loader = ({ color }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: "center", flex: 1, }}>
            <ActivityIndicator size="large" color={color && color} />
        </View>
    );
};
export default Loader;
