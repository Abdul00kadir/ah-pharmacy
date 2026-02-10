import Image from "next/image";
import HeroSlider from "@/components/HeroCarousel";
import FeaturedProducts from "@/components/FeaturedProducts";
import { fetchProducts } from "@/lib/fetchProduct";

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

  return (
    <>
    <div className="">
      <HeroSlider />
      <FeaturedProducts products={products} />

     <div className="flex gap-0 md:gap-15 md:justify-center overflow-x-auto dark:bg-gray-800 px-4 py-6 scrollbar-hide scrollbar-thin scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-700">
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







     </div>
    </>
  );
}



// <div className="flex gap-6 overflow-x-auto px-4 py-6 scrollbar-hide">
//   {items.map((item) => (
//     <div
//       key={item.title}
//       className="flex-shrink-0 w-[120px] text-center"
//     >
//       <div className="mx-auto w-24 h-32 rounded-full overflow-hidden bg-gray-200">
//         <img
//           src={item.image}
//           alt={item.title}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <p className="mt-3 text-sm font-medium">
//         {item.title}
//       </p>
//     </div>
//   ))}
// </div>
