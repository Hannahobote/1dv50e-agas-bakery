"use client"
import React, { useContext, useState, useEffect } from 'react'
import MyNavBar from '@/app/components/MyNavBar'
import { useRouter } from 'next/navigation'
//import cakeOrders from "../../../../_dummyData/cakeOrders.json"
import StyledHeading from '@/app/components/StyledHeading'
//import Image from 'next/image'
//import StyledInputDefaultValue from '@/app/components/StyledInputDefaultValue'
//import CustomerInfo from '@/app/components/CustomerInfo'
import OrderStatus from '@/app/components/OrderStatus'
import TokenContext from '@/app/components/context/TokenContext'


export default function OneCakeOrder({ params }) {
  const [order, setCakeOrder] = useState([])
  const token = useContext(TokenContext)
  const router = useRouter()
  const [formData, setFormData] = useState({})

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order/cake/${params.id}`, {
        headers: { 'Authorization': `Bearer ${token.token.accessToken}` }
      })
      if (!res.ok) {
        router.push(`../../../error/${res.status}`)
      } else {
        const data = await res.json()
        setCakeOrder(data)
      }
    }

    fetchApi()
  }, [token.token.accessToken, router, params.id])

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  async function editOrder(event) {
    event.preventDefault()
    console.log('in edi funcion', formData)
    try { 
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order/cake/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token.token.accessToken}` },
        body: formData
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('updated::', data)
          alert('Cake order updated')
          router.back()
        })
    } catch (error) {
      console.log(error)
      console.log('new values', formData)
      alert('Cake order could not be updated.')
    }
  }

  async function deleteOrder(event) {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order/cake/${params.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.token.accessToken}`
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete order');
      }
      console.log('Order deleted');
      router.back();
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  }

  async function goBack(event) {
    event.preventDefault()
    router.back()
  }

  return (
    <div className='bg-white text-gray-700'>
      <MyNavBar />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p class="mb-8 leading-relaxed">
              <StyledHeading text={'Beställare'} />

              <label
                htmlFor={'name'}
                class="leading-7 text-sm text-gray-900" >
                Namn:
              </label>
              <input
                type={'text'}
                name={'name'}
                defaultValue={order.name}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />

              <label
                htmlFor={'surname'}
                class="leading-7 text-sm text-gray-900" >
                Efternamn:
              </label>
              <input
                type={'text'}
                name={'surname'}
                defaultValue={order.surname}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />

              <label
                htmlFor={'phonenr'}
                class="leading-7 text-sm text-gray-900" >
                Mobil nummer:
              </label>
              <input
                type={'text'}
                name={'phonenr'}
                defaultValue={order.phonenr}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />

              <label
                htmlFor={'epost'}
                class="leading-7 text-sm text-gray-900" >
                E-post:
              </label>
              <input
                type={'text'}
                name={'epost'}
                defaultValue={order.epost}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />


              <label
                htmlFor={'delivery_adress'}
                class="leading-7 text-sm text-gray-900" >
                Leveransadress:
              </label>
              <input
                type={'text'}
                name={'delivery_adress'}
                defaultValue={order.delivery_adress}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />

              <br></br>
              <StyledHeading text={'Tårta info'} />
              <p>Beställningsnummer: {params.id}</p>

              <label
                htmlFor={'taste'}
                class="leading-7 text-sm text-gray-900" >
                Smak:
              </label>
              <input
                type={'text'}
                name={'taste'}
                defaultValue={order.taste}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />

              <label
                htmlFor={'filling'}
                class="leading-7 text-sm text-gray-900" >
                Fyllning:
              </label>
              <input
                type={'text'}
                name={'filling'}
                defaultValue={order.filling}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />

              <label className='text-gray-900'>Önskad Leveransdatum:</label>
              <br></br>
              <input
                type="date"
                id="leveransdatum"
                defaultValue={order.delivery_date}
                name='leveransdatum'
                className='border rounded border-gray-700 text-gray-900'
                Onchange={handleChange}
              />

              <br></br>
              <OrderStatus defaultValue={order.status} />

              <p>Önskad design av kund finns till höger eller nedan.</p>
            </p>

            <div class="flex justify-center">
              <form onSubmit={goBack}>
                <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Gå tillbaka</button>
              </form>

              {/*
              <form onSubmit={editOrder}>
                <button type='submit' class="ml-4 inline-flex text-gray-700 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Redigera</button>
              </form>
               */}

              <form onSubmit={deleteOrder}>
                <button class="ml-4 inline-flex text-gray-700 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-200 rounded text-lg">Radera</button>
              </form>

            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img alt={'cake'} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/image/${order.design}`} width={720} height={600} class="object-cover object-center rounded" />
          </div>
        </div>
      </section>
    </div>
  )
}
