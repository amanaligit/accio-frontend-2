import React, { useState, useEffect } from 'react';


function Infinite() {

    const numberOfNewPhotos = 5;

    const [pageData, setPageData] = useState([]);
    const [dataLength, setDataLenght] = useState(0);


    function addMorePhotos() {
        setDataLenght(d => d + numberOfNewPhotos)
    }

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => {
                const newPageData = data.slice(0, dataLength);
                setPageData(newPageData);
                window.addEventListener('scroll', runOnScroll);
            })
    }, [dataLength])



    function runOnScroll() {
        if (document.documentElement.scrollHeight - (window.scrollY + window.innerHeight) < 1000) {
            // now load more photos:
            window.removeEventListener('scroll', runOnScroll);
            console.log('user reached the end')
            addMorePhotos();
        }
    }

    useEffect(() => {
        addMorePhotos();
        window.addEventListener('scroll', runOnScroll)
        return () => window.removeEventListener('scroll', runOnScroll);;
    }, [])

    return (
        <div>
            <h1 className='display-1 m-5'>Pagination Example</h1>
            <div className='container'>
                {
                    pageData.map((data, i) =>
                        <div key={i} className='card m-5' style={{ width: '400px' }} >
                            <img src={data.url} alt='album data' className='card-img-top' />
                            <div className='card-body'>
                                <p className='card-text display-6'>{data.title}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )


}

export default Infinite;
