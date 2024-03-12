"use client"
import React, { useEffect, useState } from 'react'
import images from "../../public/api/SiteInfo.json"

const Gallery = () => {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(images.etablissement.galreieimg);
      setIsLoading(false);
    }, 2000);
  }, []);
  

  return (
    
    <section data-aos="fade-up"
    data-aos-duration="3000" className="w-full my-6 mx-auto max-w-screen-xl">
          <div className=" mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-violet-700 dark:text-white">
              Gallery
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              explicabo nam tenetur, at quisquam soluta cumque laborum sint
            </p>
          </div>

          {isLoading ? (
        

<div role="status" className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
    <span className="sr-only">Loading...</span>
</div>

      ) : (
          
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
{data && data.map((img, index) => (
    <div key={index}>
    <img className="h-auto max-w-full rounded-lg" src={`https://pics.uncubus.tech/images/11242/upload/500X257/${img}`} alt="" />
  </div>
    ))}
</div>
)}

        </section>
  )
}

export default Gallery