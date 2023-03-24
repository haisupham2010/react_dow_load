import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import './YourCart.css';


function YourCart() {
  const heig = "55px";
  const heiganh = "95px";
  const heicheck = "325px";


  //Scroll to top each Page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const {
    addToCart,
    cartItem,
    removeFromCart,
    cartSubTotal,
    totalItem,
    cartTotal,
    shippingFee,
    handleIncrease,
    handleDecrease,
  } = useContext(Context);

  const cartEmpty = totalItem === 0;

  return (
    <div className="bg-body-tertiary " style={{ paddingTop: "100px" }}>

      <div className="container " >

        <div className="d-flex mb-5">
          <div>
            <Link to="/" className="fs-5 nav-link active">
              Home&nbsp;/&nbsp;
            </Link>
          </div>
          <div className="fs-5 fw-semibold"> Cart</div>
        </div>

        <div style={{ backgroundColor: "white", paddingTop: "30px" }}>

          <div style={{ paddingBottom: "80px", fontSize: "50px", marginLeft: "30px" }}> Your Cart</div>

          {cartEmpty ? (
            
              <div style={{ paddingBottom: "80px", fontSize: "20px", marginLeft: "30px" }}>
                <div className="d-flex justify-content-start mt-3 mb-3">
                  Your cart is currently empty. Come and see our products...
                </div>
                <div>
                  <Link to="/all-products" className="nav-link active">
                    <button className="btn btn-dark mt-3">
                      {" "}
                      Return to shop
                    </button>
                  </Link>
                </div>
              </div>
             
            ) :(<div>

            {/* h1 */}
            <div className="col-12 d-flex align-items-center justify-content-center" style={{ flexWrap: "wrap" }}>

              <div className="d-flex align-items-center justify-content-center border" style={{ width: "85%" }}>

                <div className="col-5 d-flex" style={{ height: `${heig}` }}>

                  <div className="col-3" >

                  </div>

                  <div className="col-3 d-flex align-items-center justify-content-center fw-bold res_text_t" >
                    Product
                  </div>

                  <div className="col-6" >

                  </div>


                </div>
                {/*  backgroundColor: "red", */}
                <div className="col-2 d-flex align-items-center justify-content-center fw-bold res_text_t" style={{ height: `${heig}` }}>


                  Price


                </div>
                {/*  backgroundColor: "yellow", */}

                <div className="col-3 d-flex align-items-center justify-content-center fw-bold res_text_t" style={{ textAlign: "center", height: `${heig}` }}>

                  Quantity
                </div>
                {/*  backgroundColor: "red", */}
                <div className="col-2 d-flex align-items-center justify-content-center fw-bold res_text_t" style={{ textAlign: "center", height: `${heig}` }}>


                  Subtotal
                </div>


              </div>
            </div>
            {/* h1 */}


            {/* h2 */}

            {cartItem.map((item) => {
              return (
                <>
                  <div className="col-12 d-flex align-items-center justify-content-center" style={{ flexWrap: "wrap", backgroundColor: "white" }}>
                    {/*  backgroundColor: "blue", */}
                    <div className="d-flex align-items-center justify-content-center border" style={{ width: "85%" }}>
                      <div className="col-5 d-flex" style={{ backgroundColor: "white", height: `${heiganh}` }}>
                        {/* style={{ backgroundColor: "blue" }} */}
                        <div className="col-3 d-flex align-items-center justify-content-center" >


                          <FaTrashAlt
                            type="button"
                            onClick={() => removeFromCart(item.product.id)}

                          />




                          {/* style={{ backgroundColor: "yellow" }} */}
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center" >
                          {/* Product */}

                          <img
                            style={{ width: "80%", height: "auto" }}
                            src={item.product.img}
                          />

                        </div>
                        {/*  style={{ backgroundColor: "green" }} */}
                        <div className="col-6 d-flex align-items-center ">
                          <div className="css_ten">{item.product.name}</div>
                        </div>


                      </div>
                      {/*  backgroundColor: "red", */}
                      <div className="col-2 d-flex align-items-center justify-content-center" style={{ height: `${heiganh}` }}>


                        {/* Price */}
                        <div className="css_ten">
                          ${item.product.price}.00
                        </div>


                      </div>

                      {/*  backgroundColor: "yellow", */}
                      <div className="col-3 d-flex align-items-center justify-content-center" style={{ textAlign: "center", height: `${heiganh}` }}>

                        {/* Quantity */}

                        <div className="d-flex align-items-center justify-content-center">
                          <div className="d-flex align-items-center justify-content-center res_congtru" >
                            <button
                              className="btn btn-light d-flex align-items-center justify-content-center"
                              onClick={() => handleDecrease(item.product.id)}
                              style={{ width: "100%", height: "100%" }}
                            >
                              -
                            </button>
                          </div>


                          <div className="res_so" key={item.product.id}>
                            {item.amount}
                          </div>

                          <div className="d-flex align-items-center justify-content-center res_congtru" >
                            <button
                              className="btn btn-light d-flex align-items-center justify-content-center"
                              onClick={() => handleIncrease(item.product.id)}
                              style={{ width: "100%", height: "100%" }}
                            >
                              +
                            </button>


                          </div>

                        </div>


                      </div>
                      {/* backgroundColor: "red", */}
                      <div className="col-2 d-flex align-items-center justify-content-center subtotal_css" style={{ textAlign: "center", height: `${heiganh}` }}>

                        <div className="">
                          ${item.amount * item.product.price}.00
                        </div>
                        {/* Subtotal */}
                      </div>


                    </div>
                  </div>

                </>
              );

            })}

            {/* h2 */}


            {/* tổng */}
            <div className="col-12 d-flex align-items-center justify-content-center" style={{ flexWrap: "wrap", backgroundColor: "white" }}>

              <div className="d-flex align-items-center justify-content-center border" style={{ width: "85%" }}>
                <div className="col-5 d-flex" style={{ height: `${heig}` }}>

                  <div className="col-3" >

                  </div>
                  <div className="col-3 d-flex align-items-center justify-content-center fw-bold" style={{ color: "black" }}>
                    Total
                  </div>

                  <div className="col-6" >

                  </div>


                </div>

                <div className="col-2 d-flex align-items-center justify-content-center" style={{ height: `${heig}` }}>





                </div>

                {/* backgroundColor: "yellow",  */}
                <div className="col-3 d-flex align-items-center justify-content-center" style={{ textAlign: "center", height: `${heig}` }}>
                  <div className="fw-bold subtotal_css">{totalItem}</div>

                  {/* Quantity */}

                </div>
                <div className="col-2 d-flex align-items-center justify-content-center" style={{ textAlign: "center", height: `${heig}` }}>

                  <div className="fw-bold subtotal_css">
                    ${cartSubTotal}.00
                  </div>
                  {/* Subtotal */}
                </div>


              </div>
            </div>
            {/* tổng */}



            {/* continue */}
            <div className="col-12 d-flex align-items-center justify-content-center mt-4" style={{ flexWrap: "wrap" }}>
              {/*  backgroundColor: "blue", */}
              <div className="d-flex align-items-center justify-content-center" style={{ width: "85%" }}>
                <div className="col-5 d-flex" style={{ height: `${heig}` }}>
                  {/* style={{ backgroundColor: "blue" }} */}
                  <div className="col-3" >

                  </div>
                  {/* style={{ backgroundColor: "yellow" }} */}
                  <div className="col-3 d-flex align-items-center justify-content-center" >
                    {/* Product */}
                  </div>
                  {/* style={{ backgroundColor: "green" }} */}
                  <div className="col-6" >

                  </div>


                </div>

                <div className="col-2 d-flex align-items-center justify-content-center" style={{ height: `${heig}` }}>


                  {/* Price */}


                </div>


                <div className="col-3 d-flex align-items-center justify-content-center" style={{ textAlign: "center", height: `${heig}` }}>

                  {/* Quantity */}

                </div>
                <div className="col-2 d-flex align-items-center justify-content-end" style={{ textAlign: "center", height: `${heig}` }}>

                  <div className="d-flex align-items-center" style={{ height: "50px" }}>



                    <Link to="/all-products" className="nav-link  justify-content-end" style={{ width: "200px" }}>

                      <div className="d-flex justify-content-end ">
                        <button
                          // style={{ width: "100%" }}
                          className="btn btn-dark "
                        >
                          {/* font_continue */}
                          <div className="">
                            Continue To Shop
                          </div>
                        </button>
                      </div>

                    </Link>


                  </div>

                  {/* Subtotal */}
                </div>


              </div>
            </div>
            {/* continue */}


            {/* Proceed To Checkout */}
            {/* h1 */}
            <div className="col-12 d-flex align-items-center justify-content-center mt-5" style={{ flexWrap: "wrap" }}>

              <div className="d-flex align-items-center justify-content-center" style={{ width: "85%" }}>
                <div className="col-5 d-flex " style={{ height: `${heicheck}` }}>


                  <div className="col-3" >

                  </div>
                  <div className="col-3 d-flex align-items-center justify-content-center" >
                    {/* Product */}
                  </div>

                  <div className="col-6" >

                  </div>


                </div>
                {/* backgroundColor: "red", */}
                <div className="col-2 d-flex align-items-center justify-content-center" style={{ height: `${heicheck}` }}>


                  {/* Price */}


                </div>


                <div className="col-5 d-flex justify-content-end mb-5" style={{textAlign: "center", backgroundColor: "yellow", height: `${heicheck}` }}>

                  {/* Quantity */}

                  <div className="d-flex cartol" >
                    <div className="card cartol"  >
                      <div className="card-body">
                        <h5 className="card-title fs-2 ">Cart Totals</h5>
                        <table className="table mt-3">
                          <tbody>
                            <tr>
                              <th scope="row" className="fw-semibold fs-5">
                                Subtotal
                              </th>
                              <td>${cartSubTotal}.00</td>
                            </tr>
                            <tr>
                              <th scope="row" className="fw-semibold fs-5">
                                Shipping
                              </th>
                              <td>${shippingFee}.00</td>
                            </tr>
                            <tr>
                              <th scope="row" className="fw-semibold fs-5">
                                Total
                              </th>
                              <td className="fw-semibold fs-5">
                                ${cartTotal}.00
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <Link to="/checkout">
                        <button className="btn btn-dark fs-5 p-3 w-100">
                          Proceed To Checkout
                        </button>
                      </Link>
                    </div>
                  </div>



                </div>


              </div>
            </div>
            {/* h1 */}
            {/* Proceed To Checkout */}




          </div>)}

        </div>




















        {/* <div className="d-flex pb-5">
          <div className="d-flex mt-5">
            <div>
              <Link to="/" className="fs-5 nav-link active">
                Home&nbsp;/&nbsp;
              </Link>
            </div>
            <div className="fs-5 fw-semibold"> Cart</div>
          </div>
        </div> */}
        {/* <div className="ps-5 bg-body p-5">
          <h1>Your Cart </h1>
          <span>
            {cartEmpty ? (
              <div>
                <div className="d-flex justify-content-start mt-3 mb-3">
                  Your cart is currently empty. Come and see our products...
                </div>
                <div>
                  <Link to="/all-products" className="nav-link active">
                    <button className="btn btn-dark mt-3">
                      {" "}
                      Return to shop
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-column p-5">
                <div className="d-flex border p-3">
                  <div className="col fw-semibold ms-5 font_tex_cart ">Product</div>
                  <div className="col-2 fw-semibold me-3 font_tex_cart">Price</div>
                  <div className="col-2 fw-semibold ms-1 me-2 font_tex_cart">
                    Quantity
                  </div>
                  <div className="col-2 me-3 fw-semibold ms-1 font_tex_cart">
                    Subtotal
                  </div>
                </div>







                {cartItem.map((item) => {
                  return (
                    <div key={item.product.id} className="d-flex border p-3" >


                      <div className="col text-start d-flex align-items-center">

                        <FaTrashAlt
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="me-4"
                        />

                        <img
                          style={{ width: 80 }}
                          className="ms-1"
                          src={item.product.img}
                        ></img>

                        <div className="ms-4">{item.product.name}</div>

                      </div>

                      <div className="col-2 d-flex align-items-center me-1">
                        ${item.product.price}.00
                      </div>








                      <div className="col-2 d-flex align-items-center me-4">
                        <button
                          className="btn btn-light"
                          onClick={() => handleDecrease(item.product.id)}
                        >
                          -
                        </button>
                        <div className="p-3" key={item.product.id}>
                          {item.amount}
                        </div>
                        <button
                          className="btn btn-light"
                          onClick={() => handleIncrease(item.product.id)}
                        >
                          +
                        </button>
                      </div>




                      <div className="col-2 d-flex align-items-center ms-3 me-1">
                        ${item.amount * item.product.price}.00
                      </div>




                    </div>
                  );
                })}
                <div className="d-flex border p-3">

                  <div className="col fw-semibold ms-5 fs-5">Total</div>

                  <div className="col-2 fw-semibold ms-5 fs-5">{totalItem}</div>
                  <div className="col-2 fw-semibold fs-5 me-1">
                    ${cartSubTotal}.00
                  </div>


                </div>



                <div>

                  <Link to="/all-products" className="nav-link">
                    <div className="d-flex justify-content-end">
                      <button
                        style={{ width: 250 }}
                        className="btn btn-dark p-2 mb-2 mt-3"
                      >
                        Continue To Shop
                      </button>
                    </div>
                  </Link>

                </div>


                <div className="d-flex  justify-content-end">
                  <div className="card w-50 mt-5 mb-5">
                    <div className="card-body p-4 ms-1">
                      <h5 className="card-title fs-2 ">Cart Totals</h5>
                      <table className="table mt-3">
                        <tbody>
                          <tr>
                            <th scope="row" className="fw-semibold fs-5">
                              Subtotal
                            </th>
                            <td>${cartSubTotal}.00</td>
                          </tr>
                          <tr>
                            <th scope="row" className="fw-semibold fs-5">
                              Shipping
                            </th>
                            <td>${shippingFee}.00</td>
                          </tr>
                          <tr>
                            <th scope="row" className="fw-semibold fs-5">
                              Total
                            </th>
                            <td className="fw-semibold fs-5">
                              ${cartTotal}.00
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <Link to="/checkout">
                      <button className="btn btn-dark fs-5 p-3 w-100">
                        Proceed To Checkout
                      </button>
                    </Link>
                  </div>
                </div>




              </div>
            )}
          </span>
        </div> */}




      </div>
    </div>
  );
}

export default YourCart;
