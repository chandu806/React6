import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { style } from "../redux/Action";
import {BsCartPlus} from 'react-icons/bs'
import {CiLogIn} from 'react-icons/fi'
import {BiHomeAlt} from "react-icons/ai"

import "../styles/Navbar.css";
export const Header = () => {

  const {active, cart} = useSelector(state => state)
  const dispatch = useDispatch();

  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
        <Link to={`/`}    onClick={() =>
            dispatch(style({ div1: "active", div2: "inactive", div3: "inactive" }))
          } className={active.div1}>

<div className="option__flex">
            <p>
            Home
          </p>
          <div>
          <BiHomeAlt />
            
          </div>
            </div>
          </Link> 

        <Link to={`/cart`}   onClick={() =>
              dispatch(style({ div1: "inactive", div2: "active", div3: "inactive" }))
            }  className={active.div2}>
               <div className="option__flex">
            <p>
          Cart
          </p>
          <div>
          <BsCartPlus />
            <span>{cart.length}</span>
          </div>
            </div>
        </Link>
        <Link to={"/login"}  onClick={() =>
              dispatch(style({ div1: "inactive", div2: "inactive", div3: "active" }))
            } 
            className={active.div3}>
          {" "}

            <div className="option__flex">
            <p>
          Login
          </p>
          <div>
          <CiLogIn />
            
          </div>
            </div>

        </Link>
      </div>
    </div>
  );
};
