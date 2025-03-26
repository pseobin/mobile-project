import React from 'react';
// import IMAGES from "../assets/images/images.js";


function Product() {

    return (
        <div className='product'>
            {/* <img src={IMAGES.room3} alt="" style={{width:'100%'}} /> */}
            <div className="pro_box">
                <div data-aos="fade-down" className="product_top">
                <h3>PRODUCT</h3>
                <p>해태제과의 다양한 제품들의 상세 내용을 보실 수 있습니다.</p>
                </div>
            </div>

            <div className="search">
                <form method="post">
                <label className="hidden" htmlFor="search_text">검색어 입력</label>
                <input type="text" id="search_text" name="search_text" />
                <input className="btn" type="submit" value="검색" />
                </form>
            </div>
               
        </div>         
           
    );
  }

  export default Product;