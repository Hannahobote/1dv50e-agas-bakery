"use client"
import React from 'react'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MyNavBar from '../components/MyNavBar';
import cakeOrders from '../../_dummyData/cakeOrders.json'
import CakeOrderComponent from '../components/CakeOrderCard';
import cheesecakeOrders from "../../_dummyData/cheesecakeOrders.json"
import CheesecakeOrderCard from '../components/CheesecakeOrderCard';


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

  return (
    <div class="container px-5 py-24 mx-auto bg-white">
      <MyNavBar />
      <div class="-my-8 divide-y-2 divide-gray-100">

        {cakeOrders.map((cakeOrder, index) => (
          <CakeOrderComponent key={index} cakeOrderData={cakeOrder} />
        ))}

        {cheesecakeOrders.map((cakeOrder, index) => (
          <CheesecakeOrderCard key={index} cheesecakeOrderData={cakeOrder} />
        ))}
      </div>

    </div>
  )
}
