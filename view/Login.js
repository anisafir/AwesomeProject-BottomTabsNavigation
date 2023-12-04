import React, {useState, useEffect} from "react";
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, Button } from "react-native";
import TextInputEmail from "./view/TextInputEmail";
import TextInputPassword from "./view/TextInputPassword";
import LoginButton from "./view/LoginButton";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={{flex: 1, backgroundColor: '#DDF2FD'}}>
            <StatusBar backgroundColor={'#DDF2FD'} barStyle='light-content' />
            <View 
                style={{
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    marginTop: 100
                }}>
                <Image
                    source={require('../Peta/tempatwisata.png')}
                    style={{
                        width: 150, 
                        height: 150,
                    }}
                />
                <Text 
                    style={{
                        fontSize: 30, 
                        fontWeight: 'bold', 
                        marginTop: 10}}>
                    KARIMUN
                    <Text 
                        style={{
                            color: '#427D9D'
                        }}>
                    YUKS
                    </Text>
                </Text>
                <Text 
                    style={{
                        marginTop: 10, 
                        fontWeight: 'bold', 
                        fontSize: 20, 
                        color: '#000000'
                    }}>
                        Login
                </Text>
            </View>

            <TextInputEmail 
                state={email} 
                set={setEmail}
                placeholder="Masukkan Email"   
                isPassword={false}
            />

            <TextInputPassword 
                state={password} 
                set={setPassword} 
                placeholder="Masukkan Password"
                isPassword={true}
            />

            {/* <Button title="Login" onPress={() => navigation.navigate ('Petalokasiobjek')}/> */}
           <LoginButton text="Login" color='#1640D6'>
                    onPress={() => navigation.navigate ('Petalokasiobjek')}
                {/* <Button> onPress={Petalokasiobjek} </Button> */}
           </LoginButton>

            <View style={{marginHorizontal: 20, flexDirection: 'row', marginTop: 10}}>
                <TouchableOpacity style={{flex: 1}}>
                    <Text style={{fontWeight: 'bold'}}>SignUp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Text style={{fontWeight: 'bold'}}>Forgot Password</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default Login;