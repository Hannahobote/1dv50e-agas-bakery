"use client"
import MyNavBar from '@/app/components/MyNavBar'
import StyledP from '@/app/components/StyledP'
import { useRouter } from 'next/navigation'
import React from 'react'
import cakeOrders from "../../../../_dummyData/cakeOrders.json"

export default function OneCakeOrder({ params }) {
  const router = useRouter()
  const order = cakeOrders.find((cake) => cake._id = params.id)
  return (
    <div className='bg-white text-gray-700'>
      <MyNavBar />
      <p>Beställningsnummer {params.id}</p>
      <StyledP text={`Namn: ${order.name}`} />
      <StyledP text={`Efternamn: ${order.surname}`} />

    </div>
  )
}
