import React from 'react'

function SheetData({ sheetData }) {
    return (
        <div style={{ padding: '20px' }}>

            <table className='table w-50 float-left' style={{ float: 'left', padding: '20px' }}>
                <thead className='bg-primary text-light'>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Hobby</th>
                    </tr>
                </thead>
                <tbody className='bg-light border-0'>
                    {sheetData.map((record, i) =>
                        <tr key={i} style={{ height: '10px' }}>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td>{record.salary}</td>
                            <td>{record.hobby}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )


}

export default SheetData;