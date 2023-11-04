import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { Image, StyleSheet, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

const Tab = createBottomTabNavigator();

const webmap = require('../Peta/map.html')

function HomeScreen() {
    return (
        <ScrollView>
            <Text style={styles.title}>My Maps</Text>
            <View style={styles.listitems}>
                <Image source={require('../Peta/SubDAS.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Sub DAS Mesuji</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../Peta/KemiringanLereng.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Kemiringan Lereng DAS Mesuji</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../Peta/Sungai&DAS1.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Sungai dan DAS Mesuji</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../Peta/SubDAS.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Sub DAS Mesuji</Text>
            </View>
        </ScrollView>
    );
}
function MapScreen() {
    return (
        <WebView
            source={ webmap }
        />
    );
}

function ProfileScreen() {
    return (
        <View>
            <Portofolio />
        </View>
    );
}

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="home" color={color} size={size} />
                    ),
                }}

                />
                <Tab.Screen name="Maps" component={MapScreen} options={{
                    tabBarLabel: 'Maps',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="map-marked-alt" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="user" color={color} size={size} />
                    ),
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
    },

    listitems: {
        padding: 20,
        alignItems: 'center',
    },
    caption: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    }
});