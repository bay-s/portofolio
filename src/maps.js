import React, { useEffect } from 'react'
import AOS from "aos";

function MapsCard(){

    const style = {
        width:`${800}px`, 
        height:`${450}px`,
        border:'none' 
    }
    useEffect(() => {
        AOS.refresh()
        AOS.init({
          duration : 2000
        });
      }, []);
    return(
        <div className='map-container' data-aos="fade-up">
            <div className='container d-flex justify-content-center align-items-center'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0042557358124!2d106.96459461626408!3d-6.263168350661968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698daf86eca9e7%3A0xff9e0c0087ddc5f9!2sGg.%20Samat%20I%2C%20RT.002%2FRW.003%2C%20Jaka%20Setia%2C%20Kec.%20Bekasi%20Sel.%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017147!5e0!3m2!1sid!2sid!4v1658509579545!5m2!1sid!2sid" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={style}></iframe>
            </div>
        </div>
    )
}

export default MapsCard;