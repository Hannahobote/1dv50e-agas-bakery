"use client"
import MyNavBar from '@/app/components/MyNavBar'
import PersonalInfoOrder from '@/app/components/PersonalInfoOrder'
import StyledHeading from '@/app/components/StyledHeading'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState, useMemo } from 'react'



export default function CheesecakeOrder() {
  const router = useRouter()

  async function sendOrder(event) {
    event.preventDefault()
    const formData = new FormData();
    formData.append('name', event.target.name.value);
    formData.append('surname', event.target.surname.value);
    formData.append('phonenr', event.target.phonenr.value);
    formData.append('epost', event.target.epost.value);
    formData.append('delivery_adress', event.target.delivery_adress.value);
    formData.append('delivery_date', event.target.delivery_date.value);
    formData.append('amount', event.target.amount.value);
    formData.append('taste', event.target.taste.value);
    formData.append('design', event.target.file.files[0]);
    formData.append('price', finalPrice);
    formData.append('status', 'Beställning mottaget');
    formData.append('category', 'cake');

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order/cheesecake`, {
      method: 'POST',
      body: formData
    });

    if (!res.ok) {
      // Handle the case where the response is not successful
      console.error('Error:', res.status, res.statusText);
      // Log the response body if it's not valid JSON
      const responseBody = await res.text();
    } else {
      const responseData = await res.json();
      console.log('Order added:', responseData);
      router.push(`/order/cheesecake/${responseData._id}`)
    }
  }
  const cheesecakeData = useMemo(() => [
    {
      amount: 8,
      cost: 350,
    },
    {
      amount: 10,
      cost: 438,
    },
    {
      amount: 15,
      cost: 657,
    },
    {
      amount: 20,
      cost: 857,
    }
  ], [])

  const taste = ['Frukt', 'Biscoff', 'Choklad', 'Nötter']

  const [selectedAmount, setSelectedAmount] = useState(cheesecakeData[0].amount);
  const [finalPrice, setFinalPrice] = useState(cheesecakeData[0].cost);

  useEffect(() => {
    const selectedCupcake = cheesecakeData.find(cupcake => cupcake.amount === selectedAmount);
    if (selectedCupcake) {
      setFinalPrice(selectedCupcake.cost);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAmount, cheesecakeData]);

  return (
    <div className='bg-white text-gray-900 body-font'>

      <MyNavBar />
      <StyledHeading text={'Beställ Cheesecake'} />
      
      <form onSubmit={sendOrder}>
        <label htmlFor="amount">Välj antal bitar</label>
        <select onChange={(e) => setSelectedAmount(Number(e.target.value))} class="select" name="amount" id="amount" className="w-full bg-white  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">

          {cheesecakeData.map((cupcake) => (
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
        <label >Design idé för Cheesecake top:</label>
        <br></br>
        <input type="file" id="fileInput" name='file' />


        <PersonalInfoOrder />

        <p>Totala pris: {finalPrice}kr</p>

        <button class="mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-500 rounded text-lg my-3"> Beställ </button>

      </form>
    </div>
  )
}
