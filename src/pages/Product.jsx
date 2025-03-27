import React from 'react';
// import IMAGES from "../assets/images/images.js";


function getImgUrl(url, name){
    return new URL(url+'/'+name+'.png', import.meta.url).href
  }

function Product() {

    return (
        <div className='product_sub'>
            {/* <img src={IMAGES.room3} alt="" style={{width:'100%'}} /> */}
            <div data-aos="fade-down" className='product_top'>
             <h2>Product</h2> 
             <p>Enjoy the sweetness!</p>
           </div>
           <div className='product_list'>
            <ul>
                <li data-aos="zoom-in">
                    <img src={getImgUrl('/images','product1')} alt="" />
                    <p>계란과자</p>
                </li>
                <li data-aos="zoom-in">
                    <img src={getImgUrl('/images','product2')} alt="" />
                    <p>오사쯔</p>
                </li>
                <li data-aos="zoom-in">
                    <img src={getImgUrl('/images','product3')} alt="" />
                    <p>오예스</p>
                </li>
                <li data-aos="zoom-in">
                    <img src={getImgUrl('/images','product4')} alt="" />
                    <p>자가비</p>
                </li>
                <li data-aos="zoom-in">
                    <img src={getImgUrl('/images','product5')} alt="" />
                    <p>포키 오리지널</p>
                </li>
                <li data-aos="zoom-in">
                    <img src={getImgUrl('/images','product6')} alt="" />
                    <p>홈런볼</p>
                </li>
                <li data-aos="zoom-in">
                    <img src={getImgUrl('/images','product7')} alt="" />
                    <p>버터링</p>
                </li>
                <li data-aos="zoom-in">
                    <img src={getImgUrl('/images','product8')} alt="" />
                    <p>화이트 앤젤</p>
                </li>
                <li>
                    <img src={getImgUrl('/images','product9')} alt="" />
                    <p>딸기 포키</p>
                </li>
                <li data-aos="zoom-in">
                    <img src={getImgUrl('/images','product10')} alt="" />
                    <p>가루비 감자칩</p>
                </li>
                <li data-aos="zoom-in">
                    <img src={getImgUrl('/images','product11')} alt="" />
                    <p>후렌치 파이</p>
                </li>
                <li data-aos="zoom-in">
                    <img src={getImgUrl('/images','product12')} alt="" />
                    <p>에이스</p>
                </li>
            </ul>
           </div>
             
        </div>         
           
    );
  }

  export default Product;