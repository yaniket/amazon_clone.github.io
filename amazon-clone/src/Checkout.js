import React from 'react';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className ="checkout_left">
      <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/GW2021/T1a/T1b/Jan-ART_DesktopHero_unrec_1x_shop-now._CB661923095_.jpg" alt="" />

      {basket?.length === 0 ? (
        <div>
          <h2> Your Shopping basket is empty</h2>
        </div>
      ) : (
          <div>
            <h2 className ="checkout_title"> Your Shopping basket </h2>
            {basket.map(item => (
              <CheckoutProduct
              id = {item.id} 
              title = {item.title}
              image ={item.image}
              price = {item.price}
              rating = {item.rating}
              />
            ))}
            
          </div>
        )}
        </div>
        {basket.length > 0 && (
          <div className ="checkout_right">
            <Subtotal/>
          </div>

        )}
    </div>
  )
}

export default Checkout
