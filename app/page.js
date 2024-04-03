import Image from "next/image";
import Navbar from "./components/MyNavBar";
import images from "../_dummyData/images.json"
import Product from "./components/Product";


export default function Home() {
  return (
    <main className="bg-white  text-gray-900">
      <Navbar></Navbar>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">

            {images.map((image) => (
              <div key={image.id}>
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
