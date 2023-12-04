import React, { useState, useEffect } from "react";
import { View, Text, Image, StatusBar, TextInput } from "react-native";

const TextInputPassword = (props) => {
    return (
        <View>
            <View style={{flexDirection: 'column', marginTop: 0}}>
                {/* <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#FFFFF',
                        width: 5,
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15,
                        elevation: 5,
                    }}>
                    <Fontawesome5 nama="envelope" size={5} color='#00000' />
                </View> */}
                <TextInput 
                    value={props.state}
                    style={{
                        backgroundColor: '#FFFFFF', 
                        marginHorizontal: 20,
                        borderRadius: 10,
                        width: 350,
                        marginTop: 15,
                        elevation: 2,
                        paddingLeft: 20
                    }}
                    placeholder={props.placeholder}
                    onChangeText={text => props.set(text)}
                    secureTextEntry={props.isPassword}
                />
                {/* <TextInput 
                    value={password}
                    style={{
                        backgroundColor: '#FFFFFF', 
                        marginHorizontal: 20,
                        borderRadius: 10,
                        width: 350,
                        marginTop: 15,
                        elevation: 10,
                    }} 
                    placeholder="Masukkan Password"
                    onChangeText={text => props.setPassword(text)}
                /> */}
            </View>
        </View>
    )
}

export default TextInputPassword;