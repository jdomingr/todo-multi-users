import React, { useState } from 'react'
import { useForm } from './hooks/useForm';

export const Login = () => {

    const [ data, handleInputChange ] = useForm({ email: '', password: ''});

    return (
        <form className="text-center">
            <div className="form-group">
                <input type="email" 
                    className="form-control"
                    placeholder="example@gmail.com"
                    name="email"
                    onChange={ handleInputChange }
                    value={ data.email } />
            </div>  
            <div className="form-group">
                <input type="password"
                 className="form-control"
                 name="password"
                 onChange = { handleInputChange } 
                 value = { data.password}/>
            </div>  
          <button type="submit" className="btn btn-primary m-3">Login</button>
        </form>
    )
}
