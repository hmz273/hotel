"use client"
import React, { useState } from 'react'

const Services = () => {

  const data = [
    {
      title: 'SPA',
      items: [
        {
          title: 'SPA',
          description: 'The Sirayane Spa welcomes you in a magnificent set with its colourful domes and oriental style atmosphere every day from 10am to 8pm. It offers, in addition to outdoor massages, different treatments for men and woman .',
          image: '170b30ac1f60313ebd728195cf8669e6.jpg',
        }
      ]
    },
    {
      title: 'DINING',
      items: [
        {
          title: 'BREAKFAST',
          description: 'Our breakfast buffet includes tea, coffee, hot chocolate, hot or cold milk, many  natural squeezed juices, a variety of pastries, fresh bread, cereals, fruit salad, fresh fruit, yogurt, toast, potato gratin, Merguez cooked with tomatoes and onions, cut fruit, tomatoes, cucumbers, carrots, cheese, meats, dried fruits, pancakes, boiled eggs, scrambled eggs, omelettes to choose from, different kinds of cakes, fruit tarts, different kinds of Moroccan pancakes, honey , jam, butter , chocolate...',
          image: '72734e8ce60d05465cb0633b4b43da75.jpg',
        }
      ]
    },
    {
      title: 'GENERAL',
      items: [
        {
          title: 'AIRPORT TRANSFER',
          description: 'The airport transfer with private driver costs 20 Euros per way for a maximum of 02 persons (please provide your flight details at confirmation in the comment box).',
          image: '5973be695b156f4427646aa3bae8a7c2.jpg',
        }
      ]
    },
    {
      title: 'EVENTS',
      items: [
        {
          title: 'Wedding & Events',
          description: 'If you want to celebrate your wedding, seminar, meeting or unforgettable special event, Sirayane Boutique Hotel & Spa is the perfect place for your needs.\nN.B: privatization possibility is on request.',
          image: 'b5101920d4f79f8d6ccbf044b962f915.jpg',
        }
      ]
    },
  ]


  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };












  return (
    <section id='Services' className="w-full my-6 mx-auto max-w-screen-xl">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-violet-700 dark:text-white">
              Our Services
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              explicabo nam tenetur, at quisquam soluta cumque laborum sint
              possimus dolorem ratione consequuntur. Earum labore, molestiae
              voluptatem nisi quos minus ipsum?
            </p>
          </div>

          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul
        className="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="default-tab"
        role="tablist"
      >
        {data.map((tab, index) => (
          <li key={index} className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === index
                  ? 'text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500'
                  : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => handleTabClick(index)}
              role="tab"
              aria-selected={activeTab === index}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div id="default-tab-content">
        {data.map((tab, index) => (
          <div
            key={index}
            className={`${
              activeTab === index ? '' : 'hidden'
            } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
          >
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {tab.items.map((item, i) => (
                <div key={i} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  
                    <img className="rounded-t-lg" src={`https://pics.uncubus.tech/images/11242/upload/500X257/${item.image}`} alt="" />
                  
                  <div className="p-5">
                    
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.title}
                      </h5>
                    
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.description.length > 100 ? item.description.substring(0, 150) + '...' : item.description.length}
                    </p>
                    <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      Read More
                      <button
                        data-popover-target="popover-description"
                        data-popover-placement="bottom-end"
                        type="button"
                      >
                        <svg
                          className="w-4 h-4 ms-2 text-gray-400 hover:text-gray-500"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Show information</span>
                      </button>
                    </p>
                    <div
                      data-popover
                      id="popover-description"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                    >
                      <div className="p-3 space-y-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Activity growth - Incremental
                        </h3>
                        <p>
                          Report helps navigate cumulative growth of community
                          activities. Ideally, the chart should have a growing
                          trend, as stagnating chart signifies a significant
                          decrease of community activity.
                        </p>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Calculation
                        </h3>
                        <p>
                          For each date bucket, the all-time volume of
                          activities is calculated. This means that activities
                          in period n contain all activities up to period n,
                          plus the activities generated by your community in
                          period.
                        </p>
                      </div>
                      <div data-popper-arrow></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

        </section>
  )
}

export default Services