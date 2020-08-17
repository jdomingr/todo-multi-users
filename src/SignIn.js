import React from 'react';

export const SignIn = () => {
    return (
        <form className="text-center">
            <div className="form-group">
                <input type="text" 
                    className="form-control"
                    placeholder="Full name" />
            </div>  
            <div className="form-group">
                <input type="email" 
                    className="form-control"
                    placeholder="example@gmail.com" />
            </div>  
            <div className="form-group">
                <input type="password"
                 className="form-control" />
            </div>  
          <button type="submit" className="btn btn-primary m-3">Sign In</button>
        </form>
    )
}
