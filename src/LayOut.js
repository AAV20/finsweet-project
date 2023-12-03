import React from 'react'
import Footer from './componetns/footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './componetns/home/navbar/Navbar'


export default function LayOut() {
  return (
    <div>
        <Navbar/>
            <main>
                <Outlet/>
            </main>
        <Footer/>
    </div>
  )
}
