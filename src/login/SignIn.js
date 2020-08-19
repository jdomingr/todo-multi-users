import React from 'react';
import { useForm } from '../hooks/useForm';

export const SignIn = () => {

    const [ data, handleInputChange ] = useForm({ name: '', email: '', password: ''});

    return (
        <form className="text-center">
            <div className="form-group">
                <input type="text" 
                    className="form-control"
                    placeholder="Full name"
                    onChange={handleInputChange}
                    name="name"
                    value={data.name} />
            </div>  
            <div className="form-group">
                <input type="email" 
                    className="form-control"
                    placeholder="example@gmail.com"
                    onChange={handleInputChange} 
                    name="email"
                    value={data.email}/>
            </div>  
            <div className="form-group">
                <input type="password"
                 className="form-control"
                 onChange={handleInputChange}
                 name="password"
                 value={data.password} />
            </div>  
          <button type="submit" className="btn btn-primary m-3">Sign In</button>
        </form>
    )
}
