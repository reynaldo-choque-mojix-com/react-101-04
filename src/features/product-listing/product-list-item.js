import React from 'react';
import './products.css'

export default function ProductListItem(props) {
    const thisItemInCart = props.cart.filter(
        item => item.id === props.product.id
    );
    return (
        <div className='product-list-item'>
            <h3> {props.product.name} </h3>
            <img 
                height={150}
                width={150}
                title={ props.product.name}
                src={`/products/${props.product.image}`}
                alt="desc"
            />
            <div> {props.product.description} </div>
            <div> ${props.product.price}</div>
            <div>
                <button
                    onClick={ () => props.addToCart(props.product) }
                >Add to cart ({
                    ( thisItemInCart && thisItemInCart.quantity) || 0
                })
                </button>
            </div>
        </div>
    );
}