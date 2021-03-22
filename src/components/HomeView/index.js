import React from 'react';
import { View, Text } from 'react-native';
import styles from "./styles"
const HomeView = ({ city, temp }) => {
    var tem = Math.round(temp)
    return (
        <View style={{alignItems:'center'}}>
            <Text style={[styles.text,{fontSize:40}]}>{tem}°C</Text>
            <Text style={styles.text}>{city}</Text>
        </View>
    )
}
export default HomeView