import { MapContainer, Marker, TileLayer, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import L from "leaflet";

const MapView = ({openModal}) => {
 const state = useSelector((store) => store)
 
 const icon = L.icon({
  iconUrl:"/Plane-png.png",
  iconSize: [25,25],
  iconanchor: [16,16],
}) 
 return (
    <MapContainer center={[38.505, 35.37]} 
    zoom={8} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {state.flights.map((fly) => (
      <Marker
      icon={icon}
      key = {fly.id} position={[fly.lat, fly.lng]}>
        <Popup>
        <div className="popup">
          <span>Kod:{fly.code} </span>
          <button onClick={() => openModal( fly.id)}>Detay</button>
        </div>
         </Popup>
      </Marker>) )}
      <Polyline positions= {state.route} />
    </MapContainer>
  );
};

export default MapView;
