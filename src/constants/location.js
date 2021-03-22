import { useState, useEffect } from "react";
import Geolocation from '@react-native-community/geolocation';
export default function Location(lat, long) {
  const [latLong, setLatLong] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLatLong([position.coords.latitude, position.coords.longitude]);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return latLong;
}