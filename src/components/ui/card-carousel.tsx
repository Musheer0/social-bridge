"use client"

import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { ArrowRight, SparklesIcon } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"
import { Button } from "./button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useAutomationDraft } from "@/stores/use-automation-draft"

interface CarouselProps {
  images?: { src: string; alt: string ,caption:string}[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    /* margin: 20px; */
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `
  const {PostId,setPostId,setPoster} =useAutomationDraft()
  const [selectedPost,setSelectedPost] = useState(PostId);
  const isSelected = (id:string)=> id===selectedPost
  return (
    <section className={cn(
      "w-full h-full relative overflow-hidden",
      selectedPost && ''
    )}>
      <style>{css}</style>
    
      <div className=" max-w-6xl  flex-1 rounded-2xl bg-background mx-auto ">
       
        <div className="relative  flex w-full flex-col  md:items-start md:gap-8 ">
        
          <div className="top absolute left-4 top-6  flex items-center gap-3 flex-wrap">
            <Badge
            variant="outline"
            className=" rounded-[14px]  text-base md:left-6"
          >
            <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
            {selectedPost ? selectedPost:'Latest Posts'}
          </Badge>
          </div>
          <div className="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center">
            <div className="flex gap-2">
              <div>
                <h3 className="sm:text-4xl text-2xl opacity-85 font-bold tracking-tight">
                  Select any one post you want to apply automation
                </h3>
       
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            
            <div className="w-full">
              <Swiper
              spaceBetween={50}
               autoplay={false}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
      
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                className="w-full"
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
               {images &&
               <>
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className={cn(
                      "size-full group overflow-hidden  relative rounded-3xl",
                      isSelected(image.alt) && 'border-4 shadow-xl border-primary'
                    )}>
                      
                         <div className={cn(
          "absolute w-full max-w-lg left-1/2 shadow-xl   -translate-x-1/2 rounded-t-2xl bg-background px-10 border shadow-2xl flex items-center justify-center py-5  z-50 bottom-0 duration-300 transition-all ease-in-out",
       isSelected(image.alt) ?'translate-y-0 ':'translate-y-full '
      )}>
             <Link href={'/automations/new/keyword'} className="w-full">
                 <Button
               disabled={!selectedPost}
             className="px-5 rounded-full w-full">Next <ArrowRight/></Button>
              </Link>
                 </div>
                     <Button
                     onClick={()=>{
                      setSelectedPost(image.alt);
                      setPostId(image.alt)
                      setPoster(image.src)
                     }}
                     className={cn(
                      "absolute top-2 left-2 px-4 rounded-full",
                      isSelected(image.alt) && 'bg-secondary text-foreground hover:bg-secondary/90'
                     )}>{isSelected(image.alt)? 'Selected':'Select'}</Button>
                        {index===0 &&                         <p className="bg-destructive absolute top-2 right-2 px-4 py-1 rounded-full w-fit text-xs text-zinc-50 font-semibold">Latest Post</p>}

                      {!isSelected(image.alt) &&
                      <div className="absolute transition-all duration-300 group-hover:bottom-0 -bottom-full left-0 w-full h-1/2 overflow-y-auto bg-zinc-100/90  rounded-t-2xl p-2 text-zinc-900 trany z-10">
                      <p className="break-words">
                        {image.caption}
                      </p>
                      </div>
                      }
                      <img
                        src={image.src}
                        width={500}
                        height={500}
                        className="size-full rounded-xl"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
               
               </>
               }
              
              </Swiper>
                
            </div>
          </div>
        </div>
      </div>
     
     
    </section>
  )
}
