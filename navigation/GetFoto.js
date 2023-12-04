import React from 'react'
import { View, StatusBar, Table, Image, StyleSheet, Text, ScrollView } from 'react-native';

const GetFoto = () => {
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
                        <Image source={require('../Karimun/tanjunggelam.jpg')} style={styles.image} />
                        <Text style={styles.caption}>Foto Pantai Tanjung Gelam Pulau Karimun Jawa</Text>
                    </View>
                    <View style={styles.listitems}>
                        <Image source={require('../Karimun/tanjunggelam.jpg')} style={styles.image} />
                        <Text style={styles.caption}>Foto Pantai Tanjung Gelam Pulau Karimun Jawa</Text>
                    </View>
                    
                </ScrollView>
            </View>
        </View>
    );
};

export default GetFoto;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
    },

    listitems: {
        padding: 20,
        alignItems: 'center'
    },
    caption: {
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#000000'
    },
});