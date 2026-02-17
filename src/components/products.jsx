import { useParams } from "react-router-dom";
import { merch } from "../../constants";
import { FiHeart } from "react-icons/fi";
import { FaHeart, FaShare, FaTruck } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom'

const ProductPage = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
   const [liked, setLiked] = useState({});
    const [burst, setBurst] = useState(null);

  const product = merch.find(item => String(item.id) === String(id));
  const [activeImage, setActiveImage] = useState(product.img);
  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Product not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

         
          <div className="flex gap-4">
            
            <div className="flex flex-col gap-3">
             {product.images?.map((img, index) => (
  <img
    key={index}
    src={img}
    alt={product.name}
    onClick={() => setActiveImage(img)}
    className="w-20 h-20 object-cover cursor-pointer border hover:border-black"
  />
))}

            </div>

           
            <div className="flex-1 bg-gray-100">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <p className="text-xl text-gray-600">
                    {product.name}
                </p>
                <FaShare className="text-xl cursor-pointer hover:text-gray-700 transition" />

            </div>
        
            <div className="space-y-1">
              <p className="text-2xl font-semibold">{product.price}</p>
              {product.notice && (
                  <div className="inline-flex items-center text-xs px-3 py-2 bg-blue-100 text-blue-700 rounded">
                        {product.notice}
                        </div>
              )}
            </div>

            {/* Colour */}
            {product.colors && (
              <div className="space-y-2">
                <div className="flex gap-3 items-center">
                <p className="text-sm font-extrabold">Colour :</p>
                
                  {product.colors.map((color, index) => (
                    <p
                      key={index}
                      className="px-3 py-1 uppercase text-lg font-medium text-gray-600"
                    >
                      {color}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Size */}
            {product.sizes && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <label htmlFor="size">Size</label>
                  <a href="#" className="underline">Size Guide</a>
                </div>

                <select
                  id="size"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full border px-3 py-2"
                >
                  <option value="">Select size</option>
                  {product.sizes.map(size => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 mt-6">
              <button
                disabled={!selectedSize}
                className={`flex-1 py-4 text-sm font-medium uppercase tracking-wide transition
                  ${
                    selectedSize
                      ? "bg-blue-800 text-white hover:bg-orange-600 hover:cursor-pointer"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                Add to Bag
              </button>

              <button
                aria-label="Add to wishlist"
                className="w-14 flex items-center justify-center border border-gray-300 hover:border-black transition hover:cursor-pointer"
              >
                <FaHeart />
              </button>
            </div>

            
            <div className="flex items-start gap-3 mt-6 text-sm border p-4">
              <FaTruck className="mt-1" />
              <div className="space-y-1">
                <p>Free delivery on qualifying orders.</p>
                <div className="flex flex-col gap-2">
                  <a href="#" className="underline">Please read our return and refund policies</a>
                  <a href="#" className="underline text-sm">Shipping restrictions</a>
                </div>
              </div>
            </div>

          
            <div className="mt-8 border-t divide-y">

              <details className="group py-4">
  <summary className="flex justify-between items-center cursor-pointer list-none">
    <span className="text-sm font-medium transition-colors duration-200 group-open:text-orange-500">
      Size & Fit
    </span>
    <span className="transition group-open:rotate-45">+</span>
  </summary>

  {product.sizeFit && product.sizeFit.length > 0 ? (
    <ul className="mt-3 text-xl text-gray-600 leading-relaxed list-disc list-inside">
      {product.sizeFit.map((item, index) => {
        const key = Object.keys(item)[0];
        const value = item[key];
        return (
          <li key={index}>
            <span className="font-semibold">{key}:</span> {value}
          </li>
        );
      })}
    </ul>
  ) : (
    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
      Details coming soon.
    </p>
  )}
</details>


              <details className="group py-4 pb-16">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-sm font-medium transition-colors duration-200 group-open:text-orange-500">

                    Product Details
                  </span>
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </details>
            </div>
          </div>
        </div>
      <div className="mt-20 mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="border-t border-gray-200"></div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mb-4">
           <h2 className="text-xl md:text-2xl font-semibold tracking-wide uppercase">
            You may also like
            </h2>
          </div>
        <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 px-16 py-12">
           {merch.map((merch)=>{
            return(
               <div className='flex flex-col group'>
            <div className="relative w-full h-[250px] bg-gray-100 overflow-hidden">

  <a
    href={`/shop/${merch.id}`}
    target="_parent"
    rel="noopener noreferrer"
  >
    <img
      src={merch.img}
      alt={merch.alt}
      className="w-full h-full object-cover transition duration-500 hover:scale-105"
    />
  </a>

  {/* Wishlist Button */}
  <button
    onClick={() => {
      setLiked(prev => ({
        ...prev,
        [merch.id]: !prev[merch.id]
      }));
      setBurst(merch.id);
      setTimeout(() => setBurst(null), 600);
    }}
    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition"
  >
    {liked[merch.id] ? (
      <FaHeart className="text-red-500 text-xl" />
    ) : (
      <FiHeart className="text-gray-800 text-xl" />
    )}
  </button>

</div>


           <div className="mt-4 space-y-1">
  <Link to={`/shop/${merch.id}`}>
    <h3 className="text-sm font-bold font-zentry hover:underline">
      {merch.name}
    </h3>
  </Link>

  <p className="text-sm text-gray-600">
    {merch.price}
  </p>
</div>
   
            </div>)
        })}
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
