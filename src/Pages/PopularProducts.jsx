import { useState, useEffect, useContext } from "react";
import { products } from "../Pages/AllProducts/data";
import { Link } from "react-router-dom";
import { Context } from "../../src/Context/Context";



import h_productimg1 from "../home_pop/wc-11-300x300.png";
import h_productimg2 from "../home_pop/wc-img-1.png";
import h_productimg3 from "../home_pop/wc-ghe.png";
import h_productimg4 from "../home_pop/wc-chau.png";
import h_productimg5 from "../home_pop/wc-xy.png";
import h_productimg6 from "../home_pop/wc-hong.png";



export default function PopularProducts(props) {
  // const handle_pro = function (event) {
  //   event.preventDefault();
  //   console.log(props.keys);
  // };
  const { addToCart, FaStar, StarRating, ItemPopular } = useContext(Context);

  return (

    <div className="container">
      <div className="row">

        {/* products_home  ItemPopular*/}
        {ItemPopular.map((product) => (

          <div className="col-lg-4 col-md-6 mb-5 mt-4">
            <div className="p-2" key={product.id}>
              <Link to={`/products/${product.id}`}>
        
                <img className="product-img" style={{height : "100%", width: "100%"}} src={product.img}></img>
        
     
              <div className="mt-4 fw-bold" style={{ fontSize: "20px", color: "black"}}>
              {`${product.name}`}
              </div>

              <StarRating value={product.rating} />

              <div className="d-flex mt-2">
                <div className="text-decoration-line-through me-2 text-body-tertiary" >
                  ${product.originPrice}.00
                </div>
                <div className="fw-semibold" style={{fontSize: "20px", color: "black"}}> ${product.price}.00 </div>
              </div>

              </Link>
            </div>
          </div>

        ))}

      </div>
    </div>

  );
}
