import React from "react";
import { useState } from "react";
import "./Cart.css";

import { useContext } from "react";
import { UserContext } from "./ProductContext";

const Cart = () => {
  const { product_Api, updateValueProduct_Api } = useContext(UserContext);
  const { imgButton, updateValueImgButton } = useContext(UserContext);
  const { Price, updateValuePrice } = useContext(UserContext);
  const { Quantity, updateValueQuantity } = useContext(UserContext);
  const {myArray,updateApi1 } = useContext(UserContext);

  updateValuePrice(Number(product_Api.price));


  let numarray=[];

  const [price, setprice] = useState(Number(Price));
  const [price000, setprice000] = useState([]);
  const [priceTotal, setpriceTotal] = useState(1);
  const [priceTotal00, setpriceTotal00] = useState([]);

  function changeNum (i,num,pr){

  numarray[i]=Number(num);

  setpriceTotal00(()=>{
    return numarray
  })

 
  setprice000(()=>{
    return numarray
  })

     let sum=0 ;
    price000.map(value => {
      sum += Number(value);
    });

      setpriceTotal(sum)
 
      
    
     let pricetotal = price000.map(value => {
        return Number(value) * Number(myArray[i].price)
      });
      
      setpriceTotal00(()=>{
        return pricetotal
      })


 let sumt=0 ;
 pricetotal.map(value => {
    sumt += Number(value);
  });

  setpriceTotal(sumt)



      console.log(priceTotal)

}



 function removeItem(i,name){
  console.log(name)
  updateApi1((prevData) => {
    const newData = prevData.filter(
      (data) => data.name !== name
    );
    return newData
  });

 }

  return (
    <>
      <div className="containerCart">
        <div className="CartSection1">
          <div className="s1MyCart">
            <p>My cart</p>
            <p style={{ color: "#96AC73", textAlign: "end" }}>
              continue shopping
            </p>
          </div>
          <hr />
          {


          myArray.map((e,i) => {
            numarray.push(1)
            return(      
          <div className="s1MyCartInfo">
            
            <div className="CartProductInfo">
              <img src={e.image} alt="" />
              <div className="CartProductInfoText">
                <p>{e.name}</p>
                <p>
                  $<span>{e.price}</span>
                </p>
                <p>Shades: Lily</p>
              </div>
            </div>

            <div className="productCartQuantityC">
              <div className="productCartQuantity">
         
                <input
                   
                  onChange={(ev) => changeNum(i,ev.target.value,e.price)}
                  style={{ width: "5rem" }}
                  type="number"
                />
              
              </div>

              <div className="priceCancel">
                <p>
                  $<span>{e.price * Number(price000[i])}</span>
                </p>
                <button className="deletebutton" onClick={()=>removeItem(i,e.name)}>X</button>
              </div>
            </div>
          </div>

          ) })}


          <hr />

          <div className="promeNoteC">
            <div className="promeNote">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>

              <p style={{ color: "#96AC73" }}> Enter a promo code</p>
            </div>
            <div className="promeNote">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>

              <p style={{ color: "#96AC73" }}> Add a note</p>
            </div>
          </div>
        </div>

        <div className="CartSection2">
          <p>Order summary</p>
          <hr />

          <div className="CartSection2Price">
            <p>subtotal</p>
            <p>
              $<span>{priceTotal}</span>
            </p>
          </div>

          <p>Estimate Shipping</p>

          <hr />

          <div className="CartSection2Price">
            <p>total</p>
            <p>
              <span>{priceTotal}</span>
            </p>
          </div>

          <div className="paymentButtons">
            <button className="checkoutButton">checkout</button>
            <button className="paypalButton">
              <span style={{ color: "#003087" }}>pay</span>
              <span style={{ color: "#009CDE" }}>pal</span> checkout
            </button>
          </div>

          <div className="secureCheckout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>

            <p style={{ textAlign: "center", maxWidth: "10rem" }}>
              secure checkout
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
