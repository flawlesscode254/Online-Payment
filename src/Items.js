import React, {useState, useRef, useEffect} from 'react'

import Nav from './Nav'
import Products from './Products'
import Paypal from "./Paypal"

function Items() {
    const [checkout, setCheckout] = useState(false)

    return (
        <div>
            <Nav />
            <div style={{
                width: "60%",
                margin: "auto",
                justifyContent: "space-around",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <Paypal />
                <Paypal />
                <Paypal />
                <Paypal />
                <Paypal />
            </div>
        </div>
    )
}

export default Items
