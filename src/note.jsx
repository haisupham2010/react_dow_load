         
 export default function Loginpage() {        
         
         <div className="">
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item me-3">
                <Link
                  onClick={() => setDisplayPage([...products])}
                  to="/all-products"
                  className="nav-link "
                >
                  All Products
                </Link>
              </li>

              <li className="nav-item me-3">
                <Link to="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>

              <li className="nav-item me-3">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link to="/cart" className="nav-link">
                  Your Cart
                </Link>
              </li>
              <li className="nav-item me-3">
                <Dropdown>
                  <Dropdown.Toggle variant="Dark" className="position-relative">
                    <FaShoppingBag
                      className="me-1"
                      fontSize="25px"
                    ></FaShoppingBag>
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


       }