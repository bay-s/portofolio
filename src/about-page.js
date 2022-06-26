import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos'
import bootIco from './icon/bootstrap.svg'
import fireIco from './icon/firebase.svg'
import jqueryIco from './icon/jquery.svg'
import cssIco from './icon/css3.svg'
import htmlIco from './icon/html5.svg'
import jsIco from './icon/javascript.svg'
import wordpIco from './icon/wordpress.svg'
import reactIco from './icon/react.svg'
import Footer from './footer';

function AboutPage (){

   const data = {
    serviceData:["Convert Design to HTML","Create Landing Page","Create Company Profile","Maintenance Website","Convert HTML to Wordpress Theme","Responsive Web Design","Create Custom Wordpress Themes"],
    skillSet:[jqueryIco,jsIco,htmlIco,cssIco,bootIco,fireIco,wordpIco,reactIco],
    skillTxt:["Jquery","JavaScript","HTML","CSS","Bootstrap","Firebase","Wordpress","React"]
   }

    useEffect(() => {
        AOS.init({
          duration:1100
        });
    },[])


    return(
<>
<div className='main-container'>
<div className='about-container' >
<div className='about-left' data-aos="fade-right">
<div className='image-wrap'>
    <img src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
</div>
</div>

<div className='about-right' data-aos="fade-left">
   <div className='title' >
   <div className="judul-span judul " data-aos="fade-up">
<p>
                <span className="hvr-wobble-vertical">W</span>
                <span className="hvr-wobble-vertical">h</span>
                <span className="hvr-wobble-vertical">o</span>

</p>
<p>
  <span className="hvr-wobble-vertical">i</span>
</p>
<p>
                <span className="hvr-wobble-vertical">A</span>
                <span className="hvr-wobble-vertical">m</span>
</p>
              </div>
     <div className='text'>
     <p>Born in Bekasi in 1994.</p>
   <p>Since 2020, he has also started working as a Web Developer and Wordpress as an freelancer.</p>
   <p>He also learning NodeJS and looking forward to be a Full Stack Web Developer.</p>
     </div>
   </div>
</div>
        </div>
  <div className='info'>
<div className='service-list'>
  <div className='title' data-aos="fade-up">
  <h2>Services</h2>
  </div>
{data.serviceData.map(data => {
    return <div class="service-card" data-aos="fade-up">
    <div class="card__icon"><i class="fa fa-tasks" aria-hidden="true"></i></div>
    <h3>{data}</h3>
    <div class="card__icon"><i class="fa fa-check" aria-hidden="true"></i></div>
</div>
})}
</div>

<div className='service-list'>
  <div className='title' data-aos="fade-up">
  <h2>Skill</h2>
  </div>
{data.skillSet.map((img,index)=> {
const text= data.skillTxt[index]
    return <div className="service-card" data-aos="fade-up">
<div className='icons'>
<img src={img} className='icon' alt={text}/>
    <h3>{text}</h3>
</div>
</div>
})}
</div>
  </div>      
</div>
</>
    )
}

export default AboutPage;
