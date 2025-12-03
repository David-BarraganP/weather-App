import React from 'react'

const WeatherDetail = ({weather}) => {
    console.log(weather)
return (
    <article>
        <h1>{weather.name}, {weather.sys.country}</h1>
        <div className='text-black'>
        {/* seccion 1: temperatura, descripcion y imagen */}
                <section className='bg-white/60'>
            <h3>{weather.weather[0].description}</h3>
            <span>{weather.main.temp},{}</span>
            <div>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}  />
            </div>
        </section>
        {/* seccion 2: detalles adicionales. */}
        <section className='grid grid-cols-3 justify-items-center bg-white/60'>
            <div>
                <div>
                    <img src="/wind.svg"/>
                </div>
                <span>
                    {weather.wind.speed},m/t
                </span>
            </div>
            <div>
                <div>
                    <img src="/raindrops.svg"/>
                </div>
                <span>
                    {weather.main.humidity}%
                </span>
            </div>
            <div>
                <div>
                    <img src="/arrow.svg" />
                </div>
                <span>
                    {weather.main.pressure}hPa
                </span>
            </div>
        </section>
        </div>
        <button>
            combiar  F°
        </button>
    </article>
    
)
}

export default WeatherDetail