import * as Location from "expo-location";
import { useState, useEffect } from "react";

const useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const result = await Location.requestPermissionsAsync();
      if (!result.granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log("error is - ", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;