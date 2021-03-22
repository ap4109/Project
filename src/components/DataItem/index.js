import React from 'react';
import { View, Text } from 'react-native';
import Separator from "../Separator/index"
import styles from "./style"
export default DataItem = ({ item }) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var date = new Date(item.dt * 1000)
    var day = days[date.getDay()]
    var temp = Math.round(item.temp.max)
    return (
        <View >
            <Separator />
            <View style={styles.container}>
                <Text style={styles.text}>{day}</Text>
                <Text style={styles.text}>{temp}°C</Text>
            </View>
        </View>
    );

}



