import { useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";
import DetailModal from "./components/DetailModal";

function App() {
  const dispatch = useDispatch();
  const [showMapView, setShowMapView] = useState(true);

  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState(null);

  useEffect(() => {
    
      dispatch(getFlights());
    
    
  }, []);

  //modalı açar
  const openModal = (id) => {
    //detayı gösterecek ucagın id sini state aktarma
    setDetailId(id);
    //modalı aç
    setShowDetail(true);
  };
  return (
    <>
      <Header />
      <div className="view-buttons">
        <button
          className={showMapView ? "active" : " "}
          onClick={() => setShowMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={!showMapView ? "active" : " "}
          onClick={() => setShowMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>

      {showMapView ? (
        <MapView openModal={openModal} />
      ) : (
        <ListView openModal={openModal} />
      )}
    {/* modalı gösterme */}
    {showDetail && <DetailModal
    detailId={detailId}
     closeModal = {()=>setShowDetail(false)} />}


    </>
  );
}

export default App;
