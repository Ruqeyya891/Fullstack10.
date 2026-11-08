
import grooming from '../assets/images/grooming.png';
import boarding from '../assets/images/boarding.png';
import veterinary from '../assets/images/veterinary.png';
import training from '../assets/images/training.png';
import adoption from '../assets/images/adoption.png';
import React from 'react';

const Services = () => {
  const services = [
    { id: 1, title: 'Grooming', image: grooming },
    { id: 2, title: 'Boarding', image: boarding },
    { id: 3, title: 'Veterinary', image: veterinary },
    { id: 4, title: 'Training', image: training },
    { id: 5, title: 'Adoption', image: adoption },
  ];

  return (
    <section className="min-h-screen w-full bg-white py-[35px]">
      <div className="w-full px-[5.5%]">
        <div className="flex h-[48px] items-center gap-3 border-b border-[#dedede]">
          <span className="text-[20px]">🐾</span>

          <h2 className="text-[26px] font-medium text-[#111827]">
            Services
          </h2>
        </div>
        <div className="mx-auto w-[100%] border border-[#dedede] p-[20px] md:p-[22px] ">

          <div className="flex w-full flex-col gap-[11px] md:flex-row">

            <div className="flex min-w-0 flex-[1.75] flex-col gap-[11px]">

              <div className="flex flex-1 gap-[11px]">

                {services.slice(0, 2).map((service) => (
                  <div
                    key={service.id}
                    className="group aspect-square min-w-0 flex-1 overflow-hidden rounded-[8px]"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}

              </div>

              <div className="flex flex-1 gap-[11px]">

                {services.slice(2, 4).map((service) => (
                  <div
                    key={service.id}
                    className="group aspect-square min-w-0 flex-1 overflow-hidden rounded-[8px]"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}

              </div>

            </div>

            <div className="group min-h-[350px] min-w-0 flex-[1] overflow-hidden rounded-[8px] md:min-h-0">

              <img
                src={services[4].image}
                alt={services[4].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
