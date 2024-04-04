import React from 'react'

export default function StyledInput({ htmlFor, type, name, lableText }) {
  return (
    <div>
      <label htmlFor={htmlFor} class="leading-7 text-sm text-gray-900" > {lableText} </label>
      <input type={type} name={name} className="w-full bg-white rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
    </div>
  )
}
