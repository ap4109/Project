import { Dimensions, PixelRatio } from 'react-native'
// const { width, height } = Dimensions.get('window')
 const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const widthToDp = number => {
    let givenWidth = typeof number === "number" ? number : parseFloat(number)
    return PixelRatio.roundToNearestPixel((WIDTH * givenWidth) / 100)
}

const heightToDp = number => {
    let givenHeight = typeof number === "number" ? number : parseFloat(number)
    return PixelRatio.roundToNearestPixel((HEIGHT * givenHeight) / 100)
}



export { widthToDp, heightToDp,HEIGHT,WIDTH}