import "./App.css";
import "./home.css";
import "./form_chat.css";
import { Route, Routes, Link } from "react-router-dom";
// import HomePage from "./Pages/Homepage/Homepage";
import AllProducts from "./Pages/AllProducts/AllProducts";
import AboutUs from "./Pages/AboutUs/AboutUs";
import OurTeam from "./Pages/OurTeam/OurTeam";
import Contact from "./Pages/Contact/Contact";
import { FaShoppingBag, FaTrash } from "react-icons/fa";
import { Dropdown, Badge } from "react-bootstrap";

import { useState, useEffect, useContext } from "react";
import { Context } from "./Context/Context";
import YourCart from "./Pages/YourCart/YourCart";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import CheckOut from "./Pages/CheckOut/CheckOut";

import HomePage from "./Pages/HomePage";
import TolinkB from "./Pages/TolinkB";
import Footer from "./Pages/Footer";


import { Fragment } from 'react';
import ScrollButton from './ScrollButton/ScrollButton';
import { Content, Heading } from './ScrollButton/style';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faShieldHalved,
  faTruckFast,
  faLifeRing,
} from "@fortawesome/free-solid-svg-icons";
import Aboutusmenu from "./Pages/Aboutusmenu";
import Contactus from "./Pages/Contactus";
import Register from "./Pages/Register";
import Loginpage from "./Pages/Loginpage";
import { IsloginProvider } from "./Pages/IsloginContext"; //haixoa
import Loginstatus from "./Pages/Loginstatus";
import { Alert } from "bootstrap";
import imglogin from "./Pages/Homepage/modeNiture.png";
import { products } from "./Pages/AllProducts/data";
import FramePosterCategory from "./Pages/AllProducts/FramePosterCategory";
import DecorationCategory from "./Pages/AllProducts/DecorationCategory";
import FurnitureCategory from "./Pages/AllProducts/FurnitureCategory";
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faShieldHalved,
  faTruckFast,
  faLifeRing
);

