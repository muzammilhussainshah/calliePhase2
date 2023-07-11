// @app
import React from 'react';
import { Text, TouchableOpacity, } from 'react-native';

const Button = ({ customStyle, titleStyle, title, callBack }) => {
    return (
        <TouchableOpacity
            style={customStyle}
            activeOpacity={0.8}
            onPress={callBack}
        >
            <Text style={titleStyle}>{title}</Text>
        </TouchableOpacity>
    );
};
export default Button;
