import React, { useState } from 'react'

export const Login = () => {

    const [ dataLogIn, setDataLogin ] = useState({ email: '', password: ''});

    const handleOnChange = ( { target }) => {
       setDataLogin({ ...dataLogIn, [target.name]: target.value})
    }
    return (
        <form className="text-center">
            <div className="form-group">
                <input type="email" 
                    className="form-control"
                    placeholder="example@gmail.com"
                    name="email"
                    onChange={ handleOnChange }
                    value={ dataLogIn.email } />
            </div>  
            <div className="form-group">
                <input type="password"
                 className="form-control"
                 name="password"
                 onChange = { handleOnChange } 
                 value = { dataLogIn.password}/>
            </div>  
          <button type="submit" className="btn btn-primary m-3">Login</button>
        </form>
    )
}
