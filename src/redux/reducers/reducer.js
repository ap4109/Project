import {Weather} from "../actions/actions"
const defaultState={
    isLoading:false,
    detail:[],
    lat:'',
    
}
WeatherState= (state=defaultState,action)=>{
    switch(action.type){
        case Weather.isLoading:
            return{
                ...state,
                isLoading:action.data
            }
            case Weather.onSuccess:
                return {
                  ...state,
                  detail:action.data
            }
            case Weather.onLocation:
                return {
                  ...state,
                  lat:action.data    
        }
        
            default:return state;
    }
}
export default WeatherState