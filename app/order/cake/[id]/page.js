"use client"
import React, { useContext, useState, useEffect } from 'react'
import MyNavBar from '@/app/components/MyNavBar'
import { useRouter } from 'next/navigation'
//import cakeOrders from "../../../../_dummyData/cakeOrders.json"
import StyledHeading from '@/app/components/StyledHeading'
import Image from 'next/image'
import StyledInputDefaultValue from '@/app/components/StyledInputDefaultValue'
import CustomerInfo from '@/app/components/CustomerInfo'
import OrderStatus from '@/app/components/OrderStatus'
import TokenContext from '@/app/components/context/TokenContext'


export default function OneCakeOrder({ params }) {
  //const order = cakeOrders.find((cake) => cake._id = params.id)
  const [order, setCakeOrder] = useState([])
  const token = useContext(TokenContext)
  const router = useRouter()

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order/cake/${params.id}`, {
        headers: { 'Authorization': `Bearer ${token.token.accessToken}` }
      })
      if (!res.ok) {
        router.push(`../../../error/${res.status}`)
      } else {
        setCakeOrder(await res.json())
      }
    }
    fetchApi()
  }, [token.token.accessToken, router, params.id])

  async function editOrder() {

  }

  async function deleteOrder(event) {
    event.preventDefault()
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/oder/cake/${params._id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token.token.accessToken}` },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('deleted')
        router.back()
      })

  }

  return (
    <div className='bg-white text-gray-700'>
      <MyNavBar />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p class="mb-8 leading-relaxed">
              <CustomerInfo order={order} />

              <br></br>
              <StyledHeading text={'Tårta info'} />
              <p>Beställningsnummer: {params.id}</p>
              <StyledInputDefaultValue
                type={'text'}
                name={'taste'}
                htmlFor={'taste'}
                defaultValue={order.taste}
                lableText={'Smak: '}
              />

              <StyledInputDefaultValue
                type={'text'}
                name={'filling'}
                htmlFor={'filling'}
                defaultValue={order.filling}
                lableText={'Fyllning: '}
              />

              <label className='text-gray-900'>Önskad Leveransdatum:</label>
              <br></br>
              <input
                type="date"
                id="leveransdatum"
                defaultValue={order.delivery_date}
                name='leveransdatum'
                className='border rounded border-gray-700 text-gray-900'
              />

              <br></br>
              <OrderStatus defaultValue={order.status} />

              <p>Önskad design av kund finns till höger.</p>
            </p>

            <div class="flex justify-center">
              <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Gå tillbaka</button>

              <form onSubmit={edit}>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Redigera</button>
              </form>

              <form onSubmit={deleteOrder}>
              <button class="ml-4 inline-flex text-gray-700 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-200 rounded text-lg">Radera</button>
              </form>

            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image alt={'cake'} src={`/${order.design}`} width={720} height={600} class="object-cover object-center rounded" />
          </div>
        </div>
      </section>
    </div>
  )
}