function App() {

  const handl_nav = (event) => {
    // event.preventDefault();
    console.log(444)

  }
  // if (document.body.offsetWidth > 900){
  // alert(11)

  // }
  ///////////////////////// 
  const domhome = (loai) => {
    const homec = document.getElementById('but_home');
    if (loai == 0) {
      homec.innerHTML = `Home`;

    }
    if (loai == 1) {

      homec.innerHTML = `      <button
    class="btn btn-outline-dark"
    type="button"
  >
    Home
  </button>`;

    }

  }
  ////////////////////////
  const domallpro = (loai) => {
    const allproc = document.getElementById('but_allpro');
    if (loai == 0) {
      allproc.innerHTML = `All Products`;

    }
    if (loai == 1) {

      allproc.innerHTML = `      <button
      class="btn btn-outline-dark"
      type="button"
    >
    All Products
    </button>`;

    }

  }
  ////////////////////////
  const domabout = (loai) => {
    const about = document.getElementById('but_about');

    if (loai == 0) {
      about.innerHTML = `About Us`;

    }
    if (loai == 1) {

      about.innerHTML = `      <button
      class="btn btn-outline-dark"
      type="button"
    >
    About Us
    </button>`;

    }

  }
  ////////////////////////
  const domcontact = (loai) => {
    const acontact = document.getElementById('but_contact');

    if (loai == 0) {
      acontact.innerHTML = `Contact Us`;

    }
    if (loai == 1) {

      acontact.innerHTML = `      <button
      class="btn btn-outline-dark"
      type="button"
    >
    Contact Us
    </button>`;

    }

  }
  ////////////////////////


  const domyourcard = (loai) => {
    const ayourcard = document.getElementById('but_yourcard');

    if (loai == 0) {
      ayourcard .innerHTML = `Your Cart`;

    }
    if (loai == 1) {

      ayourcard .innerHTML = `      <button
      class="btn btn-outline-dark"
      type="button"
    >
    Your Cart
    </button>`;

    }

  }
  ////////////////////////



  const handl_navhome = (event) => {

    if (document.body.offsetWidth > 991){
    domhome(1);
    domallpro(0);
    domabout(0)
    domcontact(0);
    domyourcard(0);
    }
    else{
      domhome(0);
    }

  }
  ///////////////////////////////////////////////////
  const handl_navallpro = (event) => {

    setDisplayPage([...products])
    if (document.body.offsetWidth > 991){
    domallpro(1)
    domhome(0);
    domabout(0)
    domcontact(0);
    domyourcard(0);
    }
    else{
      domallpro(0)
    }
  }

  //////////////////////

  const handl_navabout = (event) => {
    if (document.body.offsetWidth > 991){
    domabout(1)
    domhome(0);
    domallpro(0);
    domcontact(0);
    domyourcard(0);
    }
    else{
      domabout(0)
    }
  }

  const handl_navcontact = (event) => {
    if (document.body.offsetWidth > 991){
    domabout(0)
    domhome(0);
    domallpro(0);
    domcontact(1);
    domyourcard(0);
    }
    else{
      domcontact(0);
    }
  }

  const handl_navyourcard = (event) => {
    if (document.body.offsetWidth > 991){
    domabout(0)
    domhome(0);
    domallpro(0);
    domcontact(0);
    domyourcard(1);
    }
    else{
      domyourcard(0);
    }
  }





  useEffect(() => {
    if (document.body.offsetWidth > 991){
    const homec = document.getElementById('but_home');
    homec.innerHTML = `Home`;

    homec.innerHTML = `      <button
    class="btn btn-outline-dark"
    type="button"
  >
    Home
  </button>`;
    }



  }, []);

  const { cartItem, removeFromCart, totalItem, setDisplayPage } =
    useContext(Context);
  const cartEmpty = totalItem === 0;
  // className="App bg-body-tertiary"
  return (
    <IsloginProvider>
      <Fragment>
        <div>
          <nav className="navbar navbar-expand-lg bg-body d-flex">
            <div className="container">
              {/* <Link to="/" className="navbar-brand fw-bold fs-2 text ms-5">
            Superb.
          </Link> */}

              <div>
                <Link to="/" className="navbar-brand fw-bold fs-2 text">
                  <img
                    className=""
                    style={{ width: "100%", height: "100%" }}
                    src={imglogin}
                    alt=""
                  />
                </Link>
              </div>

              {/* nav-bar me-4 pe-5 bg-primary*/}
              <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="d-flex align-items-center justify-content-center">

                  <button onClick={handl_nav}
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>


                  <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto">

                      <li className="nav-item">

                        {/* responsive */}
                        {/*position-fixed bg-primary style={{ width: "100%", zIndex: "1", top: "0px", left: "0px", height: "600px", paddingLeft: "20px" }} */}
                        <div className="nav_res" >

                          {/* responsive */}
                          <div className="nav_boder position-relative" >

                            <button
                              className="navbar-toggler position-absolute btn"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarNav"
                              aria-controls="navbarNav"
                              aria-expanded="false"
                              aria-label="Toggle navigation"

                              style={{ color: "white", fontSize: "20px", left: "82%" }}>

                              x
                            </button>




                            <ul className="navbar-nav nav_wight d-flex align-items-center justify-content-center">
                              {/* navbar_giua */}
                              <li className="nav-item me-3" >
                                <Link onClick={handl_navhome} to="/" className="nav-link active" aria-current="page" >

                                  {/* c_blue  */}

                                  <div id="but_home" className="navcolor c_blue">

                                    {/* <button
                                      class="btn btn-outline-dark"
                                      type="button"
                                    > */}
                                      Home
                                    {/* </button> */}

                                  </div>





                                </Link>
                              </li>

                              <li className="nav-item me-3">
                                <Link
                                  // onClick={() => setDisplayPage([...products])}
                                  onClick={handl_navallpro}
                                  to="/all-products"
                                  className="nav-link "
                                  style={{ color: "black" }}
                                >
                                  <div id="but_allpro" className="navcolor c_blue">
                                    All Products
                                  </div>
                                </Link>
                              </li>

                              <li className="nav-item me-3">
                                <Link to="/about-us" onClick={handl_navabout} className="nav-link" >
                                  <div id="but_about" className="navcolor c_blue">
                                    About Us
                                  </div>
                                </Link>
                              </li>

                              <li className="nav-item me-3">
                                <Link to="/contact" onClick={handl_navcontact} className="nav-link">
                                  <div id="but_contact" className="navcolor c_blue">
                                    Contact Us
                                  </div>
                                </Link>
                              </li>
                              <li className="nav-item me-3">
                                <Link to="/cart" onClick={handl_navyourcard} className="nav-link" style={{ color: "black" }}>
                                  <div id="but_yourcard" className="navcolor c_blue">
                                    Your Cart
                                  </div>
                                </Link>
                              </li>
                              <li className="nav-item me-3">
                                <Dropdown>
                                  <Dropdown.Toggle variant="Dark" className="position-relative" style={{ left: "0px" }}>

                                    <div className="nav_gio">
                                      <FaShoppingBag
                                        className="me-1"
                                        fontSize="25px"

                                      ></FaShoppingBag>
                                    </div>

                                    <Badge className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-dark mt-1">
                                      {totalItem}
                                    </Badge>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className="mt-1" style={{ minWidth: 400 }}>
                                    <span>
                                      {cartEmpty ? (
                                        <div className="d-flex justify-content-center">
                                          Your Cart Is Currently Empty.
                                        </div>
                                      ) : (
                                        <div className="d-flex flex-column">
                                          {cartItem.map((item) => (
                                            <div
                                              key={item.product.id}
                                              className="p-2 d-flex flex-row align-items-center justify-content-start"
                                            >
                                              {
                                                <img
                                                  className="ms-3 rounded-circle me-3"
                                                  style={{ width: 60 }}
                                                  src={item.product.img}
                                                ></img>
                                              }
                                              <div className="w-75">
                                                <div className="fw-bold">
                                                  {item.product.name} &nbsp;
                                                </div>
                                                <div>
                                                  {item.amount} x&nbsp;${item.product.price}
                                                </div>
                                              </div>
                                              <FaTrash
                                                type="button"
                                                onClick={() => removeFromCart(item.product.id)}
                                                className="me-4"
                                              />
                                            </div>
                                          ))}
                                          <Link to="/cart" className="nav-link">
                                            <div className="d-flex justify-content-center">
                                              <button
                                                style={{ minWidth: 350 }}
                                                className="btn btn-dark p-2 mb-2 mt-3"
                                              >
                                                Go To Cart{" "}
                                              </button>
                                            </div>
                                          </Link>
                                        </div>
                                      )}
                                    </span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </li>

                              <li className="nav-item">
                                <Loginstatus />
                              </li>
                            </ul>
                          </div>
                        </div>




                      </li>





                    </ul>

                  </div>
                </div>
              </nav>



            </div>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route
              path="/all-products/frame&poster"
              element={<FramePosterCategory />}
            />
            <Route
              path="/all-products/decoration"
              element={<DecorationCategory />}
            />
            <Route path="/all-products/furniture" element={<FurnitureCategory />} />
            <Route path="/about-us" element={<Aboutusmenu />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<YourCart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Loginpage />} />
          </Routes>

          <Footer />
        </div>
        <ScrollButton />
      </Fragment>
    </IsloginProvider>
  );
}
export default App;
