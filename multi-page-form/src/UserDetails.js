import React from "react";

function UserDetails({setFormData, setPageNo, formData}){

    function handleSubmit(e){
        e.preventDefault()
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        
        if(password !== confirmPassword){
            alert('password and confirm password do not match!')
        }
        else{
            setFormData(oldData => ({...oldData, username, email, password, confirmPassword}))
            setPageNo(1);
        }
        
    }

    return (
        <div id='user-details' className="container">
            <h1 className="display-6 text-center">Account Details</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className="form-label" htmlFor='username'>Username</label>
                    <input className="form-control" id='username' defaultValue={formData.username} />
                </div>
                <div className='mb-3'>
                    <label className="form-label" htmlFor='email' >Email</label>
                    <input className="form-control" id='email' type='email' defaultValue={formData.email} />
                </div>
                <div className='mb-3'>
                    <label className="form-label"  htmlFor='password'>Password</label>
                    <input className="form-control" id='password' type='password' defaultValue={formData.password} />
                </div>
                <div className='mb-3'>
                    <label className="form-label" htmlFor='confirmPassword'>Confirm password</label>
                    <input className="form-control" id='confirmPassword' type='password' defaultValue={formData.confirmPassword} />
                </div>
                <button type='submit' className="btn btn-primary">Next</button>
            </form>
        </div>
    )
}

export default UserDetails;