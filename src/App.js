import {useState, useEffect} from 'react';
import Map from './Components/Map';

const App = () => {
  const [data, setData] = useState([])
  const [loadding, setLoading] = useState(false)

  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true)
      const rawData = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
      const fetched_data = await rawData.json()
      setData(fetched_data.events)
      setLoading(false)
    }

    fetchData()
  }, [])
  return <div>
    
    {
      loadding ? <h2>Loading</h2> : <Map data = {data}/>
    }
    
  </div>;
};

export default App;
