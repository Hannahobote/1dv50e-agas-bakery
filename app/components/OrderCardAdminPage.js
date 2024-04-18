import React from "react"
import Link from "next/link"

export default function OrderCardAdminPage({ data, category, href, status }) {
  return (
    <div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">{category}</span>
          <span class="mt-1 text-gray-500 text-sm">{data.leveransdatum}</span>
          <span class="inline-block rounded text-indigo-500 text-xs font-medium tracking-widest">{status}</span>
        </div>
        <div class="md:flex-grow">

          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{data.name} {data.surname}</h2>

          <Link href={`../order/${href}/${data._id}`} class="text-pink-500 inline-flex items-center mt-4">Se beställning
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>

        </div>
      </div>
    </div>
  )
}
