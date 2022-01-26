import React from 'react';

function LocationInfo({ locationInfo }) {
    console.log(locationInfo);
    return <div style={{ position: "absolute", left: "50px", top: "0px", color: "white", background: "rgba(0, 0, 0, 0.6)", padding: "8px", borderRadius: "8px" }}>
        <h3>{locationInfo.title}</h3>
    </div>;
}

export default LocationInfo;
