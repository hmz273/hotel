"use client"
import React, { useEffect, useState } from 'react';
import CalendrierPrix from "../../public/api/CalendrierPrix.json"


const Hero = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleAdultsChange = (e) => {
    setAdults(e.target.value);
  };

  const handleChildrenChange = (e) => {
    setChildren(e.target.value);
  };
  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearching(true)

    console.log('Check-in Date:', checkInDate, 'Check-out Date:', checkOutDate, 'adults:', adults, 'children:', children);
  };
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(CalendrierPrix.response.bestprice);
    }, 2000); 
  }, []);
  

  return (
    <section id="Home" className="static z-0">
      <div id="default-carousel" className="mx-auto relative w-full" data-carousel="slide">
        <div className="relative xs:h-56 md:h-dvh overflow-hidden">
          {/* <!-- Item 1 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://pics.uncubus.tech/images/11242/upload/1500X770/5e7caa18ac4a59cfbca0a24fc5cffe74.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
          {/* <!-- Item 2 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://pics.uncubus.tech/images/11242/upload/1500X770/5e7caa18ac4a59cfbca0a24fc5cffe74.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
          {/* <!-- Item 3 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://pics.uncubus.tech/images/11242/upload/1500X770/5e7caa18ac4a59cfbca0a24fc5cffe74.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
          {/* <!-- Item 4 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://pics.uncubus.tech/images/11242/upload/1500X770/5e7caa18ac4a59cfbca0a24fc5cffe74.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
          {/* <!-- Item 5 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://pics.uncubus.tech/images/11242/upload/1500X770/5e7caa18ac4a59cfbca0a24fc5cffe74.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
        </div>
      </div>

      <div className="flex md:z-30 absolute bottom-6 left-6 bg-purple-100 p-8 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl dark:text-white">Price Match, Made Simple</h1>
          <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">Check-in Date:</label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={handleCheckInChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-purple-50 focus:ring-purple-500"
            required
          />

          <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">Check-out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={handleCheckOutChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-purple-50 focus:ring-purple-500"
            required
          />
          <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
            Adults:
          </label>
          <input
            type="number"
            id="adults"
            name="adults"
            min="1"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-purple-50 focus:ring-purple-500"
            value={adults}
            onChange={handleAdultsChange}
            required
          />
          <label htmlFor="children" className="block text-sm font-medium text-gray-700">
            Children:
          </label>
          <input
            type="number"
            id="children"
            name="children"
            min="0"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-purple-50 focus:ring-purple-500"
            value={children}
            onChange={handleChildrenChange}
          />
          <button type="submit" className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700">
            Search Rooms
          </button>
        </form>
{isSearching ? (
        <div className="flex flex-col">
        
<div className="block mb-4 ml-6 max-w-sm h-56 w-72 p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800 dark:text-white">Starting price taxes and fees included</h5>
<div className="my-6 flex items-center justify-between">
<span className="text-gray-600 font-medium text-sm text-center">{data?.ota}</span>
            <span className="text-gray-600 font-medium text-sm text-center">{data?.ttc} {data?.currency}</span>
        </div>
        <button type="submit" className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Snapshot proof</button>

</div>
<div className="block ml-6 max-w-sm h-56 w-72 p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800 pb-4 dark:text-white text-center">Book Direct</h5>
<p className="font-normal  text-gray-700 dark:text-gray-400 text-center my-2 line-through">{data?.ttc_without_promo} {data?.currency}</p>
<p className="font-normal text-2xl text-gray-700 dark:text-gray-400 text-center my-2">{data?.ttc} {data?.currency}
</p>
</div>
        </div>
) : (<div></div>)}
      </div>
    </section>
  );
};

export default Hero;
