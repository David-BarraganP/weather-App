import React, { useState } from 'react'



const WeatherDetail = ({weather}) => {

const [isCelsius, setIsCelsius] = useState(true);

// Cambia entre Celsius y Fahrenheit
const handleTemperature = () => {
    setIsCelsius(isCelsius ? false : true); 
};

const celsiusToFahrenheit = (templeCelsius) => {
    const tempF = (templeCelsius * (9 / 5) + 32).toFixed(1);
    return tempF;
};

return (
    <article className='text-center grid gap-4'>
        <h1 className='bg-white/30 p-1 rounded-xl  text-black '>{weather.name}, {weather.sys.country}</h1>
        <div className='text-black grid gap-4'>
        {/* seccion 1: temperatura, descripcion y imagen */}
                <section className='bg-white/60 p-2 rounded-xl grid grid-cols-2 items-center'>
            <h3 className='col-span-2'>{weather.weather[0].description}</h3>
            <span className='text-3xl'>{weather.main.temp},{}</span>
            <div>
                <img className='block mx-auto'
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}  />
            </div>
        </section>
        {/* seccion 2: detalles adicionales. */}
        <section className='grid grid-cols-3 justify-items-center bg-white/60 p-2 rounded-xl'>
            <div className='flex gap-1'>
                <div>
                    <img src="/wind.svg"/>
                </div>
                <span>
                    {weather.wind.speed},m/t
                </span>
            </div>
            <div className='flex gap-1'>
                <div>
                    <img src="/raindrops.svg"/>
                </div>
                <span>
                    {weather.main.humidity}%
                </span>
            </div>
            <div className='flex gap-1'>
                <div>
                    <img src="/arrow.svg" />
                </div>
                <span>
                    {weather.main.pressure}hPa
                </span>
            </div>
        </section>
        </div>

            <div className=" grid gap-2 ">
{isCelsius ? (
    // -- Muestra °C cuando isCelsius es TRUE
<div className=" bg-white/30 p-1 text-2xl rounded-xl text-black grid justify-center items-center">
{weather.main.temp} °C 
</div>
) : (
    // -- Muestra °F cuando isCelsius es FALSE
<div className=" bg-white/30 p-1 text-2xl rounded-xl text-black grid justify-center items-center">
{celsiusToFahrenheit(weather.main.temp)} °F 
</div>
)}
        <button
        className=" bg-white/30 p-1 rounded-xl  text-black "
        onClick={handleTemperature}>
        Cambiar ° a
        </button>
    </div>


    </article>
    
)
}

export default WeatherDetail