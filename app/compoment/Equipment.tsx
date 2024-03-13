"use client"
import React, { useEffect, useState } from 'react'
import siteInfo from "../../public/api/SiteInfo.json"
import tradEn from "../../public/api/TradEn.json"
import AccordionItem from './AccordionItem';

const Equipment = () => {
  


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
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      className="my-6 py-10 mx-auto max-w-screen-xl"
    >
      <div className="mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-violet-700 dark:text-white">
          Equipements
        </h2>
      </div>
      {isLoading ? (
          <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div>
          {data && data.facilities.map((fcType, index) => (
            <AccordionItem
              key={index}
              title={trdata.translations.en.FacilitiesType[fcType.ftId + "-titer"]}
              content={fcType.facilities}
              index={index}
              trdata={trdata}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Equipment