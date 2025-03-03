"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Logos({ ReactiveFlags }: { ReactiveFlags: { isMobile: boolean; isNotebook: boolean } }) {

    return (
        <>
            <div className="text-black text-4xl text-center mt-10">Marcas que atendemos</div>
            <div className="logos-carrossel w-full flex flex-col items-center items-center mt-10">
                <div className="w-9/12 bg-neutral-300 rounded-xl">
                    {
                        ReactiveFlags.isNotebook ?
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={2}
                                autoplay={{ delay: 1500 }}
                                className="w-full mx-auto"
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
                                                className="carrossel-imag min-w-[200px] min-h-[100px] max-w-[190px] max-h-[200px] object-cover"
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
                                                className="carrossel-image min-w-[240px] mt-5 min-h-[130px] max-w-[240px] max-h-[130px] object-cover"
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
                                                className="carrossel-image min-w-[200px] min-h-[90px] max-w-[200px] max-h-[90px] object-cover"
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
                                                className="carrossel-image min-w-[150px] min-h-[140px] max-w-[150px] max-h-[140px]"
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
                                                className="carrossel-image min-w-[130px] min-h-[100px] max-w-[130px] max-h-[200px] object-cover"
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
                                                className="carrossel-image min-w-[230px] min-h-[85px] max-w-[230px] max-h-[85px] object-cover"
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
                                                className="carrossel-image min-w-[140px] min-h-[110px] max-w-[140px] max-h-[110px] object-cover"
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
                                                className="carrossel-image min-w-[190px] min-h-[120px] max-w-[190px] max-h-[120px] object-cover"
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
                                                className="carrossel-image min-w-[185px] min-h-[90px] max-w-[185px] max-h-[90px] object-cover"
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
                                                className="carrossel-image min-w-[160px] min-h-[140px] max-w-[160px] max-h-[140px] object-cover"
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
                                                className="carrossel-image min-w-[180px] min-h-[130px] max-w-[180px] max-h-[130px] object-cover"
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
                                                className="carrossel-image min-w-[160px] min-h-[120px] max-w-[160px] max-h-[120px] object-cover"
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
                                                className="carrossel-image min-w-[175px] min-h-[130px] max-w-[175px] max-h-[130px] object-cover"
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
                                                className="carrossel-image min-w-[180px] min-h-[150px] max-w-[180px] max-h-[150px] object-cover"
                                            />
                                        </div>
                                    </SwiperSlide>
                                </div>

                            </Swiper>
                            : <></>}

                    {
                        ReactiveFlags.isMobile ?
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={1}
                                autoplay={{ delay: 1500 }}
                                className="w-full mx-auto"
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
                                                className="carrossel-imag min-w-[200px] min-h-[100px] max-w-[190px] max-h-[200px] object-cover"
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
                                                className="carrossel-image min-w-[240px] mt-5 min-h-[130px] max-w-[240px] max-h-[130px] object-cover"
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
                                                className="carrossel-image min-w-[200px] min-h-[90px] max-w-[200px] max-h-[90px] object-cover"
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
                                                className="carrossel-image min-w-[150px] min-h-[140px] max-w-[150px] max-h-[140px]"
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
                                                className="carrossel-image min-w-[130px] min-h-[100px] max-w-[130px] max-h-[200px] object-cover"
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
                                                className="carrossel-image min-w-[230px] min-h-[85px] max-w-[230px] max-h-[85px] object-cover"
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
                                                className="carrossel-image min-w-[140px] min-h-[110px] max-w-[140px] max-h-[110px] object-cover"
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
                                                className="carrossel-image min-w-[190px] min-h-[120px] max-w-[190px] max-h-[120px] object-cover"
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
                                                className="carrossel-image min-w-[185px] min-h-[90px] max-w-[185px] max-h-[90px] object-cover"
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
                                                className="carrossel-image min-w-[160px] min-h-[140px] max-w-[160px] max-h-[140px] object-cover"
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
                                                className="carrossel-image min-w-[180px] min-h-[130px] max-w-[180px] max-h-[130px] object-cover"
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
                                                className="carrossel-image min-w-[160px] min-h-[120px] max-w-[160px] max-h-[120px] object-cover"
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
                                                className="carrossel-image min-w-[175px] min-h-[130px] max-w-[175px] max-h-[130px] object-cover"
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
                                                className="carrossel-image min-w-[180px] min-h-[150px] max-w-[180px] max-h-[150px] object-cover"
                                            />
                                        </div>
                                    </SwiperSlide>
                                </div>

                            </Swiper>
                            : <></>}
                    {
                        !ReactiveFlags.isNotebook && !ReactiveFlags.isMobile ?
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={4}
                                autoplay={{ delay: 1500 }}
                                className="w-full mx-auto"
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
                                                className="carrossel-imag min-w-[200px] min-h-[100px] max-w-[190px] max-h-[200px] object-cover"
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
                                                className="carrossel-image min-w-[240px] mt-5 min-h-[130px] max-w-[240px] max-h-[130px] object-cover"
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
                                                className="carrossel-image min-w-[200px] min-h-[90px] max-w-[200px] max-h-[90px] object-cover"
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
                                                className="carrossel-image min-w-[150px] min-h-[140px] max-w-[150px] max-h-[140px]"
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
                                                className="carrossel-image min-w-[130px] min-h-[100px] max-w-[130px] max-h-[200px] object-cover"
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
                                                className="carrossel-image min-w-[230px] min-h-[85px] max-w-[230px] max-h-[85px] object-cover"
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
                                                className="carrossel-image min-w-[140px] min-h-[110px] max-w-[140px] max-h-[110px] object-cover"
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
                                                className="carrossel-image min-w-[190px] min-h-[120px] max-w-[190px] max-h-[120px] object-cover"
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
                                                className="carrossel-image min-w-[185px] min-h-[90px] max-w-[185px] max-h-[90px] object-cover"
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
                                                className="carrossel-image min-w-[160px] min-h-[140px] max-w-[160px] max-h-[140px] object-cover"
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
                                                className="carrossel-image min-w-[180px] min-h-[130px] max-w-[180px] max-h-[130px] object-cover"
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
                                                className="carrossel-image min-w-[160px] min-h-[120px] max-w-[160px] max-h-[120px] object-cover"
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
                                                className="carrossel-image min-w-[175px] min-h-[130px] max-w-[175px] max-h-[130px] object-cover"
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
                                                className="carrossel-image min-w-[180px] min-h-[150px] max-w-[180px] max-h-[150px] object-cover"
                                            />
                                        </div>
                                    </SwiperSlide>
                                </div>

                            </Swiper>
                            : <></>}

                </div>
                <div className="mt-10 flex justify-center">
                    <a className="button-contato-intro flex justify-center" href="https://wa.me/5549999012693"><Image src={"/images/whatsapp.png"} alt="Whatsapp" width={30} height={30} style={{ marginRight: "10px" }} />Entrar em contato</a>
                </div>
            </div>
        </>
    )
}