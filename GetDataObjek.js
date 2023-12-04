import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, StyleSheet, Button, Alert, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';

const Callapi = () => {
    const jsonUrl = 'https://script.google.com/macros/s/AKfycbzc4hoydsFi4q9IOJffCvOM0QSD8UhE9qiYPPk0hkrYyc-7vMlxyVzASkfkudT8ZAvOoA/exec';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
        , []);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
    return (
        <SafeAreaView>
            {isLoading ? (
                <View>
                    <Text>Loading...</Text>
                </View>
            ) : (
                <View>
                    <FlatList
                        data={dataUser}
                        onRefresh={() => { refreshPage() }}
                        refreshing={refresh}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View>
                                <View style={styles.card}>
                                    <View style={styles.avatar}>
                                        <FontAwesome5 name={item.icon} size={50} color='#1D5D9B' />
                                    </View>
                                    <View>
                                        <Text style={styles.cardtitle}>{item.nama}</Text>
                                        <Text style={styles.text}>{item.deskripsi}</Text>
                                        <Text style={styles.text}> <FontAwesome5 name={'star'} color='#F8DE22' size={15} />
                                            {item.rating}
                                        </Text>
                                        <Text style={{ color: '#000000' }}>{item.latitude}, {item.longitude}
                                        </Text>
                                    </View>
                                    {/* <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'flex-end',
                                        }}>
                                        <FontAwesome5 name={'chevron-right'} size={20}/>
                                    </View> */}


                                </View>
                                {/* <View style={styles.form}>
                                    <Button
                                        title="Gallery"
                                        onPress={() => navigation.push('GetData')}
                                    />
                                </View> */}

                            </View>
                        )}
                    />
                </View>
            )}
        </SafeAreaView>

    );

}

export default Callapi

const styles = StyleSheet.create({
    title: {
        paddingVertical: 12,
        backgroundColor: '#333',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    avatar: {
        borderRadius: 100,
        width: 80,
        marginTop: 18
    },
    cardtitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 20,
        marginVertical: 7,
    },
    form: {
        paddingHorizontal: 50,
        marginBottom: 20,
    },
    text: {
        flexWrap: 'wrap',
        fontSize: 14,
        width: 250,
        color: '#000000',
    },
    foto: {

    }


})