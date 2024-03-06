import React from 'react'

const About = () => {
  return (
    <section id="About" className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Sirayane Boutique Hotel & Spa Marrakech
              </h2>
              <hr className="w-48 h-1 bg-gray-700 border-0 rounded md:mb-2 dark:bg-gray-700" />
              <h5 className="my-2 font-bold tracking-tight text-gray-900 dark:text-white">
                Hôtel 5 étoiles à Marrakech
              </h5>
              <p className="mb-4">
                Situé à environ 10 minutes de l’aéroport de Marrakech, 15 mn de
                l'avenue Mohamed VI, de la médina, et endroits branchés de la
                ville ocre, entouré de 09 terrains de golf et encerclé par les
                montagnes enneigées de l'Atlas, et par une végétation
                luxuriante, Le Sirayane invite au dépaysement total et au
                bien-être. Boutique Hôtel & Spa de luxe réalisé par le célèbre
                architecte Imaad Rahmouni , Le Sirayane jouit d'un décor
                exceptionnel et unique de part son architecture et sa décoration
                épurées, réservé aux amateurs de luxe et de simplicité. Le
                Sirayane dispose, sur une superficie de deux hectares, de 40
                Chambres et suites dont 8 avec piscines privées chauffées toute
                l'année.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="office content 2"
              />
            </div>
          </div>
        </section>
  )
}

export default About