import React, { useState, useEffect } from 'react'
import countryList from "./countryList";
import { Select } from 'antd';
import { DatePicker } from 'antd';


function PersonalDetails( {setPageNo, setFormData, formData} ) {
    const defaultOptions = countryList.map((ctr, i) => ({ label: ctr, value: i }));
    const [options, setOptions] = useState(defaultOptions);
    const [userCountry, setCountry] = useState("");
    const [usrDob, setDob] = useState('');

    const onChange = (value) => {
        setCountry(value);
    }



    const onSearch = (value) => {
        // const newOptions = defaultOptions.filter(o => o.value.includes(value));
        // setOptions(newOptions);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const address = e.target.address.value;
        const country = countryList[userCountry];
        const dob = usrDob.toString();
        // console.log(firstName, lastName, address, country, dob)
        setFormData(oldData => ({...oldData, firstName, lastName, address, country, dob}));
        setPageNo(2);
    }

    return (
        <div id='personal-details' className="container">
            <h1 className="display-6 text-center">Personal Details</h1>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" className="form-control" id='firstName' placeholder="First name" defaultValue={formData.firstName} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" id='lastName' placeholder="Last name" defaultValue={formData.lastName} />
                    </div>

                </div>
                
                <div>
                    <DatePicker style={{ width: '100%', marginBottom: '20px' }} placeholder='Select Date of Birth' onChange={(val) => setDob(val)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='address' className='form-label'>Address:</label>
                    <input className='form-control' id='address' defaultValue={formData.address} />
                </div>
                <Select dropdownMatchSelectWidth style={{ width: '100%', marginBottom: '20px' }}
                    showSearch placeholder='Please select a country'
                    optionFilterProp='children'
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    onChange={onChange}
                    onSearch={onSearch}
                    options={options}
                    id='country'
                />
                
                <button type='button' onClick={() => setPageNo(0)} className="btn btn-danger mx-2">Previous</button>
                <button type='submit' className="btn btn-primary">Next</button>
            </form>
        </div>
    )
}

export default PersonalDetails;