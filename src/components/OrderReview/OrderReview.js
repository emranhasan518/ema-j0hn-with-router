import React from 'react';
import useProducts from '../../Hooks/UseProduct';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const history =useHistory();

    const handldeRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key)
    }

        const handlePlaceOrder=()=>{
            history.push('/placeorder');
            setCart([]);
            clearTheCart();
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
            <Cart cart={cart}>
               <button className="btn-regular" onClick={handlePlaceOrder}>Place order</button>
            </Cart>
            </div>           
        </div>
    );
};

export default OrderReview;