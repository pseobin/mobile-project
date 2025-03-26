import Main from '../pages/Main';
import About from '../pages/About';
import Product from '../pages/Product';
import Character from '../pages/Character';
import Recruit from '../pages/Recruit';
import Service from '../pages/Service';

const navpass = [
    {
       path:'/',
       component:Main
     },
     {
       path:'/About',
       component:About
     },
    {
      path:'/Product',
      component:Product
    },
    {
     path:'/Character',
     component:Character
    },
    {
     path:'/Recruit',
     component:Recruit
    },
    {
      path:'/Service',
      component:Service
     }
  ];
  
  export default navpass;