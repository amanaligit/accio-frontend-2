import React, { useState, useEffect } from 'react'
import GoogleMap from './googleMap';
import WeatherData from './weatherData';
import { Select } from 'antd';

function Weather() {
    const [searchResults, setSearchResults] = useState([]);
    const [currentCity, setCurrentCity] = useState(null);
    const [userCity, setUserCity] = useState(null);
    const [options, setDropOptions] = useState([]);

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const cityName = e.target.elements.place.value;
    //     console.log(cityName)
    //     fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=aff6f1194660ee7643d426b59c2f2742`)
    //         .then(data => data.json())
    //         .then(results => {
    //             console.log(results);
    //             setSearchResults(results);
    //         })
    // }


    useEffect(() => {
        const GeoLocation = navigator.geolocation;
        GeoLocation.getCurrentPosition((geoData) => {
            const userCity = { lat: geoData.coords.latitude, lon: geoData.coords.longitude };
            setUserCity(userCity)
        })

    }, [])

    const onSearch = (value) => {
        if (value) {
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=aff6f1194660ee7643d426b59c2f2742`)
                .then(data => data.json())
                .then(results => {
                    const newOptions = results.map((location, i) => ({ value: i, label: location.name + ',' + location.state + ',' + location.country }));
                    setSearchResults(results);
                    setDropOptions(newOptions);
                })
        }
    }

    const onChange = (value) => {
        setCurrentCity(searchResults[value])
    }

    return (
        <div className='container'>
            <h1 className='display-1 text-center'>Weather</h1>

            <Select dropdownMatchSelectWidth style={{ width: '100%', marginBottom: '20px' }}
                showSearch placeholder='Please select a city'
                optionFilterProp='children'
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                onSearch={onSearch}
                onChange={onChange}
                options={options}
            />


            {/* <form className='d-flex' onSubmit={handleSubmit}>
                <input name='place' placeholder='Enter City Name' className='form-control w-75' />
                <button className='btn btn-primary w-25'>Get Data</button>
            </form> */}

            {/* {searchResults.length ?
                <div className='my-4'>
                    <h1 className='display-4'>Search Results:</h1>
                    <ul className='list-group'>
                        {searchResults.map((city, i) => <li key={i} className='list-group-item'>
                            <button className='btn' onClick={() => setCurrentCity(city)}>{city.name}, {city.state}, {city.country}</button>
                        </li>)}
                    </ul>
                </div>
                : null
            } */}
            <div className='d-flex justify-content-center'>

                <GoogleMap currentCity={currentCity} userCity={userCity} />
                <WeatherData currentCity={currentCity || userCity} />
            </div>
        </div>

    )
}

export default Weather;