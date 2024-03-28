import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" id="head1">MegaStore<img src="download1.png" width="51" height="52" className="d-inline-block align-top" class="rounded-circle mx-auto d-block " alt="Logo" /></a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/"><button type="button" class="btn btn-info">Home</button></Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/about"><div class="dropdown"><button type="button" className="dropbtn" class="btn btn-info">Mens</button><div class="dropdown-content">
    <a href="#">Men's T-shirt</a>
    <a href="#">Men's Casual Shirts</a>
    <a href="#">Men's Formal Shirts</a>
    <a href="#">Men's Kurtis</a>
    <a href="#">Men's Blazers</a>
    <a href="#">Men's Raincoat</a>
    <a href="#">Men's Suit</a>
    <a href="#">Men's Jeans</a>
    <a href="#">Men's Trousers</a>
    <a href="#">Men's Trackpants</a>
    <a href="#">Men's Shorts</a>
    <a href="#">Men's Dhoti</a>

  </div></div></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services"><div class="dropdown"><button type="button"className="dropbtn" class="btn btn-info">Womens</button><div class="dropdown-content">
    <a href="#">Women T-shirt</a>
    <a href="#">Women Sarees</a>
    <a href="#">Women Kurtas</a>
    <a href="#">Women Salwar</a>
    <a href="#">Women Dresses</a>
    <a href="#">Women Lehenga</a>
    <a href="#">Women Salwar</a>
  </div></div></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs"><div class="dropdown"><button type="button"className="dropbtn" class="btn btn-info">Kids</button><div class="dropdown-content">
    <a href="#">Baby Boy's Clothing</a>
    <a href="#">Baby Girl's Clothing</a>
    <a href="#">Boy's Footwear</a>
    <a href="#"> Girl's Footwear</a>
    <a href="#">Toys</a>
    <a href="#">School Supplies</a>
    <a href="#">Baby Care</a>
  </div></div></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts"><div class="dropdown"><button type="button"className="dropbtn" class="btn btn-info">Grocery</button><div class="dropdown-content">
    <a href="#">Staples</a>
    <a href="#">Snacks & Beverages</a>
    <a href="#">Packaged Food</a>
    <a href="#">Personal Care</a>
    <a href="#">Household care</a>
    <a href="#">Dairy & Eggs</a>
    <a href="#">Kitchen</a>
    <a href="#">Fruits</a>
    <a href="#">Vegetables</a>
  </div></div></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mobile"><div class="dropdown"><button type="button"className="dropbtn" class="btn btn-info">Mobile</button><div class="dropdown-content">
    <a href="#">Mobiles</a>
    <a href="#">Mobile Accessories</a>
    <a href="#">Smart Watch</a>
  </div></div></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/electronics"><div class="dropdown"><button type="button"className="dropbtn" class="btn btn-info">Electronics</button><div class="dropdown-content">
    <a href="#">Audio</a>
    <a href="#">Cameras & Accessories</a>
    <a href="#">Computer</a>
    <a href="#">Gamingr</a>
    <a href="#">Laptop & Accessories</a>
    <a href="#">Power Bank</a>
    <a href="#">Storage</a>
    <a href="#">Tablets</a>
  </div></div></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home"><div class="dropdown"><button type="button"className="dropbtn" class="btn btn-info">Home & Furniture</button><div class="dropdown-content">
    <a href="#">Furniture Studio</a>
    <a href="#">Living Room Furniture</a>
    <a href="#">Kitchen & Dining</a>
    <a href="#">Bedroom Furniture</a>
    <a href="#">Home Decor</a>
    <a href="#">Tools & Utility </a>
    <a href="#">Kids Furniture</a>
    <a href="#">Cleaning & Bath</a>
    <a href="#">Gardening</a>
  </div></div></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/appliances"><div class="dropdown"><button type="button" className="dropbtn"class="btn btn-info">Appliances</button><div class="dropdown-content">
    <a href="#">Television</a>
    <a href="#">Washing Machin</a>
    <a href="#">Air Conditioner</a>
    <a href="#">Refrigerators</a>
    <a href="#">Kitchen Appliances</a>
    <a href="#">Water Purifiers</a>
  </div></div></Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/opencamera">
                <div class="dropdown">
                  <button type="button" className="dropbtn"class="btn btn-info">Opencamera</button>
              <div class="dropdown-content">

  </div></div></Link>
            </li>




          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-danger me-2" type="submit">Search</button>
          </form>
          <button type="button" class="btn btn-primary me-2"><i class="bi bi-cart4"></i>Cart</button>
          <button type="button" class="btn btn-success me-2">Login</button>
          <button type="button" class="btn btn-warning ">Signup</button>
          {/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.prasad} />
  <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div> */}
        </div>
      </div>
    </nav>




    </div>
  )
}
