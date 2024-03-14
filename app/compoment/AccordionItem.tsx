import React, { useState } from 'react';

const AccordionItem = ({ title, content, index, trdata }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div key={index} id={`accordion-collapse-${index}`} data-accordion="collapse">
      <h2 id={`accordion-collapse-heading-${index}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-collapse-body-${index}`}
        >
          <span>{title}</span>
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${index}`}
        className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${
          activeIndex === index ? '' : 'hidden'
        }`}
        aria-labelledby={`accordion-collapse-heading-${index}`}
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          {content.map((item, idx) => (
            <p key={idx} className="mb-2 text-gray-500 dark:text-gray-400">
              {trdata.translations.en.Facilities[item.fcId + "-titer"]}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
