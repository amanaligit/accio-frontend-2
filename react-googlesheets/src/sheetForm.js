import React, { useState } from 'react'
import axios from 'axios'

function SheetForm({getSheetData}) {
    const defaultFormData = { name: '', age: '', salary: '', hobby: '' }
    const [formData, setFormData] = useState(defaultFormData)

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://sheet.best/api/sheets/6b2a806f-2325-444f-ae9e-79d454aff023', formData)
        .then(res => {
            alert('data successfully stored in the database')
            getSheetData();
            setFormData(defaultFormData);
        })

    }

    return (
        <div className='w-50' style={{float: 'left', padding:'20px'}}>
            <h2 className='display-6'>Enter Details</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='name'>name</label>
                    <input type='text' id='name' className='form-control' value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='age'>age</label>
                    <input type='text' id='age' className='form-control' value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='salary'>salary</label>
                    <input type='text' id='salary' className='form-control' value={formData.salary}
                        onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='hobby'>hobby</label>
                    <input type='text' id='hobby' className='form-control' value={formData.hobby}
                        onChange={(e) => setFormData({ ...formData, hobby: e.target.value })}
                    />
                </div>
                <button type='submit' className='btn btn-primary w-100'>Submit</button>
            </form>
        </div>
    )
}

export default SheetForm;