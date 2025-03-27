import React from 'react';
// import IMAGES from "../assets/images/images.js";
import '../sub.css';


function getImgUrl(url, name){
  return new URL(url+'/'+name+'.png', import.meta.url).href
}


function About() {
    return (
        <div className='about_sub'>
            {/* <img src={IMAGES.room1} alt="" style={{width:'100%'}} /> */}
           <div className='about_top'>
             <h2 data-aos="fade-down">About</h2> 
             <span data-aos="fade-down">고객의 믿음과 사랑으로 1945년부터 함께한 80년</span>
             <p data-aos="fade-down">해태제과는 고객만족을 모든 가치판단의 기준으로 삼아 최고의 제품과 서비스를 제공하여 모든 법규의 준수와 
                   사회적 책임을 다하여 국민의 풍요로운 삶과 사회발전에 공헌하고 협력회사와는 동반자적 관계를 유지하여 신뢰와 협력의
                    기초 위에 공존공영하며 모든 임직원은 쾌적한 환경, 조화로운 문화 속에서 명예와 품위를 유지하며 공정하고 자율적,
                     창의적으로 업무를 수행할 수 있도록 최선을 다하고 있습니다.</p>
                     <img data-aos="fade-right" src={getImgUrl('/images','about')} alt=""/>
           </div>
           <div className='about_content'>
            <h2 data-aos="fade-down">해태제과의 CI</h2> 
            <p data-aos="fade-down">동북아 제일의 제과기업이라는 비전을 위해 <br /> 신념을 가지고 꾸준한 성장을 위해 노력하고 있습니다.</p>
            <ul>
              <li>
                <img data-aos="fade-left" src={getImgUrl('/images','about1')} alt=""/>
                <p data-aos="fade-right"><span>해태제과의 워드마크</span>는 <br /> 고객에게 최상의 즐거움을 제공하고자 하는 해태제과의 고객 사랑의 마음을 현대적인 시각언어로 표현한 것입니다. 한글의 모음과 자음을 조합해 해태인이 갖고 있는 한국 고유의 이미지로 해태제과인의 아이덴티티를 표현함과 동시에 가운데 열려있는 공간을 통해 세상을 바라보고 새로운 것을 상상하고 즐기는 해태제과의 열린 마음과 창조적인 시각을표현하였습니다.</p>
                </li>
              <li>
                <img data-aos="fade-right" src={getImgUrl('/images','about2')} alt=""/>
                <p data-aos="fade-left"><span>해태제과의 전통과 역사</span>를 <br /> 대변하는 커플마크는 워드마크와 함께 해태제과를 상징하는 또 하나의 마크로 활용됩니다. 커플마크는 고객과 늘 함께하며 고객을 든든하게 지켜주는 고객의 평생 친구로서 제품 패키지 뿐만 아니라 각종 서식류, 사인류 등 다양한 매체에 활용하고 있습니다.</p>
                </li>
              <li>
                <img data-aos="fade-left" src={getImgUrl('/images','about3')} alt=""/>
                <p data-aos="fade-right"><span>해태제과의 주요 색상</span>인 <br /> HAITAI Red는 해태제과의 전통과 역사를 반영하고 고객에게 즐거움을 제공하고자 하는 해태제과의 열정을 나타냅니다</p>
                </li>
            </ul>
           </div>
        </div> 
          
    );
  }

  export default About;