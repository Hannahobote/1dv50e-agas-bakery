"use client"
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MyNavBar from '../components/MyNavBar';
//import cakeOrders from '../../_dummyData/cakeOrders.json'
//import cheesecakeOrders from "../../_dummyData/cheesecakeOrders.json"
//import cupcakeOrders from "../../_dummyData/cupcakeOrders.json"
import OrderCardAdminPage from '../components/OrderCardAdminPage';
import TokenContext from '../components/context/TokenContext';
//import { fetchFromAPI } from '@/_dummyData/dataFetcher';



export default function AdminPage() {
  const router = useRouter();
  const token = useContext(TokenContext)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [cakeOrders, setCakeOrders] = useState([])
  const [cupcakeOrders, setCupcakeOrders] = useState([])
  const [cheesecakeOrders, setCheesecakeOrders] = useState([])

  useEffect(() => {
    if(token.token.user == undefined) {
      router.push('../login')
    }

    async function fetchApi() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order/cake`, {
        headers: { 'Authorization': `Bearer ${token.token.accessToken}` }
      })
      if (!res.ok) {
        router.push(`../error/${res.status}`)
      } else {
        setCakeOrders(await res.json())
      }

      const res2 = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order/cupcake`, {
        headers: { 'Authorization': `Bearer ${token.token.accessToken}` }
      })
      if (!res2.ok) {
        router.push(`../error/${res.status}`)
      } else {
        setCupcakeOrders(await res2.json())
      }

      const res3 = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order/cheesecake`, {
        headers: { 'Authorization': `Bearer ${token.token.accessToken}` }
      })
      if (!res3.ok) {
        router.push(`../error/${res.status}`)
      } else {
        setCheesecakeOrders(await res3.json())
      }
    }
    fetchApi()
  }, [token.token.accessToken, router])



  return (
    <div class="container px-5 py-24 mx-auto bg-white">
      <MyNavBar />
      <div class="-my-8 divide-y-2 divide-gray-100">
        {cakeOrders.map((cakeOrder, index) => (
          <OrderCardAdminPage key={index} data={cakeOrder} category={'CAKE'} href={'cake'} status={cakeOrder.status} />
        ))}

        {cheesecakeOrders.map((cakeOrder, index) => (
          <OrderCardAdminPage key={index} data={cakeOrder} category={'CHEESECAKE'} href={'cheesecake'} status={cakeOrder.status} />
        ))}

        {cupcakeOrders.map((cakeOrder, index) => (
          <OrderCardAdminPage key={index} data={cakeOrder} category={'CUPCAKE'} href={'cupcake'} status={cakeOrder.status} />
        ))}
      </div>

    </div>
  )
}
