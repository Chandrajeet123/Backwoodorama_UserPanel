import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import HomePageBannerSkeleton from '../../../../Component/Skeleton/DashBoardSkeleton/HomePageBannerSkeleton';
import Axios from "axios";
const HomePageWeedBanner=()=>{
    const [Skeleton , SetSkeleton]= React.useState(true)
    const [data,setdata] = React.useState([]) 
   
   
    // const HomePageWeedBanner=[{imgUrl:"./image/homePageBanner.jpg"},{imgUrl:"./image/homePageBanner.jpg"}]
    React.useEffect(() => {
        Axios("https://api.cannabaze.com/UserPanel/Get-PromotionalBanners/ ")
        .then((response)=>{
            setdata(response.data)
           
            SetSkeleton(false)
        })
        .catch((error)=>{
        })
    }, [])



    return(
        <div className='homepagebanner2 '>
         { !Skeleton   ?
         <React.Fragment>
            <div className='destop_image'>

           
           <Swiper  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}  modules={[Autoplay]}>
            {data?.map((ele, index) => {
                return (
                    <SwiperSlide key={index}>
                    <div className='col-12 homePageBanner_container' >
                        <LazyLoadImage src={`https://api.cannabaze.com/${ele?.Banner}`} alt="image not available" className='HomePageBanner_image'/>
                    </div>
                    </SwiperSlide>
                )
            })}
           </Swiper>
           </div>
           <div className="mobile_imges">
              <Swiper  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}  modules={[Autoplay]}>
            {data?.map((ele, index) => {
                return (
                    <SwiperSlide>
                    <div className='col-12 homePageBanner_container' key={index}>
                        <LazyLoadImage src={`https://api.cannabaze.com/${ele?.mobile}`} alt="image not available" className='HomePageBanner_image'/>
                    </div>
                    </SwiperSlide>
                )
            })}
           </Swiper>
           </div>
           </React.Fragment>
        :
        <HomePageBannerSkeleton></HomePageBannerSkeleton>
    }
    </div>
    )
}
export default HomePageWeedBanner