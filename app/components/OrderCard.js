import Link from 'next/link'
import React from 'react'


export default function OrderCard({ href, productToOrder, ProductDescription }) {
  return (
    <div class="p-4 lg:w-1/3">
      <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{productToOrder}</h1>
        <p class="leading-relaxed mb-3">{ProductDescription}</p>
        <Link class="text-pink-500 inline-flex items-center" href={href}> Make an order
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}