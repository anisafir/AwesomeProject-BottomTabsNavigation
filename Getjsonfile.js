import React from 'react'; // melalui extention ES7
import mahasiswa from './data/mahasiswa.json';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Getjsonfile = () => {
    return (
        <FlatList
            data={mahasiswa} // untuk memanggil data yang telah dibuat
            renderItem={({ item }) => (
                <View style={ styles.card }>
                    <View style={ styles.avatar }>
                        <FontAwesome5 name={item.icon} size={50} color={item.color} />
                    </View>
                    <View>
                        <Text style={ styles.cardtitle }>Nama: {item.nama}</Text>
                        <Text>NIM: {item.nim}</Text>
                        <Text>Kelas: {item.kelas}</Text>
                        <Text>Jenis Kelamin: {item.jeniskelamin}</Text>
                    </View>
                </View>
            )}
        />
    )
}

export default Getjsonfile
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
      width: 80, //mengatur jarak icon dengan informasi
    },
    cardtitle: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    card: {
      flexDirection: 'row', //untuk mengatur tampilan list menjadi sebuah kolom dengan informasi berada di sebelah kanan
      padding: 20, //mengatur jarak di dalam row
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
      marginVertical: 7 //mengatur jarak di luar row
    },
   })
   
   
