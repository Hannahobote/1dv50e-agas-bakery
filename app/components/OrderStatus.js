import React from 'react'

export default function OrderStatus({defaultValue}) {
  return (
    <div>
      <br></br>
      <label className='text-gray-900'>Status:</label>
      <select defaultValue={defaultValue} class="select" name="status" id="status" className="w-full bg-white  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2">
        {['Beställning mottagen', 'Beställning tillverkas', 'Beställning levererad'].map((status, index) => (
          <option key={index} value={status}> {status} </option>
        ))}
      </select>
    </div>
  )
}
