import Map from "../components/Map";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  const [pickupCoordinate, setPickupCoordinate] = useState("");
  const [dropoffCoordinate, setDropoffCoordinate] = useState("");

  const getPickupCoordinate = () => {
    // const pickup = "Berekum";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?access_token=pk.eyJ1IjoiYmVybmljZW1hcHMiLCJhIjoiY2w5dmx1MXRhMDZiNjNwbnNrenJ0aHJxMSJ9.O5qKYQ60zYh_Ppqtzi71cg&limit=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setPickupCoordinate(data.features[0].center);
      });
  };
  const getDropoffCoordinate = () => {
    // const dropoff = "Koforidua";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?access_token=pk.eyJ1IjoiYmVybmljZW1hcHMiLCJhIjoiY2w5dmx1MXRhMDZiNjNwbnNrenJ0aHJxMSJ9.O5qKYQ60zYh_Ppqtzi71cg&limit=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setDropoffCoordinate(data.features[0].center);
      });
  };
  useEffect(() => {
    getPickupCoordinate();
    getDropoffCoordinate();
  }, []);
  return (
    <div className="h-screen flex flex-col">
      <Map
        pickupCoordinate={pickupCoordinate}
        dropoffCoordinate={dropoffCoordinate}
      />
      <div className="flex-1">hiii</div>
    </div>
  );
};

export default Confirm;
