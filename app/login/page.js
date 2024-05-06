"use client"
import React, { useContext, useState } from 'react'
import MyNavBar from '../components/MyNavBar'
import StyledInput from '../components/StyledInput'
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import TokenContext from '../components/context/TokenContext';


export default function Login() {
  const router = useRouter();
  const token = useContext(TokenContext)

  async function handleSubmit(event) {
    event.preventDefault()

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    if (!res.ok) {
      router.push(`../error/${res.status}`)
    } else {
      token.setToken(await res.json())
      router.push('/admin')
      alert('Du kommer att bli automatiskt utloggad efter 10 minuter.')
    }
  }


  return (
    <div className='bg-white'>
      <MyNavBar></MyNavBar>
      <form onSubmit={handleSubmit} class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">Agas Bakery employee page</h1>
            <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>

            <StyledInput className="border-gray-300"
              type={'text'}
              htmlFor={'username'}
              name={'username'}
              lableText={'Username:'}
            />

            <StyledInput className="border-gray-300"
              type={'password'}
              htmlFor={'password'}
              name={'password'}
              lableText={'Password:'}
            />

            <br></br>
            <button class="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Sign in</button>
            <p class="text-xs text-gray-500 mt-3">Contact administrator if you cant sign in.</p>
          </div>
        </div>
      </form>
    </div>
  )
}
