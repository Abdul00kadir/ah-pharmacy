
export default function ProductCard({ product }) {
  return (

  <div className="p-3 shadow-2xl md:shadow md:hover:shadow-2xl md:hover:bg-gray-200 dark:shadow-black dark:bg-gray-800 rounded-2xl  overflow-hidden
         md:transform transition duration-300
         md:hover:-translate-y-2 md:hover:scale-105">
    <div className="">
      <img className="rounded-t-2xl md:h-fit" src={product.image} alt={product.name} />
    </div>
    <div className="flex flex-col items-center text-center justify-center mt-3 mb-3">
      <div>
        <h2 className="font-bold text-[18px]  text-gray-800 dark:text-gray-300">{product.name}</h2>
      </div>
      <div className="flex flex-col text-center justify-center items-center px-4 pb-0 mb-0">
        <p className="text-gray-800 dark:text-gray-200 font-extrabold ">From ₹{product.price}</p>
        <p className="text-sm text-gray-600 dark:text-gray-500">{product.description}</p>

      </div>
    </div>

 
  </div>
  

  
  )
}

