import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Nav() {
    return (
        <div className="navigation">
            <Link className="links" to="/items">
                <p>Items</p>
            </Link>
            <Link className="links" to="/purchases">
                <p>Purchases</p>
            </Link>
        </div>
    )
}

export default Nav
