import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { Image, StyleSheet, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import GetDataObjek from '../GetDataObjek'
import { Table } from 'react-native-table-component';
import Video from 'react-native-video'

const Tab = createBottomTabNavigator();

//form input dari github pages
const forminput = 'https://anisafir.github.io/pgpbl-acara-xii-karimunyuks/';

// Peta web dari github pages
const webmapp = 'https://anisafir.github.io/pgpbl-acara-xii-karimunyuks/map.html';


function HomeScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: '#DDF2FD' }}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 90
                }}>
                <Image
                    source={require('../Peta/tempatwisata.png')}
                    style={{
                        width: 200,
                        height: 200,
                    }}
                />
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginTop: 10
                    }}>
                    KARIMUN
                    <Text
                        style={{
                            color: '#427D9D'
                        }}>
                        YUKS
                    </Text>
                </Text>

                <Text style={{ fontWeight: 'bold', marginTop: 15, color: '#000000', textAlign: 'center', marginLeft: 10, marginRight: 10}}>
                    Karimun Yuks merupakan aplikasi yang berisikan daftar lokasi objek wisata di Pulau Karimun Jawa. 
                    Aplikasi Karimun Yuks dapat membantu wisatawan untuk mengetahui lokasi-lokasi wisata yang ada di Pulau Karimun Jawa.
                </Text>

                <Table
                    borderStyle={{ borderWidth: 2, borderColor: '#000000' }}
                    style={styles.tables}
                >
                    <Text style={{ fontSize: 15, color: '#000000', fontWeight: 'bold' }}>
                        List:
                    </Text>
                    <Text style={{ color: '#000000', marginRight: 10 }}>1. React Native</Text>
                    <Text style={{ color: '#000000', marginRight: 50 }}>2. HTML</Text>
                    <Text style={{ color: '#000000', marginRight: 29 }}>3. LeafletJS</Text>
                    <Text style={{ color: '#000000', marginLeft: 3 }}>4. Google Sheets</Text>
                    <Text style={{ color: '#000000', marginRight: 23 }}>5. App Script</Text>
                    <Text style={{ color: '#000000', marginLeft: 10 }}>6. FontAwesome5</Text>
                    <Text style={{ color: '#000000', marginRight: 45 }}>7. GitHub</Text>

                </Table>
            </View>
        </View>
    );
}
function MapScreen() {
    return (
        <WebView
            source={{ uri: webmapp }}
        />
    );
}

function AddDataScreen() {
    return (
        <WebView
            source={{ uri: forminput }}
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

function DataScreen() {
    return (
        <View>
            <GetDataObjek>

            </GetDataObjek>
        </View>
    );
}
function GaleriScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: '#DDF2FD' }}>
        <View>
            <Text style={{ fontWeight: 'bold', marginTop: 15, color: '#000000', textAlign: 'center', marginLeft: 10, marginRight: 10, fontSize: 18 }}>
                Galeri Foto Objek Wisata di Pulau Karimun Jawa
            </Text>
            <ScrollView>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/AlunAlun.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Alun-Alun Kota Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/camping.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Camping Ground Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/alano.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Alano Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/Annora.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Annora Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/Lawang.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Batu Lawang Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/pbatuputih.png')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Batu Putih Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/PantaiBatuTopeng.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Batu Topeng Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/PBobby.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Bobby Kota Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/Hadirin.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Hadirin Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/Kanjen.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Kanjen Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/Karina.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Karina Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/LagonLele.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Lagon Lele Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/Laendra.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Laendra Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/nirwana.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Nirwana Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/nyamplung.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Nyamplungan Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/Pancuran.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Pancuran Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/Pengantin.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Pengantin Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/Pokemon.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Pokemon Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/sunset.png')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Sunset Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/tanjunggelam.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Tanjung Gelam Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/Ujung.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Ujung Gantungan Pulau Mejangan Besar</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/Penangkaran.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Penangkaran Hiu Karimunjawa Pulau Mejangan Besar</Text>
                </View>
                <View style={styles.listitems}>
                    <Image source={require('../Karimun/Point.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Point View Pulau Karimun Jawa</Text>
                </View>
                <View style={styles.listitems}>
                    {/* <Image source={require('../Karimun/tanjunggelam.jpg')} style={styles.image} />
                    <Text style={styles.caption}>Foto Pantai Tanjung Gelam Pulau Karimun Jawa</Text> */}
                </View>
                <View style={styles.listitems}>
                    {/* <Video
                    source={{ uri: 'https://youtu.be/HZVuxztLDwI?si=tnHFKph6CNQP_0GS' }}
                    style={styles.video}
                    controls={true}
                    resizeMode="cover"
                    />
                    <Text style={styles.caption}>Foto Pantai Tanjung Gelam Pulau Karimun Jawa</Text> */}
                </View>
                
            </ScrollView>
        </View>
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
                <Tab.Screen name="Add Data" component={AddDataScreen} options={{
                    tabBarLabel: 'Add Data',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="plus-circle" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="List Lokasi" component={DataScreen} options={{
                    tabBarLabel: 'List Lokasi',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="list-ul" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Galeri" component={GaleriScreen} options={{
                    tabBarLabel: 'Galeri',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="image" color={color} size={size} />
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
        marginTop: 100,
        color: '#000000'
    },
    container: {
        marginTop: 20,
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: '#EEF5FF',
    },
    tables: {
        alignItems: 'center',
        height: 180,
        width: 300,
        backgroundColor: '#9EB8D9',
        marginTop: 20,
        padding: 10
    },
    list: {
        color: '#000000',
        textAlign: 'left'
    },
    video: {
        width: '100%',
        height: 300,
      },
});