"use client"
import MyNavBar from '@/app/components/MyNavBar'
import PersonalInfoOrder from '@/app/components/PersonalInfoOrder'
import StyledHeading from '@/app/components/StyledHeading'
import { useRouter } from 'next/navigation'
import React from 'react'



export default function CakeOrder() {
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
    formData.append('taste', event.target.taste.value);
    formData.append('filling', event.target.filling.value);
    formData.append('design', event.target.file.files[0]);
    formData.append('status', 'Beställning mottaget');
    formData.append('category', 'cake');

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order/cake`, {
      method: 'POST',
      body: formData
    });

    if (!res.ok) {
      // Handle the case where the response is not successful
      console.error('Error:', res.status, res.statusText);
      // Log the response body if it's not valid JSON
      const responseBody = await res.text();
      console.error('Response body:', responseBody);
      // You can then handle the error message or response content accordingly
    } else {
      const responseData = await res.json();
      console.log('Order added:', responseData);
      router.push(`/order/cake/${responseData._id}`)
      // Handle successful response
    }
  }


  const taste = ['Vanilj', 'Chokolad', 'Red velvet', 'Ombre', 'Citron', 'Morotskaka']

  const filling = ['Mousee (päron)', 'Mousse (hallon)', 'Mousse (chokolad)', 'Vaniljsås', 'Sylt', 'Färsk frukt', 'Caramel', 'Nutella', 'Biscoff']

  return (
    <div className='bg-white text-gray-900 body-font'>
      <MyNavBar />
      <StyledHeading text={'Beställ en tårta'} />
      <form onSubmit={sendOrder} enctype="multipart/form-data">

        <label htmlFor="taste">Välj smak på tårtbotten:</label>
        <select name="taste" id="taste" className="select w-full bg-white  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">

          {taste.map((taste, index) => (
            <option key={index} value={taste}> {taste} </option>
          ))}
        </select>

        <label htmlFor="filling">Välj filling:</label>
        <select name="filling" id="filling" className="select w-full bg-white  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">

          {filling.map((filling, index) => (
            <option key={index} value={filling}> {filling} </option>
          ))}
        </select>

        <br></br>
        <br></br>
        <label >Design idé för tårtans topp:</label>
        <br></br>
        <input type="file" id="fileInput" name='file' />


        <PersonalInfoOrder />

        <p>Observera att vi inte har några fasta priser på våra tårtor. En faktura kommer att skickas till dig när din tårta är färdig. För att få en uppfattning om kostnaden kan du ta en titt på exempelpriserna på vår startsida.</p>


        <button className="mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-500 rounded text-lg my-3"> Beställ </button>

      </form>
    </div>
  )
}
