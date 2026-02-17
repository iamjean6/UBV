import { useState,useEffect } from 'react';
import { merch } from '../../constants';
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Merch = () => {
    const [liked, setLiked] = useState({});
    const [burst, setBurst] = useState(null);
    const [products, setProducts] = useState(merch);
    const [sortBy, setSortBy] = useState("Featured");
    const [availability, setAvailability] = useState("All");
    const [priceRange, setPriceRange] = useState("All");
    const applyFiltersAndSort = () => {
  let updated = [...merch];

  // 🔹 Availability Filter
  if (availability === "In Stock") {
    updated = updated.filter(p => p.inStock === true);
  }

  // 🔹 Price Filter
  if (priceRange === "Under 50") {
    updated = updated.filter(p => p.priceValue < 50);
  }
  if (priceRange === "50-100") {
    updated = updated.filter(p => p.priceValue >= 50 && p.priceValue <= 100);
  }

  // 🔹 Sorting
  switch (sortBy) {
    case "Price, High to low":
      updated.sort((a, b) => b.priceValue - a.priceValue);
      break;
    case "Price, Low to High":
      updated.sort((a, b) => a.priceValue - b.priceValue);
      break;
    case "Alphabetically, A to Z":
      updated.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "Alphabetically, Z to A":
      updated.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  setProducts(updated);
};

useEffect(() => {
  applyFiltersAndSort();
}, [sortBy, availability, priceRange]);


  return (
    <div id="merch" className='min-h-screen w-full overflow-hidden bg-gray-100'>
      <div className='relative h-64 md:h-80 lg:h-96 '>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(img/shop.jpg)'}}>
        <div className='absolute inset-0 bg-black-50'></div>
         <div className="relative z-10 flex flex-row items-center justify-center h-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-zentry uppercase">
                GET OUR MERCH
            </h1>
           
            </div>
            
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between px-8 py-6 bg-white border-b text-sm">

  {/* LEFT SIDE */}
  <div className="flex items-center gap-6">
    
    <div className="flex items-center gap-2">
      <span className="text-gray-500">Filter:</span>
      
      <select
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        className="bg-transparent outline-none cursor-pointer"
      >
        <option value="All">Availability</option>
        <option value="In Stock">In Stock</option>
      </select>

      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="bg-transparent outline-none cursor-pointer"
      >
        <option value="All">Price</option>
        <option value="Under 50">Under 50</option>
        <option value="50-100">50 - 100</option>
      </select>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex items-center gap-6">

    <div className="flex items-center gap-2">
      <span className="text-gray-500">Sort by:</span>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-transparent outline-none cursor-pointer"
      >
        <option value="Featured">Featured</option>
        <option value="Best Selling">Best Selling</option>
        <option value="Price, High to low">Price, High to low</option>
        <option value="Price, Low to High">Price, Low to High</option>
        <option value="Alphabetically, A to Z">Alphabetically, A to Z</option>
        <option value="Alphabetically, Z to A">Alphabetically, Z to A</option>
      </select>
    </div>

    <span className="text-gray-400">
      {products.length} products
    </span>

  </div>
</div>

       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  px-8 py-16'> 
        {products.map((merch)=>{
            return( <div className='flex flex-col'>
                <div className='relative w-full h-full bg-gray-100 overflow-hidden'>
                <img
                src={merch.img}
                alt={merch.alt}
                className='w-full h-full object-cover'
                
                />
                <button
                onClick={() =>{
                     setLiked(prev => ({
                        ...prev,
                        [merch.id]: !prev[merch.id]
                    }))
                    setBurst(merch.id);
                    setTimeout(() => setBurst(null), 600);
                }   
                }
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition"
                >
                    {liked[merch.id] ? (
                        <FaHeart className="text-red-500 text-2xl animate-ping-once" />
                    ) : (
                    <FiHeart className="text-gray-800 text-2xl" />
                    )}
                    </button>
                    {burst === merch.id && (
                        <FaHeart className="absolute bottom-10 right-5 text-red-500 text-xl animate-float" />
                        )}


            </div>
            <div className='mt-4 space-y-1'>
                <h3 className='text-lg font-zentry font-bold'>
                    {merch.name}
                </h3>
                <p className='text-sm text-gray-600'>
                    {merch.price}
                </p>
            </div> 
            <Link to={`/shop/${merch.id}`}>
              <button className="mt-4 w-full hover:cursor-pointer border border-gray-900 py-3 text-sm uppercase tracking-wide hover:bg-gray-900 hover:text-white transition">
                Choose options
            </button>
            </Link>
            </div>)
        })}
      </div>
    </div>
  );
};

export default Merch;