"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Logos() {
    return (

        <>
            <div className="text-black text-4xl flex justify-center mt-10 pl-10">Marcas que atendemos</div>
            <div className="logos-carrossel flex justify-center items-center m-10">
                <div className="w-7/12">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={3}
                        // autoplay={{ delay: 3000 }}
                        className="w-full max-w-[800px] mx-auto"
                    >
                        <div className="flex justify-center items-center">
                            <SwiperSlide>
                                <div className="flex items-center justify-center min-h-[220px]">
                                    <Image
                                        src={"/images/audi-logo.png"}
                                        alt="audi logo"
                                        width={500}
                                        height={500}
                                        style={{ width: "100%" }}
                                        className="carrossel-imag min-w-[200px] min-h-[100px] max-w-[200px] max-h-[200px] object-cover"
                                    />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="flex items-center justify-center min-h-[220px]">
                                    <Image
                                        src={"/images/caoa-logo.png"}
                                        alt="caoa logo"
                                        width={500}
                                        height={500}
                                        style={{ width: "100%" }}
                                        className="carrossel-image min-w-[200px] min-h-[100px] max-w-[200px] max-h-[200px] object-cover"
                                    />
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className="flex items-center justify-center min-h-[220px]">
                                    <Image
                                        src={"/images/chevrolet-logo.png"}
                                        alt="chevrolet logo"
                                        width={500}
                                        height={500}
                                        style={{ width: "100%" }}
                                        className="carrossel-image min-w-[200px] min-h-[100px] max-w-[200px] max-h-[200px] object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center min-h-[220px]">
                                    <Image
                                        src={"/images/citroen-logo.png"}
                                        alt="citroen logo"
                                        width={500}
                                        height={500}
                                        style={{ width: "250px", height: "250px" }}
                                        className="carrossel-image min-w-[200px] min-h-[200px] max-w-[200px] max-h-[150px]"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center min-h-[220px]">
                                    <Image
                                        src={"/images/fiat-logo.png"}
                                        alt="fiat logo"
                                        width={500}
                                        height={500}
                                        style={{ width: "100%" }}
                                        className="carrossel-image min-w-[200px] min-h-[100px] max-w-[200px] max-h-[200px] object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center min-h-[220px]">
                                    <Image
                                        src={"/images/ford-logo.png"}
                                        alt="ford logo"
                                        width={500}
                                        height={500}
                                        style={{ width: "100%" }}
                                        className="carrossel-image min-w-[200px] min-h-[100px] max-w-[200px] max-h-[200px] object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center min-h-[220px]">
                                    <Image
                                        src={"/images/honda-logo.png"}
                                        alt="honda logo"
                                        width={500}
                                        height={500}
                                        style={{ width: "100%" }}
                                        className="carrossel-image min-w-[200px] min-h-[100px] max-w-[200px] max-h-[200px] object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center min-h-[220px]">
                                    <Image
                                        src={"/images/hyundai-logo.png"}
                                        alt="hyundai logo"
                                        width={500}
                                        height={500}
                                        style={{ width: "100%" }}
                                        className="carrossel-image min-w-[200px] min-h-[100px] max-w-[200px] max-h-[200px] object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center min-h-[220px]">
                                    <Image
                                        src={"/images/kia-logo.png"}
                                        alt="kia logo"
                                        width={500}
                                        height={500}
                                        style={{ width: "100%" }}
                                        className="carrossel-image min-w-[200px] min-h-[100px] max-w-[200px] max-h-[200px] object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center min-h-[220px]">
                                    <Image
                                        src={"/images/nissan-logo.png"}
                                        alt="nissan logo"
                                        width={500}
                                        height={500}
                                        style={{ width: "100%" }}
                                        className="carrossel-image min-w-[200px] min-h-[100px] max-w-[200px] max-h-[200px] object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center min-h-[220px]">
                                    <Image
                                        src={"/images/peugeot-logo.png"}
                                        alt="peugeot logo"
                                        width={500}
                                        height={500}
                                        style={{ width: "100%" }}
                                        className="carrossel-image min-w-[200px] min-h-[100px] max-w-[200px] max-h-[200px] object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center min-h-[220px]">
                                    <Image
                                        src={"/images/renault-logo.png"}
                                        alt="renault logo"
                                        width={500}
                                        height={500}
                                        style={{ width: "100%" }}
                                        className="carrossel-image min-w-[200px] min-h-[100px] max-w-[200px] max-h-[200px] object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center min-h-[220px]">
                                    <Image
                                        src={"/images/toyota-logo.png"}
                                        alt="toyota logo"
                                        width={500}
                                        height={500}
                                        style={{ width: "100%" }}
                                        className="carrossel-image min-w-[200px] min-h-[100px] max-w-[200px] max-h-[200px] object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center min-h-[220px]">
                                    <Image
                                        src={"/images/volkswagen-logo.png"}
                                        alt="volkswagen logo"
                                        width={500}
                                        height={500}
                                        style={{ width: "100%" }}
                                        className="carrossel-image min-w-[200px] min-h-[100px] max-w-[200px] max-h-[200px] object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        </div>

                    </Swiper>
                </div>
            </div>
        </>
    )
}