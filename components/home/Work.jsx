"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { getWorks } from '@/sanity/actions';
import Image from 'next/image';

const Work = async () => {
  const works = await getWorks();

  return (
    <section id="work" className="flex-app">
       <h2 className="head-text mb-8">
        Accomplished <span className="text-secondary-color">Projects</span>
      </h2>

      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {works.map((work) => (
          <SwiperSlide
            key={work.title}
            className="bg-center bg-cover" 
          >
            <Image
              src={work.image}
              width={100}
              height={100}
              alt={work.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Work;