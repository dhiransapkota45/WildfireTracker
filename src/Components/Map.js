import { useState } from "react";
import GoogleMapReact from "google-map-react";
import Locationmarker from "./Locationmarker";
import LocationInfo from "./LocationInfo";

const Map = ({data, center, zoom}) => {
   const [locationInfo, setLocationInfo] = useState()
    console.log(data);
  return (
    <div style={{ height: "100vh", width: "100%", position:"relative" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
          {
             data.map((ev)=>{
                if(ev.categories[0].id===8){
                    console.log(ev.title);
                    return <Locationmarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={()=>setLocationInfo({title : ev.title})}/>
                }
                return null
            })
          }
          {
              locationInfo && <LocationInfo locationInfo={locationInfo}/>
          }
    </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 1,
};

export default Map;
