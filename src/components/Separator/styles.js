import {StyleSheet} from "react-native";
import {widthToDp,WIDTH} from "./../../constants/deviceDimensons"
const styles=StyleSheet.create({
    container:{
        width:WIDTH,
        borderWidth: widthToDp(0.2)
    }
})
export default styles