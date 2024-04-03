import React from 'react'
import MyNavBar from '../components/MyNavBar'
import OrderCard from '../components/OrderCard'

export default function index() {
  return (
    <div className='bg-white text-gray-900 body-font'>
      <MyNavBar></MyNavBar>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <OrderCard
              href={"order/cheesecake"}
              productToOrder={"Order a Cheesecake"}
              ProductDescription={"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."}
            />

            <OrderCard
              href={"order/cake"}
              productToOrder={"Order a cake"}
              ProductDescription={"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."}
            />

            <OrderCard
              href={"order/cupcake"}
              productToOrder={"Order a cupcake"}
              ProductDescription={"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

