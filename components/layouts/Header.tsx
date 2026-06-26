"use client"
import React from 'react'
import "./Header.css"
import { BiHomeAlt } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";


const Header: React.FC = () => {
  return (
    <>
    <div className="main">
      <div className="box1">
        <div className="cart_icon"><BiHomeAlt /></div>
        <div className="title">ShopEase</div>
      </div>
      <div className="box2">
        <div className="user_icon"><FaRegUser /></div>
        <div className="cart_icon"><FiShoppingCart /></div>
      </div>
    </div>
    </>
  )
}

export default Header