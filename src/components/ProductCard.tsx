import React, { useState } from 'react'

interface Props{
    name: string,
    desc: string,
    price: number,
    imageURL: string,
}

export default function ProductCard({name, desc, price, imageURL}: Props) {

    const[showDetails, setShowDetails] = useState(false);

    return (
        <>
        <div className='product-card-container'>
            <img src={imageURL} alt="Shampoo Bottle" />
            <div className='card-content'>
                <div className='title-container'>
                    <h3>{name}</h3>
                    <h4>${price}</h4>
                </div>
                <p>{desc}</p>
                <div className='button-container'>
                    <button onClick={() => setShowDetails(true)}>View More</button>
                    <button onClick={() => {console.log("Added to cart!")}}>Add to Cart</button>
                </div>
            </div>
        </div>
        
        {showDetails &&
            <div className='details-container'>
                <div className='blur'/>
                <div className='details-content'>
                    <p>Show your more details here.</p>
                    <button onClick={() => setShowDetails(false)}>Close</button>
                </div>
            </div>
        }

        </>
    )
}
