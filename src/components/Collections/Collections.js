import React from 'react'
import CollectionCard from './CollectionCard'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import items from '../../utils/utils';

const Collections = () => {

  return (
   <Swiper
   modules={[Navigation, Pagination, Scrollbar, A11y]}
   
   slidesPerView={4}
   navigation
   pagination={{ clickable: true }}
   >
   {
    items.map((i)=>{
        return(
            <SwiperSlide>
                <CollectionCard
                key={i.id}
                name={i.product_name}
                description={i.description}
                rate={i.rate}
                image={i.image_url}
                />
            </SwiperSlide>
        )
    })
   }
   </Swiper>
  )
}

export default Collections