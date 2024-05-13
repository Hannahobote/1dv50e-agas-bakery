"use client"
import Navbar from "./components/MyNavBar";
import images from "../_dummyData/images.json"
import Product from "./components/Product";
import { useContext, useEffect, useState } from "react";
import TokenContext from "./components/context/TokenContext";
import { useRouter } from 'next/navigation'




export default function Home() {
  //const token = useContext(TokenContext)
  //const [images, setImages ] = useState([])
  // const router = useRouter()

  /*useEffect(() => {
    async function fetchApi() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/image`, {
        headers: { 'Authorization': `Bearer ${token.token.accessToken}` }
      })
      if (!res.ok) {
        router.push(`./error/${res.status}`)
      } else {
        setImages(await res.json())
      }
    }

    fetchApi()
  }, [token.token.accessToken, router])*/


  return (
    <main className="bg-white  text-gray-900">
      <Navbar></Navbar>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">

            {images.map((image, index) => (
              <div key={index}>
                <Product
                  alt={image.name}
                  src={image.image}
                  cost={image.cost}
                  category={image.category}
                  description={image.description}
                />
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}
