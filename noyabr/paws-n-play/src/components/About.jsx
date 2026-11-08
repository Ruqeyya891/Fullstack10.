
import React from 'react';
import mainImage from "../assets/images/about-image.png";

function About() {
  return (
    <section className="w-full min-h-screen bg-white py-[45px]">

      <div className=" w-[100%] px-[5.5%]">

        <div className="flex h-[60px] items-center gap-3 border-b border-[#dedede]">

          <span className="text-[20px]">🐾</span>

          <h2 className="text-[26px] font-medium text-[#111827]">
            About Us
          </h2>

        </div>

        <div className="relative mx-auto mt-[50px] w-[100%] px-[25px] pb-[45px] pt-[40px] md:px-[26px] lg:px-[26px]">

          <div className="relative flex flex-col items-center gap-[35px] lg:flex-row lg:items-center lg:gap-[35px]">

            <div className="w-full min-w-0 text-[15px] leading-[1.1] font-normal text-[#182235] sm:text-[16px] lg:w-1/2">

              <div className=" ml-[30px] flex flex-col gap-[16px]">

                <p>
                  At Paws n’ Play, our journey began with a simple yet
                  profound love for animals. Inspired by the unwavering
                  companionship and joy they bring to our lives, we
                  embarked on a mission to create a haven where pets and
                  their owners alike could experience unparalleled happiness
                  and care.
                </p>

                <p>
                  Driven by our passion for animal welfare, we hand-select
                  each product and service with meticulous attention to
                  quality and sustainability. From nutritious food and
                  enriching toys to expert grooming and healthcare, every
                  offering is carefully curated to meet the unique needs of
                  our beloved furry friends.
                </p>

                <p>
                  But our commitment doesn't end there. We're dedicated to
                  fostering a community that celebrates the bond between
                  pets and their human companions. Through educational
                  resources, compassionate support, and memorable
                  experiences, we strive to empower pet owners to provide
                  the best possible care for their furry family members.
                </p>

                <p>
                  At Paws n’ Play, customer satisfaction isn't just a goal –
                  it's our guiding principle. We go above and beyond to ensure
                  every interaction leaves tails wagging and hearts smiling.
                  From personalized recommendations to attentive service,
                  we're here to make your journey with your pet as joyful and
                  fulfilling as possible.
                </p>

                <p>
                  Join us in our mission to create a world where every pet is
                  cherished, every need is met, and every tail wags with
                  happiness. Welcome to Paws n’ Play, where pets are family,
                  and love knows no bounds.
                </p>

              </div>

            </div>

            <div className="flex w-full min-w-0 items-center flex-col justify-center lg:w-1/2">

              <div className="w-full max-w-[460px]">
                <img
                  src={mainImage}
                  alt="About Us - Our Pets"
                  className="block h-auto w-full object-contain"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section >
  );
}

export default About;
