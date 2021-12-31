import React from 'react';
import Logo from '../Images/Mnlogo.png';

import "../App.css";
export default function Navbar() {
    return (
       
            <div className="container-fluid">
            
                <div className="row">
                <div className="col-2  text-center">
                    <img src={Logo} alt="logo" className="w-100" />
                </div>
                <div className="col-7 p-4 ">
                    <ul className="d-flex list-unstyled justify-content-end gap-3 mt-2  fw-bold">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Products</li>
                        <li>Portolio</li>



                    </ul>


                </div>
                <div className="col-3  p-3 text-center">

                    <button className=" btn1 rounded-pill text-white ps-4 pe-4 pt-3 pb-3 border-0  "> Contact US</button>
                </div>
                </div>
              
            </div>
            
     
    )
}
