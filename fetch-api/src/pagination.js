import React, { useState, useEffect } from 'react';

function Pagination() {

    const [pageData, setPageData] = useState([]);
    const [pageNo, setPageNo] = useState(0);

    const pageLength = 10;
    // const totalPages = 5000/pageLength;

    // hw => 
    // 1. make this pageNoArray as a variable'
    // 2. implement the ... functionality
    const pageNoArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                console.log(pageNo)
                const newPageData = data.slice(pageNo * pageLength, pageLength * (pageNo + 1));
                console.log(newPageData)
                setPageData(newPageData);

            })
    }, [pageNo])


    return (
        <div>
            <h1 className='display-1 m-5'>Pagination Example</h1>



            <ul className='pagination'>
                <div className='mx-auto d-flex'>
                    <li className={'page-item ' + (pageNo === 0 ? 'disabled' : '')} >
                        <button className='page-link' onClick={() => setPageNo(p => p - 1)}> <span>&laquo;</span> </button>
                    </li>
                    {
                        pageNoArray.map((i) =>
                            <li className={'page-item ' + (pageNo === i ? 'active' : '')} key={i} >
                                <button className='page-link' onClick={() => setPageNo(i)}>
                                    {i + 1}
                                </button>
                            </li>
                        )
                    }
                    <li className={'page-item ' + (pageNo === 9 ? 'disabled' : '')}>
                        <button className='page-link' onClick={() => setPageNo(p => p + 1)}> <span>&raquo;</span> </button>
                    </li>
                </div>
            </ul >



            <div className='container'>
                {
                    pageData.map((data, i) =>
                        <div key={i} className='card m-5' >
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

export default Pagination;