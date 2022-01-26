import React from 'react';
import {GiWildfires} from "react-icons/gi"


function Locationmarker({lat, lng, onClick}) {
  return <div className='locationmarker' onClick={onClick}>
        
         <GiWildfires style={{color:"#FFCC33", fontSize:"25px"}} lat={lat} lng={lng}/>
  </div>;
}

export default Locationmarker;
