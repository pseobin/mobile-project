import React from 'react';
// import IMAGES from "../assets/images/images.js";

function getImgUrl(url, name){
    return new URL(url+'/'+name+'.png', import.meta.url).href
}

function Character() {

    return (
        <div className='character_sub'>
         <div className='character_top'>
               {/* <img src={IMAGES.room4} alt="" style={{width:'100%'}} /> */}
               <h2>Character</h2>  
               <p>해태제과의 사랑스러운 캐릭터들를 소개합니다!</p>
         </div>
            <div className='character_con'>
            <ul>
                    <li data-aos="fade-right"><p><strong>티토</strong> <br />이상한 나라에 살고 있는 시계토끼 티토 꼼꼼한 성격으로 늘 시계를 들고 다닌다. 에이스의 대표 캐릭터이다.</p></li>
                    <li data-aos="fade-left"><img src={getImgUrl('/images','character1')} alt="" /></li>
                    <li data-aos="fade-left"><p><strong>예쓰</strong> <br />초코 퐁듀 호수 옆 오두막에서 사는 초코강아지 예쓰 밝고 긍정적이며 챙겨주는 것을 좋아해서 생일마다 파티를 열어준다. 오예스의 대표 캐릭터이다.</p></li>
                    <li data-aos="fade-right"><img src={getImgUrl('/images','character2')} alt="" /></li>
                    <li data-aos="fade-right"><p><strong>맛깨비</strong> <br />맛동산의 나무집에사는 도깨비 맛깨비 귀엽고 통통한 볼살을 가지고 있으며 늘 노란 옷을 입고 다니며 커다란 맛동산을 가지고 다닌다. 맛동산의 대표 캐릭터이다.</p></li>
                    <li data-aos="fade-left"><img src={getImgUrl('/images','character3')} alt="" /></li>
                    <li data-aos="fade-left"><p><strong>허니</strong> <br />달콤한을 탐지하기 위한 더듬이를 가지고 있으며 꿀벌인척 하기위해 코스튬을 입고 꿀을 발견하면 바로 찍어먹기 위한 꿀봉을 가지고 다닌다. 허니버터칩의 대표 캐릭터 이다.</p></li>
                    <li data-aos="fade-right"><img src={getImgUrl('/images','character4')} alt="" /></li>
                    <li data-aos="fade-right"><p><strong>맘두</strong> <br />해태제과의 상징 교자만두며 취미는 만두 빚기,레시피 개발 특기는 만드 저글링이다. 호기심이 많고 사교성이 좋은 만두다. 고향만두의 대표 캐릭터이다.</p></li>
                    <li data-aos="fade-left"><img src={getImgUrl('/images','character5')} alt="" /></li>
                    <li data-aos="fade-left"><p><strong>차유식</strong> <br />충남 천안시 서북구에 사는 중학교 2학년 차유식. 운동을 좋아해서 평소에 손목과 발목에 아대를 차고다닌다 자유로운 시간을 보내는것과 자유시간 먹기를 좋아한다. 자유시간의 대표 캐릭터이다.</p></li>
                    <li data-aos="fade-right"><img src={getImgUrl('/images','character6')} alt="" /></li>
                </ul>
            </div>
        </div> 
  
    );
  }

  export default Character;