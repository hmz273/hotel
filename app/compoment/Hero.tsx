"use client"
import React, { useState } from 'react';

const Hero = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

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
    // Add logic to search available rooms and calculate total price
    console.log('Check-in Date:', checkInDate, 'Check-out Date:', checkOutDate, 'adults:', adults, 'children:', children);
  };

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
      </div>
    </section>
  );
};

export default Hero;
