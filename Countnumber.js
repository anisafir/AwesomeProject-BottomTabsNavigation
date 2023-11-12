import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const Countnumber = () => {
    const [number, setNumber] = useState(1)

    return (
        <View>
            <Text style={styles.text}>{number}</Text>
            <View>
                <Button style={styles.button} title="Tambah" onPress={() => setNumber(number + 1)} />
            </View>
            <View>
                <Button title="Reset" onPress={() => setNumber(1)} color="red"/>
            </View>
        </View>

    )
}

export default Countnumber

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
      },
      button: {
        margin: 10,
      },
      text: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 40,
      }     
})