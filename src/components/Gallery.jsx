import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function Gallery(){

  const images=[
    "/src/assets/images/burger.png",
    "/src/assets/images/burger.png",
    "/src/assets/images/burger.png"
  ]

  return(

    <section id="gallery" className="py-16 sm:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <h2 className="text-4xl text-center font-bold mb-16">

        Gallery

      </h2>

      <Swiper slidesPerView={1}>

        {images.map((img,i)=>(
          <SwiperSlide key={i}>
            <img src={img} className="mx-auto rounded-xl"/>
          </SwiperSlide>
        ))}

      </Swiper>

    </section>

  )
}