import React from 'react';
import useProducts from '../../Hooks/UseProduct';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handldeRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem 
                        product={product}
                        key={product.key}
                        handldeRemove={handldeRemove}
                        ></ReviewItem>)
                }
            </div> 
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>           
        </div>
    );
};

export default OrderReview;