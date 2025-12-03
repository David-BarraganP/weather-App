
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherDetail from "./components/WeatherDetail";




function App() {
    //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    // b1a7b49098225ce6586991c2a55dce5f
    
    const [weather, setWeather] = useState(null)


    const success = (pos) => {

    const {coords: {latitude, longitude} } = pos
    axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b1a7b49098225ce6586991c2a55dce5f&lang=es&units=metric`
    )
    .then(({data}) => setWeather(data))
    .catch((err) => console.log(err));
    }

    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success)
    }, []);


    return (
    <main className="flex justify-center items-center h-screen bg-black text-white">
        {/* bg-[url(/assets/photo-montage-5144873_1280.jpg)] */}
        {
            weather ?  <WeatherDetail weather={weather}/> : <span>Cargando...</span>
        }
    </main>
)
}

export default App
