import React, { useEffect, useState } from 'react';

function FetchAPI() {

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(jsondata => {
                // console.log(jsondata);
                setApiData(jsondata);
                setLoading(false);
            })
        }, 3000)
    }, [])


    return (
        <div>
            {loading ?
                <h1>Loading...</h1>
                :
                <div>
                    {apiData.map((userData, i) =>
                        <div key={i} style={{ border: '5px solid black', margin: '10px' }}>
                            <h2><b>Name: {userData.name}</b></h2>
                            <h2><b>Email: {userData.email}</b></h2>
                            <h2><b>Website: <a href={'http://www.' + userData.website}>{userData.website}</a></b></h2>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default FetchAPI;