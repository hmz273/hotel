"use client"
import React, { useEffect, useState } from 'react'
import siteInfo from "../../public/api/SiteInfo.json"
import tradEn from "../../public/api/TradEn.json"

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
          className="my-6 py-10 mx-auto max-w-screen-xl"
          id="accordion-collapse"
          data-accordion="collapse"
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
          ) : ( <div>
          {data && data.facilities.map((fcType, index) => (

          <>
          <h2 id={`accordion-collapse-heading-${fcType.ftId}`} >
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                data-accordion-target={`#accordion-collapse-body-${fcType.ftId}`}
              aria-expanded="true"
              aria-controls={`accordion-collapse-body-${fcType.ftId}`}
              >
                <span>{trdata.translations.en.FacilitiesType[fcType.ftId+"-titer"]}</span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
               id={`accordion-collapse-body-${fcType.ftId}`}
               className="hidden"
               aria-labelledby={`accordion-collapse-heading-${fcType.ftId}`}
            >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                {fcType && fcType.facilities.map((fcDetails, index) => (
                  <p key={index} className="mb-2 text-gray-500 dark:text-gray-400">
                    {trdata.translations.en.Facilities[fcDetails.fcId+"-titer"]}
                  </p>
                  ))}
                </div>
              </div></>
            ))}
</div>)}
        </section>
  )
}

export default Equipment