// WeatherSearch.jsx
import axios from "axios";
import { useState } from "react";

// Recibe la función onSearch como prop
const WeatherSearch = ({ onSearch }) => { 
    // Ya no necesitamos los estados 'citys' o 'error' aquí, 
    // solo manejaremos el input y la API.

    const handleSubmit = (e) => {
        e.preventDefault();
        const citysName = e.target.citysName.value.toLowerCase().trim();

        if (!citysName) return; 

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${citysName}&appid=b1a7b49098225ce6586991c2a55dce5f&lang=sp&units=metric`)
            .then(({ data }) => {
                //  En lugar de setCitys, llamamos a la función onSearch de App.jsx
                onSearch(data); // Pasamos los datos del clima a App.jsx
                e.target.citysName.value = ''; // Limpiar el input
            })
            .catch((err) => {
                console.log(err);
                alert("Ciudad no encontrada");
            });
    };

    return (
        <form
            className=" bg-white/30 p-1 rounded-xl text-black text-center flex"
            onSubmit={handleSubmit}
        >
            <input 
                className=" bg-white/90 p-2 rounded-xl text-black flex-grow"
                type="text"
                name="citysName"
                placeholder={" Nombre de la Ciud... "}
                autoComplete="off"
            />
            <button 
                type="submit"
                className="p-2 ml-2 bg-blue-600 text-white rounded-xl"
            >
                Buscar
            </button>
        </form>
    );
};

export default WeatherSearch;