"use client"
import React, { useState } from 'react';
import dayjs from 'dayjs'

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!data) {
    return null; 
  }

  return (
    
    <div className="container mx-auto">
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        {data && data.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 focus:outline-none ${
              activeTab === index ? 'text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500 text-sm font-medium text-center' : 'dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300 text-sm font-medium text-center'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.commentEngine}
          </button>
        ))}
      </div>
      <div className="mt-4">



      <div id="default-carousel" className="relative w-full" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
    {data.map((tab, index) => (
    <div key={index} className={activeTab === index ? '' : 'hidden '}>
        {tab.en.map((tb, tbIndex) => (
      <div key={tbIndex} className="duration-700 ease-in-out" data-carousel-item>
        
        <article className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-screen-md mx-auto" >
                  <div className="flex items-center mb-4">
                    <div className="font-medium dark:text-white">
                      <p>
                      {tb.commentName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{tb.commentNote}</p>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
                      {tb.commentTitre}
                    </h3>
                  </div>
                  <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the {tb.commentCountry} on {dayjs(`${tb.commentDate.date}`).format('YYYY-MM-DD HH:mm:ss')}</p></footer>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {tb.commentTextPost}
                  </p>
                </article>
        
      </div>
      ))}
      </div>
     ))}
     
    </div>

    {/* <!-- Slider indicators --> */}
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>


      </div>
    </div>
  );
};

export default Tabs;
