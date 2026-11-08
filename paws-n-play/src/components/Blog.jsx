
import React from 'react';
import blogImage from '../assets/images/blog-video-bg.png';

const Blog = () => {
  return (
    <section className="min-h-screen w-full bg-white py-16 md:py-20">

      <div className="w-full px-[5.5%]">
        <div className=" w-full max-w-[310px] border-b border-[#dddddd] pb-3">
          <div className="flex items-center gap-3">
            <span className="text-[24px]">🐾</span>
            <h2 className="text-[26px] font-medium text-[#111827]">
              Blog
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-[4.5%]">

          <div className="w-full min-w-0">

            <h3 className=" mt-20 border-b border-[#e5e7eb] pb-[38px] text-[24px] font-semibold leading-[1.25] tracking-[-0.5px] text-[#111827] xl:text-[27px]">
              Milestone: 20,000 Pets Treated
            </h3>

            <div className="mt-[24px] space-y-[2px] text-[14px] leading-[22px] text-[#718096]">

              <p>
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                <span className="underline"> volutpat mollis </span>
                at volutpat lectus velit, sed auctor. Porttitor fames arcu
                quis fusce augue enim. Quis at habitant diam at. Suscipit
                <span className="underline"> tristique risus</span>, at donec.
                In turpis vel et quam imperdiet. Ipsum molestie aliquet
                sodales id est ac volutpat.
              </p>

              <p>
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                <span className="underline"> volutpat mollis </span>
                at volutpat lectus velit, sed auctor. Porttitor fames arcu
                quis fusce augue enim. Quis at habitant diam at. Suscipit
                <span className="underline"> tristique risus</span>, at donec.
                In turpis vel et quam imperdiet. Ipsum molestie aliquet
                sodales id est ac volutpat.
              </p>

            </div>

            <div className="mt-[24px]">

              <h4 className="mb-[12px] text-[18px] font-semibold leading-6 text-[#111827]">
                Renewed target
              </h4>

              <p className="text-[14px] leading-[22px] text-[#718096]">
                Pharetra morbi libero id aliquam elit massa integer tellus.
                Quis felis aliquam ullamcorper porttitor. Pulvinar
                ullamcorper sit dictumst ut eget a, elementum eu.
                Maecenas est morbi mattis id in ac.
              </p>

            </div>

            <button className="mt-[36px] rounded-[6px] bg-[#1e293b] px-[20px] py-[13px] text-[14px] font-medium text-white transition duration-300 hover:bg-black">
              Read more
            </button>

          </div>

          <div className="relative h-[400px] w-full overflow-hidden sm:h-[500px] lg:h-[504px]">

            <img
              src={blogImage}
              alt="Golden retriever with toys"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/5">

              <button
                aria-label="Play video"
                className="flex h-[112px] w-[112px] items-center justify-center rounded-full border-[7px] border-white bg-white/10 transition duration-300 hover:scale-110"
              >
                <svg
                  className="ml-2 h-[55px] w-[55px] fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Blog;
