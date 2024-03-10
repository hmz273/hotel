"use client"
import React, { useEffect, useState } from 'react';
import Tabs from './Tabs';
import SiteInfo from "../../public/api/SiteInfo.json"

const App = () => {
  

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(SiteInfo.comments);
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <section className="w-full mt-24 mx-auto max-w-screen-xl">
      <div className=" mb-8 max-w-screen-sm lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-violet-700 dark:text-white">
          Our Clients
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          explicabo nam tenetur, at quisquam soluta cumque laborum sint
        </p>
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
      <Tabs data={data} />
      )}
    </section>
  );
};

export default App;
