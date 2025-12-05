
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

    const bgImages = {
    "01d": "bg-[url(/public/images/onday/brokencloudsnigth.jpg)]",

    "01n": "bg-[url(/public/images/atnigth/brokenclouds.jpg)]",

    "02d": "bg-[url(/public/images/onday/Untitledimage.png)]",

    "02n": "bg-[url(/public/images/onday/clearskynigth.jpg)]",

    "03d": "bg-[url(/public/images/onday/Untitledimage.png)]",

    "03n": "bg-[url(/public/images/atnigth/clearskynigth.jpg)]",

    "04d": "bg-[url(/public/images/onday/clearsky.jpg)]",

    "04n": "bg-[url(/public/images/atnigth/clearskynigth.jpg)]",

    "09d": "bg-[url(/public/images/onday/Untitledimage.png)]",

    "09n": "bg-[url(/public/images/atnigth/clearskynigth.jpg)]",

    "10d": "bg-[url(/public/images/onday/Untitledimage.png)]",

    "10n": "bg-[url(/public/images/atnigth/clearskynigth.jpg)]",

    "11d": "bg-[url(/public/images/onday/Untitledimage.png)]",

    "11n": "bg-[url(/public/images/atnigth/clearskynigth.jpg)]",

    "12d": "bg-[url(/public/images/onday/Untitledimage.png)]",

    "12n": "bg-[url(/public/images/atnigth/clearskynigth.jpg)]",
    };


    return (
    <main
        className={`flex justify-center items-center h-screen  bg-black text-white bg-cover rounded-xl 
    ${bgImages[weather?.weather[0].icon]} `}>
        {
            weather ?  <WeatherDetail weather={weather}/> : <span>Cargando...</span>
        }
    </main>
)
}

export default App
