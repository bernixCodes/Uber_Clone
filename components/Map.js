import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVybmljZW1hcHMiLCJhIjoiY2w5dmx1MXRhMDZiNjNwbnNrenJ0aHJxMSJ9.O5qKYQ60zYh_Ppqtzi71cg";

const Map = ({ pickupCoordinate, dropoffCoordinate }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-0.1945831, 5.6513286],
      zoom: 5,
    });
    if (pickupCoordinate) {
      addToMap(map, pickupCoordinate);
    }
    if (dropoffCoordinate) {
      addToMap(map, dropoffCoordinate);
    }
    if (pickupCoordinate && dropoffCoordinate) {
      map.fitBounds([pickupCoordinate, dropoffCoordinate], {
        padding: 60,
      });
    }
  }, [pickupCoordinate, dropoffCoordinate]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return (
    <div id="map" className="bg-blue-200 flex-1">
      Map
    </div>
  );
};

export default Map;
