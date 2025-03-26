import React from 'react';
import '../App.css';
import { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {  Pagination, Autoplay} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";


function getImgUrl(url, name){
    return new URL(url+'/'+name+'.png', import.meta.url).href
}

function Main() {


    SwiperCore.use([Pagination, Autoplay]);

    return (
        <>
          <div className='visual'>
                <Swiper
                spaceBetween={0} 
                pagination={{clickable:true}} 
                slidesPerView={1} 
                loop={true} 
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                }}
                className="mySwiper1" >
                    <SwiperSlide>
                        <img src={getImgUrl('/images','visual01')} alt="" />
                        <div className='visual_text'>
                            <p>Since 1945</p> 
                            <span>"좋은 제품을 끊임없이 연구하며<br /> 고객과 함께하는 해태제과"</span>
                        </div>
                        </SwiperSlide>
                    <SwiperSlide>
                        <img src={getImgUrl('/images','visual02')} alt="" />
                        <div className='visual_text'>
                            <p>Dream World</p> 
                            <span>"늘 열린 마음으로 세상을 보고 <br />새로운 것을 상상하는 달콤한 기업"</span>
                        </div>
                        </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/visual03.png" alt="" />
                        <div className='visual_text'>
                            <p>Good Friends </p> 
                            <span>"올바르고 좋은 기운으로 <br />  고객을 지켜주는 달콤한 평생친구"</span>
                        </div>
                        </SwiperSlide>
                </Swiper>
          </div>
          <section className="product">
            <div className="pro_box">
                <div data-aos="fade-down" className="product_top">
                <h3>PRODUCT</h3>
                <p>해태제과의 다양한 제품들의 상세 내용을 보실 수 있습니다.</p>
                <a href='#' className="more">more</a>
                </div>
            </div>

            <div className="search">
                <form method="post">
                <label className="hidden" htmlFor="search_text">검색어 입력</label>
                <input type="text" id="search_text" name="search_text" />
                <input className="btn" type="submit" value="검색" />
                </form>
            </div>
            <div data-aos="fade-up" class="pro_img">
            <Swiper
                spaceBetween={0} 
                slidesPerView={3.5} 
                loop={true} 
                className="mySwiper1" >
             <ul>
                 <SwiperSlide><li><img src={getImgUrl('/images','product1')} alt=""/></li></SwiperSlide>
                 <SwiperSlide><li><img src={getImgUrl('/images','product2')} alt=""/></li></SwiperSlide>
                 <SwiperSlide><li><img src={getImgUrl('/images','product3')} alt=""/></li></SwiperSlide>
                 <SwiperSlide><li><img src={getImgUrl('/images','product4')} alt=""/></li></SwiperSlide>
                 <SwiperSlide><li><img src={getImgUrl('/images','product5')} alt=""/></li></SwiperSlide>
                 <SwiperSlide><li><img src={getImgUrl('/images','product6')} alt=""/></li></SwiperSlide>
                 <SwiperSlide><li><img src={getImgUrl('/images','product7')} alt=""/></li></SwiperSlide>
                 <SwiperSlide><li><img src={getImgUrl('/images','product8')} alt=""/></li></SwiperSlide>
                 <SwiperSlide><li><img src={getImgUrl('/images','product9')} alt=""/></li></SwiperSlide>
                 <SwiperSlide><li><img src={getImgUrl('/images','product10')} alt=""/></li></SwiperSlide>
                
             </ul>
             </Swiper>
           </div>
            </section>
            <section className='character'>
                <div className="ch_box">
                    <div data-aos="fade-down" className="character_top">
                    <h3>CHARACTER</h3>
                    <p>해태제과의 사랑스러운 캐릭터들를 소개합니다!</p>
                    <a href='#' className="more">more</a>
                    </div>
                </div>
                <div className="swiper">
                <Swiper
                spaceBetween={0} 
                pagination={{clickable:true}} 
                slidesPerView={1} 
                loop={true} 
                className="mySwiper1">
                  <ul className="swiper-wrapper">
                    <SwiperSlide><li><img src={getImgUrl('/images','char01')} alt="" /><p  data-aos="fade-up"><strong>에이스</strong> <br/> 대표 캐릭터 <br/> 디토</p></li></SwiperSlide>
                    <SwiperSlide><li><img src={getImgUrl('/images','char02')} alt="" /><p  data-aos="fade-up"><strong>오예스</strong> <br/> 대표 캐릭터 <br/> 예스</p></li></SwiperSlide>
                    <SwiperSlide><li><img src={getImgUrl('/images','char03')} alt="" /><p  data-aos="fade-up"><strong>맛동산</strong> <br/> 대표 캐릭터 <br/> 맛깨비</p></li></SwiperSlide>
                    <SwiperSlide><li><img src={getImgUrl('/images','char04')} alt="" /><p  data-aos="fade-up"><strong>허니버터칩</strong> <br/> 대표 캐릭터 <br/> 허니</p></li></SwiperSlide>
                    <SwiperSlide><li><img src={getImgUrl('/images','char05')} alt="" /><p  data-aos="fade-up"><strong>고향만두</strong> <br/> 대표 캐릭터 <br/> 맘두</p></li></SwiperSlide>
                    <SwiperSlide><li><img src={getImgUrl('/images','char06')} alt="" /><p  data-aos="fade-up"><strong>자유시간</strong> <br/> 대표 캐릭터 <br/> 차유식</p></li></SwiperSlide>
                  </ul>
                  </Swiper>
                </div>
                
            </section>
            <section className='about'>
            <div data-aos="fade-down" className="about_top">
                <h3>ABOUT</h3>
                <a href='#' className="more">more</a>
                <p>해태제과는 고객만족을 모든 가치판단의 기준으로 삼아 최고의 제품과 서비스를 제공하여 모든 법규의 준수와 
                  사회적 책임을 다하여 국민의 풍요로운 삶과 사회발전에 공헌합니다.</p>
                  <img src={getImgUrl('/images','about')} alt=""/>
                </div>
            </section>
            <section className='recruit'>
            <div className="re_box">
                <div data-aos="fade-down" className="recruit_top">
                <h3>RECRUIT</h3>
                <p>해태제과의 새로운 달콤함을 <br/> 
                책임질 유능한 인재 여러분을 기다리고 있습니다!</p>
                <a href='#' className="more">more</a>
                </div>
            </div>
                <ul>
                    <li data-aos="fade-right">Customer</li>
                    <li data-aos="fade-left"><img src={getImgUrl('/images','re_01')} alt="" /></li>
                    <li data-aos="fade-left">Professional</li>
                    <li data-aos="fade-right"><img src={getImgUrl('/images','re_02')} alt="" /></li>
                    <li data-aos="fade-right">Change</li>
                    <li data-aos="fade-left"><img src={getImgUrl('/images','re_03')} alt="" /></li>
                    <li data-aos="fade-left">Love&Happy</li>
                    <li data-aos="fade-right"><img src={getImgUrl('/images','re_04')} alt="" /></li>
                </ul>
            </section>
            <section className='service'>
            <div data-aos="fade-down" className="service_top">
                <h3>Service center</h3>
                <p>해태제과는 언제든 고객의 소리에 귀 기울이겠습니다!</p>
                </div>
              <div className='service_inner'>
              <a href="#">Service center 바로가기 &rang; </a>
              </div>
            </section>

        </> 
    );
  }

  export default Main;