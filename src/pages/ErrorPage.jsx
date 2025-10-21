import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div>
            <h1>Oops! An Error Occured..</h1>
            {error && <p>{error.statusText || error.message}</p>}
            <NavLink to="/">
                <button>
                    Go Home
                </button>
            </NavLink>
        </div>
    )
}

export default ErrorPage;
