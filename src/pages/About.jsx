import React from 'react';
import IMAGES from "../assets/images/images.js";
import '../sub.css';

function About() {
    return (
        <div className='about'>
            {/* <img src={IMAGES.room1} alt="" style={{width:'100%'}} /> */}
           <div className='about_top'>
             <h2>About</h2> 
             <p>해태제과는 고객만족을 모든 가치판단의 기준으로 삼아 최고의 제품과 서비스를 제공하여 모든 법규의 준수와 
                   사회적 책임을 다하여 국민의 풍요로운 삶과 사회발전에 공헌하고 협력회사와는 동반자적 관계를 유지하여 신뢰와 협력의
                    기초 위에 공존공영하며 모든 임직원은 쾌적한 환경, 조화로운 문화 속에서 명예와 품위를 유지하며 공정하고 자율적,
                     창의적으로 업무를 수행할 수 있도록 최선을 다하고 있습니다.</p>
           </div>
        </div> 
          
    );
  }

  export default About;