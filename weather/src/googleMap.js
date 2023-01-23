import React from 'react'

function GoogleMap({ currentCity, userCity }) {


    if (currentCity && userCity) {
        const address = `${currentCity.lat},${currentCity.lon}`;
        const userAddress = `${userCity.lat},${userCity.lon}`;
        return (
            // <div className='d-flex justify-content-center'>
            //     <iframe
            //         title='Street View'
            //         style={{ border: 0, margin: '20px', width: '100%', height: '500px' }}
            //         referrerPolicy="no-referrer-when-downgrade"
            //         src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDZOj-BNc1O3rbkEqY8Hm2jnDTIGewiyLg&q=${address}&maptype=satellite`}
            //         allowFullScreen>
            //     </iframe>
            // </div>
            <div className='d-flex justify-content-center'>
                <iframe
                    title='Street View'
                    style={{ border: 0, margin: '20px', width: '100%', height: '500px' }}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDZOj-BNc1O3rbkEqY8Hm2jnDTIGewiyLg&origin=${userAddress}&destination=${address}`}
                    allowFullScreen>
                </iframe>
            </div>
        )
    }
    else {
        return null;
    }
}

export default GoogleMap;