"use client"
import React from 'react'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MyNavBar from '../components/MyNavBar';
import cakeOrders from '../../_dummyData/cakeOrders.json'
import CakeOrderComponent from '../components/CakeOrderCard';


export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const cookieUser = Cookies.get('user');
    console.log(cookieUser);
    if (cookieUser === undefined) {
      router.push('../login');
    } else {
      setUser(cookieUser);
    }
  }, []);

  console.log(cakeOrders)
  return (
    <div class="container px-5 py-24 mx-auto bg-white">
      <MyNavBar/>
      <div class="-my-8 divide-y-2 divide-gray-100">
        <h1>cake order</h1>
        {cakeOrders.map((cakeOrder, index) => (
          <CakeOrderComponent key={index} cakeOrderData={cakeOrder} />
        ))}
      </div>

    </div>
  )
}
