"use client"
import MyNavBar from '@/app/components/MyNavBar'
import PersonalInfoOrder from '@/app/components/PersonalInfoOrder'
import StyledHeading from '@/app/components/StyledHeading'
import React, { useEffect, useState, useMemo } from 'react'


export default function CupcakeOrder() {
  async function sendOrder(event) {
    event.preventDefault()
    const data = {
      name: event.target.name.value,
      surname: event.target.surname.value,
      phonenr: event.target.phonenr.value,
      adress: event.target.adress.value,
      leveransadress: event.target.adress.value,
      cupcakeAmount: event.target.cupcakeAmount.value,
      taste: event.target.taste.value,
      frosting: event.target.frosting.value,
      price: finalPrice
    }

    console.log(data)
  }
  const cupcakeData = useMemo(() => [
    {
      amount: 6,
      cost: 270,
    },
    {
      amount: 12,
      cost: 570,
    },
    {
      amount: 18,
      cost: 810,
    },
    {
      amount: 24,
      cost: 1080,
    },
    {
      amount: 50,
      cost: 2250,
    },
  ], [])

  const taste = ['Vanilj', 'Chokolad', 'Red velvet', 'Ombre', 'Citron', 'Morotskaka']

  const frosting = ['Butter cream (i olika färger)', 'Mousse (i olika smaker)', 'Cream cheese (i olika färger)']

  const [selectedAmount, setSelectedAmount] = useState(cupcakeData[0].amount);
  const [finalPrice, setFinalPrice] = useState(cupcakeData[0].cost);

  useEffect(() => {
    const selectedCupcake = cupcakeData.find(cupcake => cupcake.amount === selectedAmount);
    if (selectedCupcake) {
      setFinalPrice(selectedCupcake.cost);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAmount, cupcakeData]);

  return (
    <div className='bg-white text-gray-900 body-font'>
      <MyNavBar />
      <StyledHeading text={'Beställ cupcakes'} />
      <form onSubmit={sendOrder}>
        <label htmlFor="cupcakeAmount">Välj antal cupcakes</label>
        <br></br>
        <select onChange={(e) => setSelectedAmount(Number(e.target.value))} class="select" name="cupcakeAmount" id="cupcakeAmount" className="w-full bg-white  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">

          {cupcakeData.map((cupcake) => (
            <option key={cupcake.amount} value={cupcake.amount}> {cupcake.amount} </option>
          ))}
        </select>

        <br></br>
        <label htmlFor="taste">Välj smak</label>
        <br></br>
        <select class="select" name="taste" id="taste" className="w-full bg-white  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">

          {taste.map((taste, index) => (
            <option key={index} value={taste}> {taste} </option>
          ))}
        </select>

        <br></br>
        <label htmlFor="frosting">Välj frosting</label>
        <br></br>
        <select class="select" name="frosting" id="frosting" className="w-full bg-white  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">

          {frosting.map((frosting, index) => (
            <option key={index} value={frosting}> {frosting} </option>
          ))}
        </select>


        <PersonalInfoOrder />

        <p>Totala pris: {finalPrice}kr</p>

        <button class="mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-500 rounded text-lg my-3"> Beställ </button>

      </form>
    </div>
  )
}
