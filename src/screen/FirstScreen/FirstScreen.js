import React, { Component } from 'react';
import { View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { connect } from 'react-redux'
import { sendLocation, sendData } from "../../redux/actions/actions"
import Indicator from "../../components/Indicator/index"
import DataList from "../../components/DataList/index"
import HomeView from "../../components/HomeView/index"
import { HEIGHT} from "../../constants/deviceDimensons"
class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lng: "",
    };
  }
  componentDidMount() {
   this.fetching()
  }
fetching=()=>{
  !this.props.isLoading
  Geolocation.getCurrentPosition((res) => {
    this.setState({
      lat: res.coords.latitude,
      lng: res.coords.longitude
    }, () => {
      this.props.sendLocation({ ...this.state })
      this.props.sendData({ ...this.state })
    }
    )
  }).catch(err => {
    console.log(err)
  })
}
  render() {
    if (!this.props.detail || !this.props.lat) {
      return <Indicator />
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: HEIGHT / 2, alignItems: 'center', justifyContent: 'center' }}>
          <HomeView
            city={this.props.lat.name}
            temp={this.props.lat.main.temp}
          />
        </View>

        <DataList
          data={this.props.detail}
        />
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendLocation: (request, callBack) => dispatch(sendLocation(request, callBack)),
    sendData: (request, callBack) => dispatch(sendData(request, callBack))
  }
};
const mapStateToProps = (state) => {
  return {
    isLoading: state.WeatherState.isLoading,
    detail: state.WeatherState.detail,
    lat: state.WeatherState.lat,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen)