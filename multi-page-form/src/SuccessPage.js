import React from "react";
import {CheckOutlined} from '@ant-design/icons'

function SuccessPage({ formData, setPageNo }) {
    return (
        <div className="container">
            <h1 className="display-1 text-center">Form submitted successfully</h1>
            <CheckOutlined style={{width: '100%', fontSize:'200px', color: 'green'}}/>
        </div>
    )
}

export default SuccessPage;