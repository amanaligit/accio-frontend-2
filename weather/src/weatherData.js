import React, { useState, useEffect } from 'react'

function WeatherData({currentCity}) {

    // const [lat, setLat] = useState("");
    // const [lon, setLon] = useState("");

    const [weatherData, setWeatherData] = useState(null);

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=aff6f1194660ee7643d426b59c2f2742`)
    //         .then(data => data.json())
    //         .then(weatherData => {
    //             console.log(weatherData);
    //             setWeatherData(weatherData);
    //         })
    // }

    useEffect(() => {
        if(currentCity)
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${currentCity.lat}&lon=${currentCity.lon}&appid=aff6f1194660ee7643d426b59c2f2742`)
            .then(data => data.json())
            .then(weatherData => {
                console.log(weatherData);
                setWeatherData(weatherData);
            })
    }, [currentCity])

    return (

        <div >
            {/* <form onSubmit={handleSubmit}>
                <input className='form-control mb-3' placeholder='Enter Latitude' value={lat} onChange={(e) => setLat(e.target.value)} />
                <input className='form-control mb-3' placeholder='Enter Longitude' value={lon} onChange={(e) => setLon(e.target.value)} />
                <button className='btn btn-primary w-100'>Submit</button>
            </form> */}
            {weatherData&&currentCity ?
                <>
                <h1 className='display-4 text-center'>Weather Data</h1>
                    <div className='card my-5'>
                        <img alt='weather description img' className='card-img-top' src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} style={{width:'100px', margin:'auto'}}/>
                        <div className='card-body'>
                            <h3 className='text-center card-title'>{weatherData.name}</h3>
                            <h5 className='text-center card-title'>{weatherData.weather[0].description}</h5>

                        </div>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>Temp: {Math.floor(weatherData.main.temp - 273)}&deg;C</li>
                            <li className='list-group-item'>Max Temp: {Math.floor(weatherData.main.temp_max - 273)}&deg;C</li>
                            <li className='list-group-item'>Min Temp: {Math.floor(weatherData.main.temp_min - 273)}&deg;C</li>
                        </ul>
                    </div>
                </>
                :
                null
            }
        </div>
    )

}

export default WeatherData