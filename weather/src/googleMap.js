import React, { useState } from 'react'
import { Radio } from 'antd';

function GoogleMap({ currentCity, userCity }) {

    const [mapType, setMapType] = useState('place');


    const options = [
        { label: 'Destination View', value: 'place' },
        { label: 'Destination Directions', value: 'directions' },
    ];

    const onChange = ({ target: { value } }) => {
        setMapType(value);
    }

    if (currentCity && userCity) {
        const address = `${currentCity.lat},${currentCity.lon}`;
        const userAddress = `${userCity.lat},${userCity.lon}`;

        return (
            <div className='w-100'>
                <h1 className='display-6 text-center'>Destination Map</h1>
                <Radio.Group name="radiogroup" options={options} value={mapType} onChange={onChange} />
                <div className='d-flex justify-content-center p-2'>
                    {mapType === 'place' ?
                        <div className='d-flex justify-content-center'>
                            <iframe
                                title='Street View'
                                style={{ border: 0, margin: '20px', width: '100%', height: '500px' }}
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDZOj-BNc1O3rbkEqY8Hm2jnDTIGewiyLg&q=${address}&maptype=satellite`}
                                allowFullScreen>
                            </iframe>
                        </div>
                        :
                        <iframe
                            title='Street View'
                            style={{ border: 0, margin: '20px', width: '100%', height: '500px' }}
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDZOj-BNc1O3rbkEqY8Hm2jnDTIGewiyLg&origin=${userAddress}&destination=${address}`}
                            allowFullScreen>
                        </iframe>
                    }
                </div>
            </div>

        )
    }
    else {
        return null;
    }
}

export default GoogleMap;