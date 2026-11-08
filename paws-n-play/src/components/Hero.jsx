
import React from 'react';
import heroPet from '../assets/images/hero-pet.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#001629] text-white flex items-center">

      <img
        src={heroPet}
        alt="Golden Retriever"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-[65%_center]
        "
      />
      <div className="
        absolute inset-0
        bg-gradient-to-r
        from-[#001629]
        via-[#001629]/80
        via-45%
        to-[#001629]/10
      " />
      <div className="
        relative z-10
        w-full
        max-w-[1440px]
        mx-auto
        px-6
        sm:px-10
        lg:px-[5.5%]
        pt-24
        pb-12
      ">
        <div className="max-w-[490px]">

          <h1 className="
            text-[36px]
            sm:text-[42px]
            lg:text-[46px]
            font-normal
            leading-[1.12]
            tracking-[0.01em]
            mb-6
          ">
            Pawsitively Perfect:
            <br />
            Where Every Pet's
            <br />
            Dream Comes True!
          </h1>

          <p className="
            text-[13px]
            sm:text-[14px]
            leading-[1.80]
            text-gray-100
            mb-6
            max-w-[480px]
          ">
            Welcome to Paws n' Play, the ultimate destination
            for pet lovers! Explore a world of tail-wagging joy
            and furry companionship with our wide range of
            products and services. From pampering essentials
            to playful toys, we're here to make every moment
            with your pet pawsitively perfect!
          </p>

          <button className="
            inline-flex
            items-center
            justify-center
            gap-3
            min-w-[145px]
            h-[50px]
            px-6
            border
            border-white
            rounded-full
            text-[14px]
            font-medium
            hover:bg-white
            hover:text-[#001629]
            transition-all
            duration-300
          ">
            Shop Now
            <span className="text-lg">🐾</span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
