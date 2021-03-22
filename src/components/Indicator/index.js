import React, { Component } from 'react';
import { View} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from "./styles"

export default class Indicator extends Component {


    render() {
        return (
            <View style={styles.container}>
                <LottieView source={require("../../constants/loaderFile.json")} autoPlay loop/>
            </View>
        );
    }
}
