import React from 'react'
import { Login } from './Login';
import { SignIn } from './SignIn';
export const InitialPage = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">TODOS</h1>
            <hr />
            <div className="row">
                <div className="col-6">
                    <Login />
                </div>
                <div className="col-6">
                    <SignIn />
                </div>
            </div>
            
        </div>
    )
}
