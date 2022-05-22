import React, { useState } from 'react'

const Register = () => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //  Function for checking for duplicate email register

    const checkDuplicateEMail = (email) => {
        let data = JSON.parse(localStorage.getItem('users'));
        let count = 0

        if (data == null) {
            return false
        }
        else {
            for (let i = 0; i < data.length; i++) {
                if (data[i].email == email) {
                    count++;
                    break;
                }
            }
            console.log(count > 0 ? true : false)
            return count > 0 ? true : false
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userInfo = {
            username,
            email,
            password,
        }

        if (checkDuplicateEMail(email)) {
            return alert("Email Already Regsiter")
        }

        let user = new Array();

        let data = JSON.parse(localStorage.getItem('users'))
        if (data && data.length > 0) {
            data.push(userInfo)
            localStorage.setItem('users', JSON.stringify(data))
        }
        else {
            user.push(userInfo)
            localStorage.setItem('users', JSON.stringify(user));
        }
    }
    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Register