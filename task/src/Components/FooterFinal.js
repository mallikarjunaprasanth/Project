import React from 'react';
import Logo from '../Images/Mnlogo.png';

export default function FooterFinal() {
    return (
        <div>
        <div className="container-fluid">
            <div className="row p-3">
            <div className="col-3">
            <div>
                <img src={Logo} alt="logo" className="w-75"/>
            </div>
            <div>
                <p className="ps-2">lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adipipsum dolor sit amet, consectetur adip </p>
            </div>

            </div>
            <div className="col-2 p-5">
                <ul className="list-unstyled p-2">
                    <li className="fs-4">Links</li>
                    <li>Our Clients</li>
                    <li>Privacy Policy</li>
                    <li>Our Benefits</li>
                </ul>

            </div>
            <div className="col-2 p-5">
                <ul className="list-unstyled p-2">
                    <li className="fs-4">Information</li>
                    <li>Our Clients</li>
                    <li>Privacy Policy</li>
                    <li>Our Benefits</li>
                </ul>

            </div>
            <div className="col-2 p-5 ">
                <ul className="list-unstyled p-2">
                    <li className="fs-4">Contact Us</li>
                    <li>+ 91-123456789 </li>
                    <li>Info@byspam.com</li>
                    <li>84 Block ,Noida UP 201301</li>
                </ul>

            </div>
            </div>
          
        </div>
        <hr/>
        <div className="text-center p-2">
            <p>Copyright 2021 Mallikarjuna Prasanth ,All Rights Reserved</p>
        </div>
        </div>
    )
}
