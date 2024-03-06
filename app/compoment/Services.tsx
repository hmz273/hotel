import React from 'react'

const Services = () => {
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
              data-tabs-toggle="#default-tab-content"
              data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
              role="tablist"
            >
              <li className="me-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  SPA
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Restaurant
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Service General
                </button>
              </li>
              <li role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  Evenement
                </button>
              </li>
            </ul>
          </div>
          <div id="default-tab-content">
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="https://pics.uncubus.tech/images/11242/upload/500X257/170b30ac1f60313ebd728195cf8669e6.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>

                    <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      Read More{" "}
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
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
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
              </div>
            </div>

            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="https://pics.uncubus.tech/images/11242/upload/500X257/170b30ac1f60313ebd728195cf8669e6.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>

                    <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      Read More{" "}
                      <button
                        data-popover-target="popover-description-1"
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
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Show information</span>
                      </button>
                    </p>
                    <div
                      data-popover
                      id="popover-description-1"
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
              </div>
            </div>

            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="https://pics.uncubus.tech/images/11242/upload/500X257/170b30ac1f60313ebd728195cf8669e6.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>

                    <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      Read More{" "}
                      <button
                        data-popover-target="popover-description-2"
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
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Show information</span>
                      </button>
                    </p>
                    <div
                      data-popover
                      id="popover-description-2"
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
              </div>
            </div>

            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="contacts"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="https://pics.uncubus.tech/images/11242/upload/500X257/170b30ac1f60313ebd728195cf8669e6.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>

                    <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      Read More{" "}
                      <button
                        data-popover-target="popover-description-4"
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
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Show information</span>
                      </button>
                    </p>
                    <div
                      data-popover
                      id="popover-description-4"
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
              </div>
            </div>
          </div>
        </section>
  )
}

export default Services