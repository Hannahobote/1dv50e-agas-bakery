import React from 'react'

export default function StyledHeading({text}) {
  return (
    <h3 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-2 mb-2">
      {text}
    </h3>
  )
}
