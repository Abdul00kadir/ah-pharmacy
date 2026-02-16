import Image from "next/image";
import HeroSlider from "@/components/HeroCarousel";
import FeaturedProducts from "@/components/FeaturedProducts";
import { fetchProducts } from "@/lib/fetchProduct";
import Combo from "@/components/Combo";
export default async function Home() {
  const products = await fetchProducts(); 
  const tretmentCategories = [
    { name: "Immunity", image: "/icon/immunity.jpg" },
    { name: "Digestive Health", image: "/icon/digestive.jpg" },
    { name: "Pain Relief", image: "/icon/pain.png" },
    { name: "Clear Skin", image: "/icon/skin.png" },
    { name: "Cardiac Wellness", image: "/icon/cardiac.png" },
    { name: "Blood Purifier", image: "/icon/blood.png" },
  ];

  const quality = [
    { name: "Natural Herbs", image: "/icon/mortar.png"},
    { name: "No Added Suger", image: "/icon/sugar-free.png"},
    { name: "GMP Certified", image: "/icon/stamp.png"},
    { name: "No Extracts Used", image: "/icon/no-oil.png"},
    { name: "No Artificial Colours Or Flavours", image: "/icon/chemical-free.png"},
    { name: "BPA Free" , image: "/icon/bpa-free.png"},


  ]

  return (
    <>
    <div className="">
      <HeroSlider />
      <FeaturedProducts products={products} />

     <div className="flex gap-0 bg-gray-100 md:gap-15 md:justify-center overflow-x-auto dark:bg-gray-800 px-4 py-6 scrollbar-hide scrollbar-thin scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-700">
  {tretmentCategories.map((cat) => (
    <div
      key={cat.name}
      className="flex-shrink-0 w-[120px] md:w-[160px] flex flex-col items-center text-center"
    >
      {/* Image */}
      <div className="mx-auto w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden 
                      bg-gray-200 dark:bg-gray-900">
        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <p className="mt-3 w-full text-sm md:text-base font-medium leading-snug
                    text-gray-800 dark:text-gray-200 md:hover:text-[#0b5431] cursor-pointer">
        {cat.name}
      </p>
    </div>
  ))}
</div>
  <Combo products={products} />

  <div className="py-10 text-center flex justify-center items-center text-gray-500 dark:text-gray-400">
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white shadow-2xl dark:bg-gray-600 md:bg-gray-100 rounded-2xl p-1">
        Finest Natural Remedies, Delivered to Your Doorstep
      </h2>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Experience the power of nature with our premium herbal products, crafted to enhance your well-being and promote a healthier lifestyle.
      </p>
    </div>
  </div>
  <div>

    
     <div className="flex gap-0 bg-gray-100 md:gap-15 md:justify-center overflow-x-auto dark:bg-gray-800 px-4 py-6 scrollbar-hide scrollbar-thin scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-700">
  {quality.map((cat) => (
    <div
      key={cat.name}
      className="flex-shrink-0 w-[120px] md:w-[160px] flex flex-col items-center mb-0 b-0 text-center"
    >
      {/* Image */}
      <div className="mx-auto w-24 h-24 md:w-20 md:h-20 rounded-full overflow-hidden 
                      bg-gray-200 dark:bg-gray-900">
        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <p className="mt-3 w-full text-sm md:text-base font-medium leading-snug
                    text-gray-800 dark:text-gray-200 md:hover:text-[#0b5431] cursor-pointer">
        {cat.name}
      </p>
    </div>
  ))}
</div>
  </div>









     </div>
    </>
  );
}




