"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import RoomModel from "./RoomModel";
import siteInfo from "../../public/api/SiteInfo.json"
import tradEn from "../../public/api/TradEn.json"
const Rooms = async() => {
  
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);
  const [trdata, setTrData] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(siteInfo); 
      setTrData(tradEn); 
      setIsLoading(false);
    }, 2000); 
  }, []);


  return (


    <section id="Rooms" className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-violet-700 dark:text-white">
          Our Best Rooms
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            explicabo nam tenetur, at quisquam soluta cumque laborum sint
            possimus dolorem ratione consequuntur. Earum labore, molestiae
            voluptatem nisi quos minus ipsum?
          </p>
        </div>
        {isLoading ? (
      
<div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div className="flex items-center mt-4">
       <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
    <span className="sr-only">Loading...</span>
</div>

    ) : (
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
        {data && data.chamber.map((room, index) => (

          <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              
            <div>
              <img
                className="pb-4 rounded-t-lg"
                src={`https://pics.uncubus.tech/images/11242/upload/500X257/${room.img[0]}`}
                alt="product image"
              />
            </div>

            <div className="px-5 pb-5">
              <div>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                   {trdata.translations.en.Chamber[room.id+"-titer"]}
                </h5>
                <p className="text-base text-left leading-relaxed text-gray-500 dark:text-gray-400">
                {trdata.translations.en.Chamber[room.id+"-description"].replace(/<[^>]+>/g, '').length > 100 ? trdata.translations.en.Chamber[room.id+"-description"].replace(/<[^>]+>/g, '').substring(0, 100) + '...' : trdata.translations.en.Chamber[room.id+"-description"].replace(/<[^>]+>/g, '')}
                        </p>
              </div>
              <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-900 dark:text-white">
                            
                          </span>
                {/* <!-- Modal toggle --> */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  
                  <button
                    data-modal-target="extralarge-modal"
                    data-modal-toggle="extralarge-modal"
                    type="button"
                  >
                    Read More
                  </button>
                </div>

                {/* <!-- Main modal --> */}
                <RoomModel room={room} trrooms={trdata.translations.en.Chamber}/>
              </div>
            </div>
          </div>
          
        ))}
        </div>
        )}
      </div>
    </section>
  );
};


export default dynamic(() => Promise.resolve(Rooms), { ssr: false });
