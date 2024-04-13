"use client"
import React from 'react'
import MyNavBar from '@/app/components/MyNavBar'
import { useRouter } from 'next/navigation'
import cheesecakeOrders from "../../../../_dummyData/cheesecakeOrders.json"
import StyledHeading from '@/app/components/StyledHeading'
import Image from 'next/image'
import StyledInputDefaultValue from '@/app/components/StyledInputDefaultValue'


export default function OneCheesecakeOrder({ params }) {
  const router = useRouter()
  const order = cheesecakeOrders.find((cake) => cake._id = params.id)
  return (
    <div>
      <div className='bg-white text-gray-700'>
        <MyNavBar />
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <p class="mb-8 leading-relaxed">

                <StyledHeading text={'Beställare'} />
                <StyledInputDefaultValue
                  type={'text'}
                  name={'name'}
                  htmlFor={'name'}
                  defaultValue={`${order.name}`}
                  lableText={'Namn: '}
                />

                <StyledInputDefaultValue
                  type={'text'}
                  name={'surname'}
                  htmlFor={'surname'}
                  defaultValue={`${order.surname}`}
                  lableText={'Efternamn: '}
                />
                <StyledInputDefaultValue
                  type={'text'}
                  name={'phonenr'}
                  htmlFor={'phonenr'}
                  defaultValue={`${order.phonenr}`}
                  lableText={'Mobil nummer: '}
                />
                <StyledInputDefaultValue
                  type={'text'}
                  name={'epost'}
                  htmlFor={'epost'}
                  defaultValue={`${order.epost}`}
                  lableText={'E-post: '}
                />

                <StyledInputDefaultValue
                  type={'text'}
                  name={'leveransadress'}
                  htmlFor={'leveransadress'}
                  defaultValue={`${order.leveransadress}`}
                  lableText={'Leveransadress: '}
                />

                <br></br>
                <StyledHeading text={'Cheesecake info'} />
                <p>Beställningsnummer: {params.id}</p>
                <StyledInputDefaultValue
                  type={'text'}
                  name={'taste'}
                  htmlFor={'taste'}
                  defaultValue={`${order.taste}`}
                  lableText={'Smak: '}
                />

                <StyledInputDefaultValue
                  type={'text'}
                  name={'cupcakeAmount'}
                  htmlFor={'cupcakeAmount'}
                  defaultValue={`${order.cupcakeAmount}`}
                  lableText={'Antal cupcakes: '}
                />

                <StyledInputDefaultValue
                  type={'text'}
                  name={'price'}
                  htmlFor={'price'}
                  defaultValue={`${order.price}`}
                  lableText={'Pris: '}
                />

                <label className='text-gray-900'>Önskad Leveransdatum:</label>
                <br></br>
                <input type="date" id="leveransdatum" defaultValue={order.leveransdatum} name='leveransdatum' className='border rounded border-gray-700 text-gray-900' />
                <p>Önskad design av kund finns till höger.</p>
              </p>

              <div class="flex justify-center">
                <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Gå tillbaka</button>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Redigera</button>
                <button class="ml-4 inline-flex text-gray-700 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-200 rounded text-lg">Radera</button>

              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image alt={'cake'} src={order.design} width={720} height={600} class="object-cover object-center rounded" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}