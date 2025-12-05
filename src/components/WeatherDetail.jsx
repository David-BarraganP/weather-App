import React from 'react'

const WeatherDetail = ({weather}) => {

    const celsiusToFahrenheit = (temCelsius) => {

        const temF = (temCelsius * (9/5) + 32).toFixed(1)
        return temF

    }

return (
    <article className='text-center grid gap-4'>
        <h1>{weather.name}, {weather.sys.country}</h1>
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
        <button>
            combiar  F°
        </button>
    </article>
    
)
}

export default WeatherDetail