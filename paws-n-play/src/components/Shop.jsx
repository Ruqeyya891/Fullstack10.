import React from 'react';
import catFood from '../assets/images/cat-food.png';
import catBox from '../assets/images/cat-box.png';
import dogFood from '../assets/images/dog-food.png';

const Shop = () => {
  const categories = ['Random', 'Cat', 'Dogs', 'Fish', 'Birds'];

const products = [
  { id: 1, image: catFood },
  { id: 2, image: catBox },
  { id: 3, image: dogFood },
];

  return (
    <section className="w-full bg-white">
      <div className="w-full px-1 md:px-[5.6%]">
        <div className="flex h-[82px] items-center gap-3 border-b border-[#dedede]">
          <span className="text-[20px] text-[#111827]">🐾</span>
          <h2 className="text-[26px] font-medium text-[#111827]">
            Shop
          </h2>
        </div>

        <div className="relative mt-[29px] border-l border-t border-[#dedede] px-5 pt-[30px] md:px-6">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <h3 className="text-[25px] font-semibold leading-tight text-black md:text-[26px]">
              Featured Products
            </h3>

            <div className="flex h-[38px] w-full shrink-0 items-center gap-3 rounded-full bg-[#f3f3f4] px-3 text-[#969ba3] sm:w-[210px]">
              <span className="text-[15px]">⌕</span>

              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent text-[12px] outline-none placeholder:text-[#969ba3]"
              />
            </div>

          </div>
          <div className="mb-[29px] mt-[31px] flex flex-wrap items-center justify-center gap-5 sm:gap-8">

            {categories.map((cat, index) => (
              <button
                key={cat}
                className={`h-[38px] rounded-[6px] px-[18px] text-[14px] font-medium transition-colors duration-200 ${index === 0
                    ? 'bg-[#1e2b4a] text-white shadow-md'
                    : 'text-[#555555] hover:bg-[#f3f3f3]'
                  }`}
              >
                {cat}
              </button>
            ))}

          </div>
          <div className="mx-auto flex w-full flex-col gap-4 sm:flex-row sm:gap-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-0 flex-1 overflow-hidden rounded-[8px] bg-[#d2d2d2]"
              >
                <div className="aspect-[0.88] w-full">
                  <img
                    src={product.image}
                    alt={`Product ${product.id}`}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end pb-[27px] pt-[24px]">
            <button className="text-[14px] font-semibold text-[#1f2937] transition-colors hover:text-[#d4af37]">
              View More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Shop;
