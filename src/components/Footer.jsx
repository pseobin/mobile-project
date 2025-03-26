import React, {useState , useEffect} from 'react';

function Footer() {

   const [isSwitched, setIsSwitced] = useState(false);
   const [upDown, setUpDown] = useState(false); //false(위)/true(아래)

      const familyHandler = () => {
         setIsSwitced(!isSwitched);
      };
      const closeFamilyMenu = () => {
         setIsSwitced(false);
      };

   const handleScroll = () => {
      //console.log(window.scrollY);
      if (window.scrollY > 200){
         setUpDown(true);
      }else{
         setUpDown(false);
      } 
    };

   useEffect(() => {
      // window에 scroll 이벤트를 넣는다.
      window.addEventListener('scroll', handleScroll);
      // 페이지를 벗어날 때 이벤트를 제거한다.
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

   const topHandler = (e) => {
      e.preventDefault();
      window.scroll({top:0 , behavior:'smooth'});
    };

    return (
       <footer>
            <a className={'top_move '+( upDown ? 'down' : 'up' )} href="#" onClick={topHandler}>TOP</a>
            <div className='footer_box'>
               <div className='footer_top'>
                  <div className='footer_logo'><img src="/images/logo.png" alt="" /></div>
                  <ul>
                     <li><a href="https://blog.naver.com/htlatte" target="_blank" title="블로그 새창에 열림"><img src="/images/blog.png" alt="" /></a></li>
                     <li><a href="https://www.youtube.com/haitaico" target="_blank" title="유튜브 새창에 열림"><img src="/images/you.png" alt="" /></a></li>
                     <li><a href="https://www.instagram.com/haitai_co/#" target="_blank" title="인스타그램 새창에 열림"><img src="/images/in.png" alt="" /></a></li>
                  </ul>
               </div>
               <div className='footer_bottom'>
                 <address>
                 해태제과식품(주) <br/>
                  서울특별시 용산구 한강대로 72길 3 (남여동) <br/>
                  대표이사:신정훈 <br/>
                  <span>COPYRIGHT &copy; 2024 HAITAI CONFECTIONERY & FOODS CO.,LTD ALL RIGHTS RESERVED</span> 
                 </address>
                 <ul>
                  <li><a href="/">이용약관</a></li>
                  <li><a href="https://www.ht.co.kr/privacy/policy">개인정보처리방침</a></li>
                  <li><a href="https://www.ht.co.kr/privacy/email">이메일무단수집거부</a></li>
                 </ul>
               </div>
               <div className='footer_f' onMouseLeave={closeFamilyMenu}>
               <button type="button" onClick={familyHandler}>Family Site</button>
                 <ul  className={isSwitched ? "show" : "hide"}>
                   <li><a href="https://www.haitaimall.co.kr/" target="_blank" title="해태몰 사이트 새창에 열림">해태몰</a></li>
                   <li><a href="https://hainuri.ht.co.kr/" target="_blank" title="해누리 사이트 새창에 열림">해누리</a></li>
                   <li><a href="https://www.instagram.com/sue_avata_star/" target="_blank" title="아바타스터 슈 인스타그램 새창에 열림">아바타스타 슈 인스타그램</a></li>
                 </ul>
               </div>
            </div>
       </footer>
    );
  }

  export default Footer;