import React, {useState, useEffect} from "react";
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity } from "react-native";

const LoginButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: props.color,
                width: 350,
                paddingVertical: 10,
                marginTop: 20,
                marginHorizontal: 20,
                borderRadius: 10,
                elevation: 2
            }}>
            <Text
                style={{
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 17
                }}>
                    {props.text}
            </Text>
        </TouchableOpacity>
    )
}

export default LoginButton;