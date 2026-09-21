import React from 'react'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className="pt-20 overflow-x-hidden selection:bg-[#FF6900] selection:text-white">

    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}
