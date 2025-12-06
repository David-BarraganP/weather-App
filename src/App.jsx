import React, { useState, useEffect } from "react";
import axios from "axios";
// Importamos  componentes
import WeatherSearch from './components/WeatherSearch'; 
import WeatherDetail from './components/WeatherDetail'; 

//  API Key
const API_KEY = 'b1a7b49098225ce6586991c2a55dce5f'; 

function App() {
  // Estado para el clima que se está mostrando (puede ser actual o buscado)
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- 1. FUNCIÓN DE GEOLOCALIZACIÓN (Tu código original) ---
  const success = (pos) => {
    const { latitude, longitude } = pos.coords;
    
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=sp&units=metric`)
      .then(({ data }) => {
        // Almacenar el clima actual al inicio
        setCurrentWeather(data); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener el clima actual:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  // --- 2. FUNCIÓN PARA MANEJAR LA BÚSQUEDA ---
  // Esta función se pasa al componente WeatherSearch
  const handleSearch = (weatherData) => {
    // Cuando el usuario busca una ciudad, actualizamos el clima mostrado
    setCurrentWeather(weatherData); 
  };

  const bgImages = {
  "04d": "bg-[url(/images/onday/brokenclouds.jpg)]",
    "04n": "bg-[url(/images/atnigth/clearskynigth.jpg)]",
  }
  
  return (
    <main className={`flex justify-center items-center h-screen bg-black text-white bg-blue-700  rounded-xl bg-cover 
      bg-[url(/images/atnigth/clearskynigth.jpg)]
    `}>

      <div className="w-full max-w-sm bg-blue-300 p-6 rounded-3xl shadow-xl bg-[url(/images/atnigth/brokencloudsnigth.jpg)]">
      <div className="w-full max-w-sm bg-blue-0 p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
              Barragan weather
        </h1>
        
        {/* 3. Renderizar el Buscador y pasarle la función de manejo */}
        <WeatherSearch onSearch={handleSearch} />
        
        <hr className="my-4 border-white/50" />
        
        {/* 4. Renderizar el Detalle del Clima (ya sea actual o buscado) */}
        {loading && <p className="text-center">Cargando ubicación actual...</p>}
        
        {currentWeather && (
          // Usamos el componente que ya tenías para mostrar el clima
          <WeatherDetail weather={currentWeather} />
        )}
        
        {!loading && !currentWeather && (
          <p className="text-center">No se pudo obtener la ubicación. Por favor, busca una ciudad.</p>
        )}
      </div>
      </div>
    </main>
  );
}

export default App;