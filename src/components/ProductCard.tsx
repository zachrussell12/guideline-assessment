import React from 'react'

interface Props{
    name: string,
    desc: string,
    price: number,
    imageURL: string,
}

export default function ProductCard({name, desc, price, imageURL}: Props) {
    return (
        <div className='product-card-container'>
            <img src={imageURL} alt="Shampoo Bottle" />
            <div className='card-content'>
                <h3>{name}</h3>
                <p>{desc}</p>
                <h4>{price}</h4>
            </div>
        </div>
    )
}
