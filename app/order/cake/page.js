"use client"
import MyNavBar from '@/app/components/MyNavBar'
import PersonalInfoOrder from '@/app/components/PersonalInfoOrder'
import StyledHeading from '@/app/components/StyledHeading'
import React, { useEffect, useState, useMemo } from 'react'


export default function CakeOrder() {
  async function sendOrder(event) {
    event.preventDefault()
    const data = {
      name: event.target.name.value,
      surname: event.target.surname.value,
      phonenr: event.target.phonenr.value,
      adress: event.target.adress.value,
      leveransadress: event.target.adress.value,
      taste: event.target.taste.value,
      filling: event.target.filling.value,
      file: event.target.file.value
    }

    console.log(data)
  }

  const taste = ['Vanilj', 'Chokolad', 'Red velvet', 'Ombre', 'Citron', 'Morotskaka']

  const filling = ['Mousee (päron)', 'Mousse (hallon)', 'Mousse (chokolad)', 'Vaniljsås', 'Sylt', 'Färsk frukt', 'Caramel', 'Nutella', 'Biscoff']

  return (
    <div className='bg-white text-gray-900 body-font'>
      <MyNavBar />
      <StyledHeading text={'Beställ en tårta'} />
      <form onSubmit={sendOrder}>

        <label htmlFor="taste">Välj smak på tårtbotten:</label>
        <select class="select" name="taste" id="taste" className="w-full bg-white  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">

          {taste.map((taste, index) => (
            <option key={index} value={taste}> {taste} </option>
          ))}
        </select>

        <label htmlFor="filling">Välj filling:</label>
        <select class="select" name="filling" id="filling" className="w-full bg-white  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">

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
        <button class="mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-500 rounded text-lg my-3"> Beställ </button>

      </form>
    </div>
  )
}
