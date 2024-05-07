import Image from 'next/image'
import React from 'react'


export default function Product({ alt, src, cost, category, description }) {
  return (
    <div>
      <div className=" p-4 w-full">
        <a className="block relative h-48 w-48 rounded overflow-hidden">
          <img alt={alt} className="object-cover object-center w-full h-full block" src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/image/${src}`} width={500} height={500} />

        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{description}</h2>
          <p className="mt-1">{cost}</p>
        </div>
      </div>
    </div>
  )
}
