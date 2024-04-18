"use client"
import React from 'react'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MyNavBar from '../components/MyNavBar';
import cakeOrders from '../../_dummyData/cakeOrders.json'
import cheesecakeOrders from "../../_dummyData/cheesecakeOrders.json"
import cupcakeOrders from "../../_dummyData/cupcakeOrders.json"
import OrderCardAdminPage from '../components/OrderCardAdminPage';



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
          <OrderCardAdminPage key={index} data={cakeOrder} category={'CAKE'} href={'cake'} status={cakeOrder.status} />
        ))}

        {cheesecakeOrders.map((cakeOrder, index) => (
          <OrderCardAdminPage key={index} data={cakeOrder} category={'CHEESECAKE'} href={'cheesecake'} status={cakeOrder.status}/>
        ))}

        {cupcakeOrders.map((cakeOrder, index) => (
          <OrderCardAdminPage key={index} data={cakeOrder} category={'CUPCAKE'} href={'cupcake'} status={cakeOrder.status}/>
        ))}
      </div>

    </div>
  )
}
