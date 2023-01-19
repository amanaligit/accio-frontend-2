import React, {useState, useEffect} from 'react';


function Infinite(){

    const numberOfNewPhotos = 20;

    const [pageData, setPageData] = useState([]);

    // useEffect(() => {
    function addMorePhotos(){
        console.log('loading')
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => {
            
            const prevDataLength = pageData.length;
            const newDataLength = prevDataLength + numberOfNewPhotos;
            console.log(numberOfNewPhotos, prevDataLength);
            if(newDataLength < 5000){
                const newPageData = data.slice(0, newDataLength);
                setPageData(newPageData);
                console.log(newPageData.length)
            }
        })
    }
    // }, [])


    function runOnScroll(){
        // at the end of scoll, window.scrollY+window.innerHeight === document.documentElement.scrollHeight
        if(document.documentElement.scrollHeight - (window.scrollY+window.innerHeight) < 100){
            // now load more photos:
            console.log('user reached the end')
            addMorePhotos();
        }
            
        // console.log(document.documentElement.scrollHeight, window.scrollY, window.innerHeight);

    }

    useEffect(() => {
        addMorePhotos();
        window.addEventListener('scroll', runOnScroll)

    }, [])

    return (
        <div>
            <h1 className='display-1 m-5'>Pagination Example</h1>



            <div className='container'>
                {
                    pageData.map((data, i) =>
                        <div key={i} className='card m-5' style={{width: '400px'}} >
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
