import React from 'react'

const RoomModel = ({room, trrooms, onClose}) => {

  return (
    <div
                  tabIndex={-1}
                  aria-hidden="true"
                  className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      {/* <!-- Modal header --> */}
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Room Details
                        </h3>
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={onClose}
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      {/* <!-- Modal body --> */}
                      <div className="p-4 md:p-5 space-y-4">
                        <div
                          id="default-carousel"
                          className="relative w-full"
                          data-carousel="slide"
                        >
                          {/* <!-- Carousel wrapper --> */}
                          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                            {/* <!-- Item 1 --> */}
                            { room.img.map((pic, index)=>(
            
                            <div
                            key={index}
                              className="hidden duration-700 ease-in-out"
                              data-carousel-item
                            >
                              <img
                                src={`https://pics.uncubus.tech/images/11242/upload/500X257/${pic}`}
                                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                              />
                            </div>
            ))}
                            
                          </div>
                          {/* <!-- Slider indicators --> */}
                          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button
                              type="button"
                              className="w-3 h-3 rounded-full"
                              aria-current="true"
                              aria-label="Slide 1"
                              data-carousel-slide-to="0"
                            ></button>
                            <button
                              type="button"
                              className="w-3 h-3 rounded-full"
                              aria-current="false"
                              aria-label="Slide 2"
                              data-carousel-slide-to="1"
                            ></button>
                            <button
                              type="button"
                              className="w-3 h-3 rounded-full"
                              aria-current="false"
                              aria-label="Slide 3"
                              data-carousel-slide-to="2"
                            ></button>
                            <button
                              type="button"
                              className="w-3 h-3 rounded-full"
                              aria-current="false"
                              aria-label="Slide 4"
                              data-carousel-slide-to="3"
                            ></button>
                            <button
                              type="button"
                              className="w-3 h-3 rounded-full"
                              aria-current="false"
                              aria-label="Slide 5"
                              data-carousel-slide-to="4"
                            ></button>
                          </div>
                          {/* <!-- Slider controls --> */}
                          <button
                            type="button"
                            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-prev
                          >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                              <svg
                                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 1 1 5l4 4"
                                />
                              </svg>
                              <span className="sr-only">Previous</span>
                            </span>
                          </button>
                          <button
                            type="button"
                            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-next
                          >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                              <svg
                                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="m1 9 4-4-4-4"
                                />
                              </svg>
                              <span className="sr-only">Next</span>
                            </span>
                          </button>
                        </div>

                        <h3 className="text-xl text-left font-semibold text-gray-900 dark:text-white">
                        {trrooms[room.id+"-titer"]}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Room size : {room.surface}m²
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Max persons : {room.chamberMaxPers}
                          </span>
                        </div>
                        <p className="text-base text-left leading-relaxed text-gray-500 dark:text-gray-400">
                        {room.isFumeur ? 'Smoking room' : 'Non-smoking room'}
                          <span>
                            <p className="text-base text-left leading-relaxed text-gray-500 dark:text-gray-400">
                              1 Queen size or 2 Single bed(s)
                            </p>
                          </span>
                        </p>
                        <p className="text-base text-left leading-relaxed text-gray-500 dark:text-gray-400">
                        {trrooms[room.id+"-description"].replace(/<[^>]+>/g, '')}
                        </p>
                        <h3 className="text-xl text-left font-semibold text-gray-900 dark:text-white">
                          Room Amenities :
                        </h3>
                        <p className="text-base text-left leading-relaxed text-gray-500 dark:text-gray-400">
                          Television Telephone Flat-screen TV Safe for laptop CD
                          player DVD player Radio Computer Satellite Channels
                          Air Conditioning Safety Deposit Box DESK Dressing room
                          Heating Private Entrance Steamer on request
                          Soundproofing Ironing Facilities Carpet Tiled / Marble
                          Extra Long Beds ( 2 meters long) dryer Socket near the
                          bed Electric Kettle Minibar Coffee / tea kettle Shower
                          Hairdryer Welcome product Slippers Bathrobe Toilet
                          paper Toilet Terrace Balcony Inner courtyard view
                          Wake-up service Towels Wake Up Service/Alarm Clock
                          Upper floors accessible by stairs only
                        </p>
                      </div>
                      {/* <!-- Modal footer --> */}
                      <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                          type="button"
                          className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default RoomModel