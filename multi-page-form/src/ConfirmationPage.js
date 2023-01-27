import React from "react";
import { Descriptions } from 'antd';

function ConfirmationPage({ formData, setPageNo }) {
    return (
        <div className="container">
            <h1 className="display-6 text-center">Confirmation Page</h1>
            <Descriptions title="User Info">
                {
                    Object.keys(formData).map((key) => <Descriptions.Item label={key} key={key}>{formData[key]}</Descriptions.Item>)
                }
            </Descriptions>
            <button type='button' onClick={() => setPageNo(1)} className="btn btn-danger mx-2">Previous</button>
            <button className="btn btn-success" onClick={() => setPageNo(3)}>Confirm</button>
        </div>
    )
}

export default ConfirmationPage;