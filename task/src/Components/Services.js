import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
export default function Services() {
  const [state, setState] = useState();
  const getData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    setState(data);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="fs-1 text-center container-fluid">
        <p>Products</p>
      </div>

      <div className="container-fluid ">
        <div className="d-flex wrapper gap-3  ">
          {state &&
            state.map((user) => (
              <div key={user.id} className=" col-2 card roumded-3 ">
                <img
                  src={user.image}
                  alt={user.category}
                  className="w-50 h-50 pt-3 ps-3 "
                />
                <p className="p-2 para0">{user.title}</p>
                <p className="ps-2 para "> {user.description}</p>
                <div className="p-3">
                  <button  className="btn btn-primary border-0 p-2">Read More ..</button >
                </div>
              </div>
            ))}
        </div>

        <div className="text-center">
          <p>loreum sample testg lorem</p>
        </div>
      </div>
    </div>
  );
}
