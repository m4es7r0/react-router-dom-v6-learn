import { Link, useMatch } from "react-router-dom";
import React from 'react'

export const CustomLink = ({ children, to, ...props }) => {

    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link 
            to={to}
            style={{
                color: match ? '#00eeff' : '#fff'
            }}
            {...props}>
                {children}
        </Link>
    )
}