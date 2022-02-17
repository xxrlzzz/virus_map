import "./App.css";
import {
  Map,
  CustomOverlay,
  InfoWindow,
  ScaleControl,
  ZoomControl,
} from "react-bmapgl";
import LocData from "./virus-loc.json";

function CustomMarker({ desc }) {
  return (
    <div className="CustomMark">
      <span className="CustomMarkText" title={desc}>
        中风险
      </span>
    </div>
  );
}

const center = [120.756455, 31.276098];
function App() {
  // console.log(LocData);
  return (
    <div className="App">
      <Map
        style={{ width: "100%", height: "100%" }}
        center={{ lng: center[0], lat: center[1] }}
        zoom="14"
        maxZoom="17"
        minZoom="12"
      >
        {LocData.map((data, idx) => {
          const [lng, lat] = data.loc;
          return (
            <CustomOverlay position={{ lng, lat }}>
              <CustomMarker desc={data.desc} />
            </CustomOverlay>
          );
        })}

        {LocData.map((data, idx) => {
          const [lng, lat] = data.loc;
          const { desc } = data;
          return (
            <InfoWindow
              key={desc}
              position={{ lng, lat }}
              text={desc}
              title="12"
            />
          );
        })}
        <InfoWindow
          position={{ lng: center[0], lat: center[1] }}
          text="文荟人才公寓"
        />
        <ScaleControl />
        <ZoomControl />
      </Map>
    </div>
  );
}

export default App;
