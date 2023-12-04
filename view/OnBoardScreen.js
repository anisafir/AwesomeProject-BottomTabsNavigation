// Installasi dependensi jika belum terinstal
// npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/viewpager

// Import library dan komponen yang dibutuhkan
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';


const OnBoardScreen = () => {
    const navigation = useNavigation();
  
    const navigateLogin = () => {
      navigation.navigate('Login')
    }

  const pages = [
    {
      title: 'Selamat Datang!',
      description: 'Ini adalah layar onboarding pertama.',
      image: require('../Karimun/Pokemon.jpg'),
    },
    {
      title: 'Fitur Keren',
      description: 'Jelajahi fitur-fitur keren di aplikasi kami.',
      image: require('../Karimun/Ujung.jpg'),
    },
    {
      title: 'Mulai Sekarang',
      description: 'Siap untuk memulai? Tekan tombol mulai di bawah.',
      image: require('../Karimun/sunset.png'),
    },
  ];

  const handleStartPress = () => {
    // Navigasi ke layar berikutnya atau halaman utama aplikasi
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ViewPager style={styles.viewPager} initialPage={0}>
        {pages.map((page, index) => (
          <View key={index} style={styles.page}>
            <Image source={page.image} style={styles.image} />
            <Text style={styles.title}>{page.title}</Text>
            <Text style={styles.description}>{page.description}</Text>
          </View>
        ))}
      </ViewPager>
      <TouchableOpacity style={styles.startButton} onPress={handleStartPress}>
        <Text style={styles.startButtonText}>Mulai</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewPager: {
    flex: 1,
    width: '100%',
  },
  page: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white'
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'white'
  },
  startButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    margin: 20,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnBoardScreen;
