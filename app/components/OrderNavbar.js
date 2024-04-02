import Link from 'next/link'
import React from 'react'


export default function OrderNavbar() {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link class="mr-5 hover:text-gray-900" href={"/"}>Home</Link>
            <Link class="mr-5 hover:text-gray-900" href={"about"}> About</Link>
            <Link class="mr-5 hover:text-gray-900" href={"order"}>Order</Link>
            <Link class="mr-5 hover:text-gray-900" href={"login"}>Login</Link>
          </nav>

        </div>
      </header>
    </div>
  )
}
