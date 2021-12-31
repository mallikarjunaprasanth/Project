import React from "react";
import Sample from "../Images/sample.png";

export default function Protofolis() {
  return (
    <div>
      <div className="container">
        <div className="text-center fs-1">Protofolis/ Case Studies</div>

        <div className="container p-2">
          <div className="row justify-content-center gap-4">
            <div className="col-3 ">
              <img src={Sample} alt="sample" className='w-100 rounded-2' />
            </div>
            <div className="col-3">
              <img src={Sample} alt="sample" className='w-100 rounded-2'/>
            </div>
            <div className="col-3">
              <img src={Sample} alt="sample" className='w-100 rounded-2' />
            </div>
          </div>
        </div>
        <div className="text-center p-2">
            <p>Lorem Ipsum kshuhsur</p> 
        </div>
      </div>
    </div>
  );
}
