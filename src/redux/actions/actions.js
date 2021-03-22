

// import Axios from "axios"
// import { BASE_URL } from "../../constants/Api"


// export const Weather = {
//     isLoading: 'isLoading/Weather',
//     onSuccess: 'onSucces/Weather',
//     onListing: 'onListing/Weather'


// }

// export const isLoading = (data) => ({
//     type: Weather.isLoading,
//     data
// })

// export const onSuccess = (data) => ({
//     type: Weather.onSuccess,
//     data
// })
// export const onListing = (data) => ({
//     type: Weather.onListing,
//     data
// })
// export function sendData(request) {
//     return (dispatch, getState) => {

//         dispatch(isLoading(true));

//         Axios.get(BASE_URL + `&lat=${request.lat}&lon=${request.lng}&appid=${request.appid}&units=metric`).then((res) => {
//             // res.data.list.map((value,index)=>{
//             //     console.log(res.data.list[index])
//             // })
//             // for (var i = 0; i < res.data.list.length; i += 8) {
//             //     dispatch(onListing(res.data.list[i]))
//             // }
//             dispatch(onSuccess(res.data))
//             dispatch(isLoading(false))
//         }).catch(err => {
//             alert(err)
//             dispatch(isLoading(false))
//         })
//     }

// }
import Axios from "axios"
import { BASE_URL, BASE_URL1 } from "../../constants/Api"
import Geolocation from '@react-native-community/geolocation';
import { App_Key } from "../../constants/key"

export const Weather = {
    isLoading: 'isLoading/Weather',
    onSuccess: 'onSucces/Weather',
    onLocation: 'onLocation/Weather'
}
export const isLoading = (data) => ({
    type: Weather.isLoading,
    data
})
export const onSuccess = (data) => ({
    type: Weather.onSuccess,
    data
})
export const onLocation = (data) => ({
    type: Weather.onLocation,
    data
})
export function sendLocation(request, callBack) {
    return (dispatch, getState) => {

        dispatch(isLoading(true));
        Axios.get(BASE_URL1 + `lat=${request.lat}&lon=${request.lng}&appid=${App_Key}&units=metric`).then((res) => {
            console.log(res.data)
            dispatch(onLocation(res.data))
            dispatch(isLoading(false))
        }).catch(err => {
            alert(err)
            dispatch(isLoading(false))
        })
    }

}



export function sendData(request, callBack) {
    return (dispatch, getState) => {

        dispatch(isLoading(true));
        Axios.get(BASE_URL + `lat=${request.lat}&lon=${request.lng}&appid=${App_Key}&units=metric`).then((res) => {
            var data = (res.data.daily).slice(1, -2)
            dispatch(onSuccess(data))
            dispatch(isLoading(false))
        }).catch(err => {
            alert(err)
            dispatch(isLoading(false))
        })
    }

}
